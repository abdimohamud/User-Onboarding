import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address'),
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 3 characters long')
    .required('Password is Required'),
    terms: yup
    .boolean().required("Just do it")
})

export default formSchema
