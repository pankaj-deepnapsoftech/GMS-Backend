import {object,string} from "yup";


export const authValidation = object({
    email: string().email("Invalid email").required("Email is required"),
    password: string().min(8, "Password must be at least 8 characters").required("password is required"),
    name:string().min(2 , "minimum 2 character is required").required("name is required"),
});