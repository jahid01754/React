"use client"
import { useState } from "react";

export default function PasswordField(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => (!prev))
    }
    return( 
        <div className="flex justify-center items-center mt-10">
            <div className="w-96 h-96 border border-slate-400  flex flex-col px-4 py-10 rounded-2xl ">
                <label htmlFor="name" className="mb-2 ">Name</label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChangeName}
                    className="border border-slate-400 px-3 py-2 rounded"
                ></input>
                <label htmlFor="password" className="mb-2 ">Password</label>
                <input 
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handleChangePassword}
                    className="border border-slate-400 px-3 py-2 rounded"
                ></input>

                <buttton type ="button" onClick = {togglePasswordVisibility} className="">{showPassword ? "Hide": "Show"}</buttton>
            </div>
        </div>
    );
}