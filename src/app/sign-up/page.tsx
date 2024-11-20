"use client"
import { useState } from "react"

export default function Page(){
    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [passwordConfirm, setPasswordConfirm]=useState("")
    const [isValid, setIsValid]=useState(false)
    const hasUppercase=false
    const hasLowercase=false
    const hasNumber=false
    const hasSpecialChar=false
    const passwordsAreSame=password===passwordConfirm

    
    return(<div>
        sign-up
        <div>
            <input placeholder="name" type="email" value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
            <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div>
            <input placeholder="re-passwords" type="password" value={passwordConfirm} onChange={e=>setPasswordConfirm(e.target.value)}/>
        </div>

        <ul>
            <li className={hasUppercase? "text-green-600" : "text-red-600"}>Tom useg orson bh</li>
            <li className={hasLowercase? "text-green-600" : "text-red-600"}>Jijig useg orson bh</li>
            <li className={hasNumber? "text-green-600" : "text-red-600"}>Too orson bh</li>
            <li className={hasSpecialChar? "text-green-600" : "text-red-600"}>Temdegt orson bh</li>
            <li className={passwordsAreSame? "text-green-600" : "text-red-600"}>Davtsan pass zuv bn</li>
        </ul>

        <button className="p-4 rounded-md bg-slate-100 text-black disabled:opacity-30 disabled:cursor-not-allowed" disabled={!isValid}>Sign-up</button>

    </div>) 
}