/* eslint-disable no-unused-vars */
import  {ErrorMessage, Form, Formik} from 'formik'
import { loginSchema } from '../../schemas'
import InputField from '../Shared/InputField'
import Button from '../Shared/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Formik
    validationSchema={loginSchema}
    initialValues={{
      email: '',
      password: ''
    }}
    onSubmit={(values)=>console.log(values)}
    
    >
      {({isValid,dirty})=>{
      return (
      <Form>
        <div className='my-3'>
          <InputField name="email" placeholder="Email" />
          <ErrorMessage className='text-danger' name="email" component="small"/>
        </div>
        <div className='my-3'>
          <InputField name="password" placeholder="Password" typeName="password" />
          <ErrorMessage className='text-danger' name="password" component="small"/>
        </div>
        <p className='py-2 text-center'>Not a Member Yet? <Link to={"/register"}>Register</Link> </p>
        <Button disabled={!isValid || !dirty} type='submit' isIconExist={true}>Login</Button>
      </Form> 
      )   }}
        
      
    </Formik>
  )
}

export default Login