import { useEffect } from "react";

import "../index.css";

import { useVenderServiceContext } from "../hooks/useVederContext";
import ServiceForm from "../componets/serviceForm";
import ServiceDetails from "../componets/ServiceDetails";

// components

const HomeVender = () => {
  const { services, dispatch } = useVenderServiceContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/services");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_SERVICES", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="service">
        {services &&
          services.map((service) => (
            <ServiceDetails service={service} key={service._id} />
          ))}
      </div>
      <ServiceForm />
    </div>
  );
};

export default HomeVender;
