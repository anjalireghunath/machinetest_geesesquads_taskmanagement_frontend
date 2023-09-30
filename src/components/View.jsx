import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function View() {
  const [taskId, setTaskId] = useState(null); 
  const [taskDetails, setTaskDetails] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  
  const fetchTaskDetails = async () => {
    try {
      setLoading(true); 
      setError(null); 
 
      
      const response = await axios.get(`http://localhost:8081/tasks/${taskId}`);
      const data = response.data;

      setTaskDetails(data); 
    } catch (error) {
      setError(error); 
    } finally {
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    if (taskId !== null) {
      fetchTaskDetails();
    }
  }, [taskId]);

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
      <h1>View Task</h1>
      <input
        type="text"
        placeholder="Enter Task ID"
        value={taskId || ""}
        onChange={(e) => setTaskId(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {taskDetails ? (
        <div>
          <h2>Task Details</h2>
          <table className="table">
          <thead>
          <tr>
             
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>

          </tbody>
            <tr>
                <td>{taskDetails.title}</td>
                <td>{taskDetails.description}</td>
                <td>{taskDetails.status}</td>
            </tr>

          </table>
          
        </div>
      ) : (
        taskId !== null && <p>No task details available for the provided ID.</p>
        
      )}
      <br />
      <br />
      
      <Link to="/" className="btn btn-secondary ml-2">Cancel</Link>
      
      
    </div>
    </div>
  );
}

export default View;
