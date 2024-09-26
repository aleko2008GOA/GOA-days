import {useState} from "react";

export function useHandleForm(){
    const [formData, setFormData] = useState({});

    function useHandleSubmit(target){
        const data = new FormData(target);
        const user = {};
        data.forEach((val, key) =>{
            user[key] = val != "" ? val : "Enter it first :)";
        });

        setFormData(user);
    }

    return [formData, useHandleSubmit];
}