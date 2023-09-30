import React, { useState } from "react";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create (){
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
 
        const newtitleData = {
            title,
            description, 
            status,
        };

        
        axios.post("http://localhost:8081/create", newtitleData)
        .then(response => {
            console.log("title created successfully:", response.data);
            
            settitle('');
            setDescription('');
            setStatus('');
            navigate('/');
        })
        .catch(err => {
            console.error("Error creating title:", err);
        });
    }

    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add title</h2>
                    <div className="mb-2">
                        <label htmlFor="title">Title </label>
                        <input type="text" id="title" name="title" placeholder="Enter title " className="form-control"
                            value={title} onChange={(e) => settitle(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" cols="20" rows="5" placeholder="Enter title Description" className="form-control"
                            value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="status">status</label>
                        <input type="text" id="status" name="status" placeholder="Enter title status" className="form-control"
                            value={status} onChange={(e) => setStatus(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Create;
