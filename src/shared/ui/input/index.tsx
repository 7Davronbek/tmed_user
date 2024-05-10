import {ChangeEventHandler, FC} from "react";
import {Icon} from "@/shared";

type InputProps = {
    value: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    errorText?: string,
    placeholder: string,
    type?: string
}
export const Input:FC<InputProps> = ({value, onChange, errorText, placeholder, type = 'text' }) => {
    return (
        <div>
            <input
                value={value}
                onChange={onChange}
                className={`input ${errorText ? 'error' : ''}`}
                placeholder={placeholder}
                type={type}
            />
            <h5 className="errorMessage">{errorText && <span><Icon.ErrorIcon/> {errorText}</span>}</h5>
        </div>
    )
}