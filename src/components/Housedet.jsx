import { useState } from "react";
import axios from "axios";

export function Housedet(){
    const [formData, setFormData] = useState(
        {
            Name: "",
            Owners: "",
            Address: "",
            Area: "",
            rent: "",
            preferred: "",
            image_url: ""
        }
    )
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData({
            ...formData, [id] : value,
        })
    };
    const handleSubmit = (e)=>{
        const {id,value} = e.target;
        
        setFormData({...formData,[id]:value});

        axios.post("http://localhost:8080/houses",formData)
    };

    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" id="Name" onChange={handleChange} placeholder="Enter The House Name Here" /> <br />
            <input type="text" id="Owners" onChange={handleChange} placeholder="Enter The House Owner Name Here" /> <br />
            <textarea name="" id="Address" cols="30" rows="10"></textarea>
            <input type="text" id="Area" onChange={handleChange} placeholder="Enter The House Area Here" /> <br />
            <input type="text" id="rent" onChange={handleChange} placeholder="Enter The House Rent Here" /> <br />
            <input type="checkbox" id="preferred" /> bachelors <input type="checkbox" id="preferred" /> married
            <input type="text" id="image_url" onChange={handleChange} placeholder="Enter The House Image Url Here" /> <br />
            <input type="submit" value="Submit" />
        </form>
    )
}