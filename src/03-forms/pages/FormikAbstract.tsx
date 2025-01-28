import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikAbstract = () => {

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
                    <MyTextInput label="First Name" name="firstName"/>
                    <MyTextInput label="Last Name" name="lastName"/>
                    <MyTextInput label="Email" name="email" type="email"/>

                    <MyCheckbox label="Terms and conditions" name='terms' />
        
                    <MySelect name="jobType" label="Job Type" >
                        <option value="">Pick something</option>
                        <option value="dev">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>
                    </MySelect>

                    <button type="submit">Submit</button>
                </Form>
                    
            </Formik>

        </div>
    )
}
