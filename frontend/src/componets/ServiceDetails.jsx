/* eslint-disable react/prop-types */
import { useState } from "react";
import "../index.css";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useVenderServiceContext } from "../hooks/useVederContext";

const ServiceDetails = ({ service }) => {
  const { dispatch } = useVenderServiceContext();

  const [content, setContent] = useState(service.name);

  const handleClick = async () => {
    const response = await fetch(
      "/api/services/" + service._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    console.log(json, "deleted---------");

    if (response.ok) {
      dispatch({ type: "DELETE_SERVICE", payload: json });
    }
  };

  const handleContentChange = async (event) => {
    setContent(event.target.value);
  };

  const updateTitle = async () => {
    const response = await fetch(
      "/api/services/" + service._id,
      {
        method: "PATCH",
        body: JSON.stringify({
          name: content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json, "updated--------");
  };

  return (
    <div className="service-details">
      <div style={{ display: "flex", gap: "30px" }}>
        <textarea
          value={content}
          onChange={handleContentChange}
          style={{
            width: "20%",
            maxHeight: "15px",
            border: "1px solid black",
            padding: "5px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        />

        <button onClick={updateTitle}>update</button>
      </div>

      <p>
        <strong>Service Name: </strong>
        {service.name}
      </p>
      <p>
        <strong>Service Discription: </strong>
        {service.discription}
      </p>

      <p>
        <strong>Vender Name: </strong>
        {service.venderName}
      </p>

      <p>
        {formatDistanceToNow(new Date(service.createdAt), { addSuffix: true })}
      </p>

      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default ServiceDetails;
