import Link from 'next/link'
import React from 'react'

const initialFormData = Object.freeze({
  name:'jean',
  email: "jean@g.fr",
  age: "33",
  password: "ftjrxjr" 
});

function Info() {

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    
  }

  return (
    <div>
      <div className="grid  place-items-center">
        <Link href={'/'}><a>Sign Up</a></Link>
        <Link href={'/signIn'}><a>Sign In</a></Link>
      </div>
      <div className='grid place-items-center mt-6'>
          <h1 id='name'>Name : {formData.name}</h1>
          <p id='email'>Email : {formData.email}</p>
          <p id='age'>Age : {formData.age}</p>
          <p id='password'> Password : {formData.password}</p>
      </div>
    </div> 
  )

}

export default Info