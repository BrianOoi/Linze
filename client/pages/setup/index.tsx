import { Field, Formik } from 'formik'
import React from 'react'
import { inputField } from '../../components/fields/inputFields'

const Setup = () => {
  
  return ( 

    <Formik 
    onSubmit={data =>{
      console.log(data)
    }} 
    initialValues={{
      firstName: "",
      lastName:"",
      gender:""
    }}
    >
      {({handleSubmit}) => (
      <form onSubmit={handleSubmit} className= "flex flex-col">
        <div className='flex flex-col'>
        <Field className=""
        name="firstName" 
        placeholder="First Name" 
        componoent={inputField}
        />
        <Field 
        name="lastName"
        placeholder="Last Name"
        componoent={inputField}
        />
        <select className=' text-sm'
        name="gender"
        placeholder='Gender'
        >
          <option value="male">Man</option>
          <option value="Female">Woman</option>
          <option value="Other">Other</option>
          </select> 
        </div>
        <button className='bg-alternative text-primary rounded-2xl hover:bg-primary hover:border-alternative hover:text-alternative py-2 px-6 duration-100' type="submit">Submit</button>
      </form>
    )}</Formik>
  )
}

export default Setup
