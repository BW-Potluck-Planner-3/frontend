import * as yup from 'yup';

const regSchema = yup.object().shape({
  username: yup 
    .string()
    .trim()
    .required('A username is required')
    .min(6, 'Your username must be at least 6 characters'),
  password: yup
    .string()
    .required('A password is required')
    .min(8, 'Your password must be at least 8 charcters')
})

export default regSchema;