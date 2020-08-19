import React, {useState} from 'react'
import Input from "./Input"

export default function Form (props) {
    const {values, inputInfo} = props
     
    const onInputChange = evt => {
        const { name, value } = evt.target
        inputInfo(name, value)
      }



    return (
        <form>
            <Input
        type="text"
        name="name"
        value={values.name}
        onChange={onInputChange}
        label="Name: "
        
      />
      <Input
        type="text"
        name="email"
        value={values.email}
        onChange={onInputChange}
        label="Email: "
        
      />
      <Input
        type="text"
        name="password"
        onChange={onInputChange}
        value={values.password}
        label="Password: "
        
      />
      <label>
        <input 
        name="terms" 
        type="checkbox"
        checked ={values.terms === 'true'}
        onChange={onInputChange}  />
        Terms/ Conditions
      </label>
      <button>Submit</button>
        </form>
    )
}