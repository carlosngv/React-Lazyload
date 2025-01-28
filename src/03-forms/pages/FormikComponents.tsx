import '../styles/styles.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikComponents = () => {

    const onSubmit = ( values: FormValues ) => {    
        console.log('Values from formik: ', values);
    }


    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={ 
                    {
                        firstName: '',
                        lastName: '',
                        email: '',
                        terms: false,
                        jobType: '',
                    } 
                }
                onSubmit={ onSubmit }
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max( 15, 'Must be 15 characters or less' )
                            .required('Required'),
                        lastName: Yup.string()
                            .max( 20, 'Must be 15 characters or less' )
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        terms: Yup.boolean()
                            .isTrue('Terms and condition must be selected'),
                        jobType: Yup.string()
                            .notOneOf(['dev'], 'Option is not valid')
                            .required('Required'),
                            
                    })
                }
            >

                <Form noValidate>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" component="span" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" component="span" />
                    
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="span" />
                    
                    <label htmlFor="terms">
                        Terms and conditions
                        <Field name="terms" type="checkbox" />
                    </label>
                    
                    <ErrorMessage name="terms" component="span" />

                    <label htmlFor="jobType">jobType</label>
                    <Field name="jobType" as="select" >
                        <option value="">Pick something</option>
                        <option value="dev">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                    </Field>
                    <ErrorMessage name="jobType" component="span" />

                    <button type="submit">Submit</button>
                </Form>
                    
            </Formik>

        </div>
    )
}
