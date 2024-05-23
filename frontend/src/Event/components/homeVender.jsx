import { useState, useEffect, createContext, useReducer, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../App.css"; // Ensure this path is correct
import ServiceForm from "./serviceForm"; // Ensure this path is correct
import ServiceDetails from "./ServiceDetails"; // Ensure this path is correct

// Create Context
const VenderServiceContext = createContext();

// Reducer function
const VenderSerivceReducer = (state, action) => {
  switch (action.type) {
    case "SET_SERVICES":
      return { services: action.payload };
    case "CREATE_SERVICE":
      return { services: [action.payload, ...state.services] };
    case "DELETE_SERVICE":
      return { services: state.services.filter((s) => s._id !== action.payload._id) };
    default:
      return state;
  }
};

// Context Provider Component
const VenderSerivceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VenderSerivceReducer, { services: [] });

  return (
    <VenderServiceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VenderServiceContext.Provider>
  );
};

// Custom Hook
export const useVenderServiceContext = () => {
  const context = useContext(VenderServiceContext);
  if (!context) {
    throw new Error("useVenderServiceContext must be used within the Provider");
  }
  return context;
};

// Event Component
const Event = () => {
  const { services, dispatch } = useVenderServiceContext();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/events", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        dispatch({ type: "SET_SERVICES", payload: response.data });
      } catch (error) {
        toast.error("Failed to fetch services");
      }
    };

    fetchServices();
  }, [dispatch]);

  const createService = async (newService) => {
    try {
      const response = await axios.post("/api/events", newService, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      dispatch({ type: "CREATE_SERVICE", payload: response.data });
      toast.success("Service created successfully");
    } catch (error) {
      toast.error("Failed to create service");
    }
  };

  const deleteService = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      dispatch({ type: "DELETE_SERVICE", payload: { _id: id } });
      toast.success("Service deleted successfully");
    } catch (error) {
      toast.error("Failed to delete service");
    }
  };

  return (
    <div className="pages">
      <div className="home">
        <div className="service">
          {services.map((service) => (
            <ServiceDetails
              service={service}
              key={service._id}
              deleteService={() => deleteService(service._id)}
            />
          ))}
        </div>
        <ServiceForm createService={createService} />
      </div>
    </div>
  );
};

// Export wrapped Event component
const WrappedEvent = () => (
  <VenderSerivceContextProvider>
    <Event />
  </VenderSerivceContextProvider>
);

export default WrappedEvent;
