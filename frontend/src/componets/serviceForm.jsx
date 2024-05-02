import { useState } from "react";
import { useVenderServiceContext } from "../hooks/useVederContext";

const ServiceForm = () =>{

    const { dispatch } = useVenderServiceContext()

    const [name, setName] = useState('')
    const [discription, setDiscription] = useState('')
    const [venderName, setVenderName] = useState('')

  
    // const [error, setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const service = { name, discription, venderName }
      
      const response = await fetch('http://localhost:4000/api/services', {
        method: 'POST',
        body: JSON.stringify(service),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        // setError(json.error)
        // setEmptyFields(json.emptyFields)
      
      }
      if (response.ok) {
        // setEmptyFields([])
        // setError(null)
        setName('')
        setDiscription('')
        setVenderName('')
        dispatch({type: 'CREATE_SERVICE', payload: json})
      }
  
    }
  
    return (
      <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New Service</h3>
  
        <label>Service Name:</label>
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          value={name}
        //   className={emptyFields.includes('name') ? 'error' : ''}
        />
  
        <label>Service Discription</label>
        <input 
          type="text" 
          onChange={(e) => setDiscription(e.target.value)} 
          value={discription}
        //   className={emptyFields.includes('discription') ? 'error' : ''}
        />
  
        <label>Vender Name:</label>
        <input 
          type="text" 
          onChange={(e) => setVenderName(e.target.value)} 
          value={venderName}
        //   className={emptyFields.includes('venderName') ? 'error' : ''}
        />
  
        <button>Add Service</button>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    )
       

}


export default ServiceForm
