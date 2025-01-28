import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicYupPage = () => {

    const onSubmit = ( values: FormValues ) => {    
        console.log('Values from formik: ', values);
    }

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max( 15, 'Must be 15 characters or less' )
                .required('Requried'),
            lastName: Yup.string()
                .max( 20, 'Must be 15 characters or less' )
                .required('Requried'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Requried'),
        }),
        onSubmit
    });
    

    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text"
                    { ...getFieldProps('firstName') }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }
                

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    { ...getFieldProps('lastName') }
                />
                { touched.lastName &&  errors.lastName && <span>{ errors.lastName }</span> }
                
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    { ...getFieldProps('email') }
                />
                
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
