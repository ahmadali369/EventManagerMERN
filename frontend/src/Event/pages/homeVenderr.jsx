import { useEffect } from "react";

import "../index.css";

import { useVenderServiceContext } from "../hooks/useVederContext";
// import ServiceForm from "../components/serviceForm";
import ServiceDetails from "../components/ServiceDetails";

const Event = () => {
  const { services, dispatch } = useVenderServiceContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/events");
      const json = await response.json();
      console.log(json, "all data------------");

      if (response.ok) {
        dispatch({ type: "SET_SERVICES", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="pages">
      <div className="home">
        <div className="service">
          {services &&
            services.map((service) => (
              <ServiceDetails service={service} key={service._id} />
            ))}
        </div>
        <ServiceForm />

      </div>
    </div>
  );
};

export default Event;
