import { FieldProps } from "formik"
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react"
type inputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>; 


export const inputField = ({
    field,
    form: _,
    ...props
}: FieldProps & inputProps) => {
    return (
        <input {...field} {...props}/>
    )
};

