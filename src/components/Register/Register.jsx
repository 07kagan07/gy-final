/* eslint-disable no-unused-vars */
import  {ErrorMessage, Form, Formik} from 'formik'
import { registerSchema } from '../../schemas'
import InputField from '../Shared/InputField'
import Button from '../Shared/Button'
import { Link } from 'react-router-dom'
import { register } from '../../services/userControl'

const Register = () => {
  return (
    <Formik
    validationSchema={registerSchema}
    initialValues={{
      email: '',
      password: '',
      confirmPassword: ''
    }}
    onSubmit={async(values)=>await register(values)}
    
    >
      {({isValid,dirty})=>{
      return (
      <Form>
        <InputField name="email" placeholder="Email" />
        <ErrorMessage className='text-danger' name="email" component="small"/>
        <InputField name="password" placeholder="Password" typeName="password" />
        <ErrorMessage className='text-danger' name="password" component="small"/>
        <InputField name="confirmPassword" placeholder="Confirm Password" typeName="password" />
        <ErrorMessage className='text-danger' name="confirmPassword" component="small"/>
        <p className='py-2 text-center'>Already have an account? <Link to={"/login"}>Login</Link> </p>
        <Button disabled={!isValid || !dirty} type='submit' isIconExist={true}>Register</Button>
      </Form> 
      )   }}
        
      
    </Formik>
  )
}

export default Register