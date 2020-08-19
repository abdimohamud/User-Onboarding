import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email address'),
    password: yup
      .string()
      .min(6, "Your password must include 6 characters")

  })
  
  export default formSchema