import React, {useState, useEffect} from 'react';
import Form from "./Components/Form"
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import Input from './Components/Input'
import formSchema from './Validation/formSchema'




const defaultState = {
  name: "",
  email: "",
  password: "",
  terms: false
};

function App() {
  const [friends, setFriends] = useState(initialFriends)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)

  const getFriends = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setFriends(res.data.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewFriend = newFriend => {
     axios.post('https://reqres.in/api/user', newFriend)
      .then(res => {
        
        setFriends([...friends, .res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }
  const inputInfo = (name, value) => {
    yup 
      .reach(formSchema, name)
      .validate(value)
      .then(valid
    setFormValues({
      ...formValues,
      [name]: value
    })
    

  })

  const submit = () => {
    // const newFriend = {
    //   username: formValues.username.trim(),
    //   email: formValues.email.trim(),
    //   password: formValues.password.trim(),
    //   terms: formValues.terms.trim(),
    //   
    // }
    // 
  }

  return (
    <div className="App">
      <h1>OnBoard</h1>
      <Form
      values={formValues}
      inputInfo={inputInfo}
      submit={submit}
      />
    </div>
  );
}

export default App;
