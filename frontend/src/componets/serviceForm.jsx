import { useState } from "react";
import { useVenderServiceContext } from "../hooks/useVederContext";

const ServiceForm = () => {
  const { dispatch } = useVenderServiceContext();

  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [venderName, setVenderName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const service = { name, discription, venderName };

    const response = await fetch("http://localhost:4000/api/services", {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (response.ok) {
      setName("");
      setDiscription("");
      setVenderName("");
      dispatch({ type: "CREATE_SERVICE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Service</h3>

      <label>Service Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Service Discription</label>
      <input
        type="text"
        onChange={(e) => setDiscription(e.target.value)}
        value={discription}
      />

      <label>Vender Name:</label>
      <input
        type="text"
        onChange={(e) => setVenderName(e.target.value)}
        value={venderName}
      />

      <button>Add Service</button>
    </form>
  );
};

export default ServiceForm;
