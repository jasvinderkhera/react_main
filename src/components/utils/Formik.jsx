import React from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';

const initialValues ={
    name: "",
    email: "",
    password: "",
    confirm_password: ""
}

function Formik() {
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema: signUpSchema,
    
        onSubmit : function (values,action) {
            console.log("Values: ", values)
            action.resetForm()
        }
        
    })
    // console.log("Errors: ",errors)
      return (
    <div class='mx-5 p-5'>
      <form onSubmit={handleSubmit}>
        <div class="form-group py-sm-2">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' class="form-control" placeholder='Enter Your Name' id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} autoComplete='off'/>
        </div>
        {errors.name && touched.name ? (<p>{errors.name}</p>): null}
        <div class="form-group py-sm-2">
            <label htmlFor="email">Email</label>
            <input type="email" class="form-control" name='email' placeholder='Enter Your email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete='off'/>
        </div>
        {errors.email && touched.email ? (<p>{errors.email}</p>): null}
        <div class="form-group py-sm-2">
            <label htmlFor="password">Password</label>
            <input type="password" class="form-control" name='password' placeholder='Enter Your password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete='off'/>
        </div>
        {errors.password && touched.password ? (<p>{errors.password}</p>): null}
        <div class="form-group py-sm-2">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" class="form-control" name='confirm_password' placeholder='Confirm Your password' id='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} autoComplete='off'/>
        </div>
        {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>): null}
        <button type="submit" class="btn btn-primary">Register</button>
        </form>  
    </div>
  )
}

export default Formik