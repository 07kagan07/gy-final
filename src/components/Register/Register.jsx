/* eslint-disable no-unused-vars */
import  {ErrorMessage, Form, Formik} from 'formik'
import { registerSchema } from '../../schemas'
import InputField from '../Shared/InputField'
import Button from '../Shared/Button'
import { Link,useNavigate } from 'react-router-dom'
import { register } from '../../services/userControl'
import { useState } from 'react'

const Register = () => {
const navigate = useNavigate()
  const [isUserExist, setIsUserExist] = useState("")


  return (
    <Formik
    validationSchema={registerSchema}
    initialValues={{
      email: '',
      password: '',
      confirmPassword: ''
    }}
    onSubmit={async(values)=> {
      try {
        await register(values)
        setTimeout(() => {
          navigate('/')
        }, 1000);
        
      } catch (error) {
        setIsUserExist(error.message)
      }
      }}
    
    >
      {({isValid,dirty,errors})=>{
      return (
      <Form>
        <InputField onFocus={()=>setIsUserExist("")} name="email" placeholder="Email" />
        <ErrorMessage className='text-danger' name="email" component="small"/>
        <InputField name="password" placeholder="Password" typeName="password" />
        <ErrorMessage className='text-danger' name="password" component="small"/>
        <InputField name="confirmPassword" placeholder="Confirm Password" typeName="password" />
        <ErrorMessage className='text-danger' name="confirmPassword" component="small"/>
        <p className='py-2 text-center'>Already have an account? <Link to={"/login"}>Login</Link> </p>
        <div className='d-flex align-items-center justify-content-between'>
          <Button disabled={!isValid || !dirty} type='submit' isIconExist={true}>Register</Button>
        <p className='text-danger text-center m-0'>{isUserExist}</p>

          </div>
      </Form> 
      )   }}
        
      
    </Formik>
  )
}

export default Register