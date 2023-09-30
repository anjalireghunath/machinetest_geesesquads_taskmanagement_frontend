import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/gettask/${id}`)
            .then(response => {
                 const { title, description, status } = response.data;
                setTitle(title);
                setDescription(description);
                setStatus(status);
            }) 
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8081/update/${id}`, { title, description, status })
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update title</h2>
                    <div className="mb-2">
                        <label htmlFor="title">Title </label>
                        <input type="text" id="title"  placeholder="Enter title " className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description" cols="20" rows="5"
                            placeholder="Enter title Description"  className="form-control"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="status">status</label>
                        <input
                            type="text" id="status" placeholder="Enter title status"
                            className="form-control"
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            required
                        />
                    </div>
                    <button className="btn btn-primary" >Update</button>
                    <Link to="/" className="btn btn-secondary ml-2">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default Update;
