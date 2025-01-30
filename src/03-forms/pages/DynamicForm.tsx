import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';

import * as Yup from 'yup';

const initialValues: {[ key: string ]: any} = {};
const requiredFields: {[ key: string ]: any} = {};


for (const input of formJson) {
    initialValues[ input.name ] = input.value;
    if( !input.validations ) continue;
    
    let schema = Yup.string();
    for ( const rule of input.validations ) {
        if( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido');
        }

        if( rule.type === 'minLength' ) {
            schema = schema.min( rule.value!, `${input.label} must have at least ${ rule.value } characters` );
        }

        if( rule.type === 'email' ) {
            schema = schema.email('Email address must be valid')
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={ initialValues }

                onSubmit={ ( values ) => {
                    console.log(values)
                }}

                validationSchema={ validationSchema }

            >
                { ( _formik ) => (
                    <Form noValidate>
                        { 
                            formJson.map( ({ type, name, label, placeholder, options }) => {

                                if(type === 'input' || type === 'password' || type === 'email')
                                    return (
                                        <MyTextInput key={name} placeholder={placeholder} type={type} name={name} label={label} />
                                    )
                                if( type === 'select' && options )
                                    return (
                                        <MySelect 
                                            key={name}
                                            type={type}
                                            name={name} 
                                            label={label}                                            
                                        >
                                            { options?.map( ({id, label}) => ( <option key={id} value={id}>{ label }</option> )) }
                                        </MySelect>
                                    )

                            })
                        }
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
