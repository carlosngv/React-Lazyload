import { BaseSyntheticEvent, useState } from "react";

export const useForm = <T>( initialFormState: T ) => {

    const [formData, setFormData] = useState( initialFormState );

    const onChange = ( event: BaseSyntheticEvent ) => {
        const { name, value } = event.target;
        setFormData( prev => ({ ...prev, [ name ]: value }))
    }

    const resetForm = () => {
        setFormData({...initialFormState});
    }

    return {
        ...formData,
        formData,
        onChange,
        resetForm
    };
}
