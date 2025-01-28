
import React from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { onChange, name, email, password1, password2, formData, resetForm } = useForm({
        name: 'Carlos',
        email: 'carlos@mail.com',
        password1: '123456',
        password2: '123456',
    });

    const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        console.log( formData )
        resetForm();
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={ onSubmit }>

                <input 
                    type="text"
                    placeholder="name" 
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className="has-error"
                />

                <span>Este campo es necesario</span>

                <input 
                    type="email"
                    placeholder="email" 
                    name="email"
                    value={ email }
                    onChange={ onChange }
                />

                <input 
                    type="password"
                    placeholder="password" 
                    name="password1"
                    value={ password1 }
                    onChange={ onChange }
                />

                <input 
                    type="password"
                    placeholder="Repeat password" 
                    name="password2"
                    value={ password2 }
                    onChange={ onChange }
                />

                <button type="submit">Create</button>

            </form>
        </div>
    )
}
