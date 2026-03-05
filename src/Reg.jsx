import axios from "axios";
import { useState } from "react";

function Reg() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const changeName = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = async () => {
        try {
            const res = await axios.post("https://backendproject-l3xv.onrender.com"/register, data);
            alert(res.data);
        } catch (xyz) {
            alert(xyz.response?.data || "Error occurred");
        }
    };

    return (
        <>
            <h1>I am Reg...</h1>
            <input type="text" name="username" placeholder="Enter username" onChange={changeName} /><br/>
            <input type="email" name="email" placeholder="Enter email" onChange={changeName} /><br/>
            <input type="password" name="password" placeholder="Enter password" onChange={changeName} /><br/>
            <button onClick={submit}>Submit</button>
        </>
    );
}

export default Reg;
