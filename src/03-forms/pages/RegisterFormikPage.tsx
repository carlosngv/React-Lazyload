
import '../styles/styles.css';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

export const RegisterFormikPage = () => {


    const onSubmit = ( values: FormValues ) => {
        
        console.log(values);
        
    }

    return (
        <div>
            <h1>Register Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }} 
                onSubmit={ onSubmit }
                validationSchema={ Yup.object({
                    name: Yup.string().min(10, 'Name must be at least 10 characters').required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password1: Yup.string().min(7, 'Password must be at least 7 characters').required('Required'),
                    password2: Yup.string().min(7, 'Password must be at least 7 characters').required('Required'),
                }) }
            >
                {
                    ( { handleReset } ) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" placeholder="Name" />
                            <ErrorMessage name="name" component="span"/>

                            <label htmlFor="Email">Email</label>
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="password1">Password</label>
                            <Field type="password" name="password1" />
                            <ErrorMessage name="password1" component="span" />

                            <label htmlFor="password2">Repeata Password</label>
                            <Field type="password" name="password2" />
                            <ErrorMessage name="password2" component="span" />

                            <button type="submit">Create</button>
                            <button onClick={ handleReset }>Reset</button>
                        </Form>
                    )
                }

            </Formik>
          
        </div>
    )
}
