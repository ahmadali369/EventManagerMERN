import { useState } from "react";
import { useVenderServiceContext } from "./homeVender";


const ServiceForm = () => {
  const { dispatch } = useVenderServiceContext();

  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [venderName, setVenderName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const service = { name, discription, venderName };

    const response = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json, 'new created-------------------')

    if (response.ok) {
      setName("");
      setDiscription("");
      setVenderName("");
      dispatch({ type: "CREATE_SERVICE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Event</h3>

      <label>Event Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Event Details</label>
      <input
        type="text"
        onChange={(e) => setDiscription(e.target.value)}
        value={discription}
      />

      <label>Location:</label>
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
