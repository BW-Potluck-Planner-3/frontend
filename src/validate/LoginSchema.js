import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup 
    .string()
    .trim()
    .required('A username is required')
    .min(3, 'Your username must be at least 3 characters'),
  password: yup
    .string()
    .required('A password is required')
    .min(8, 'Your password must be at least 8 charcters'),
  remember: yup.boolean()
})

export default loginSchema;