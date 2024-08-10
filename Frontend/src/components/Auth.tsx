
import { Link, useNavigate } from "react-router-dom"

export const Auth = ({type} : {type: "signup" | "signin"})=>{

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10 text-center">
                    <div className="text-3xl font-extrabold">
                        {type === "signup" ? "Create an account" : "Sign in Account"}
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ?"Don't have an account": "Already have an account?"}
                        <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signin" ? "Sign up" : "Sign in"}</Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type ==="signup" ? <LabelledInput label="Name" placeholder="Your name here"/>:null}
                    <LabelledInput label="Email" placeholder="Your email here"/>
                    <LabelledInput label="password" type={"password"} placeholder="Your password here"/>
                </div>
                <button type="button" className="mt-7 p-3 text-md w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 ">{type === "signup" ? "Sign up" : "Sign in"}</button>

            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({placeholder,type, label} : LabelledInputType){
    return <div>
    <label className="block mb-2 text-sm text-black font-semibold pt-2">{label}</label>
    <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}