import React, {useState, useEffect} from 'react';
import axios from "axios"
import * as yup from 'yup'

import Form from './Components/Form'
import FormList from './Components/FormList'
import formSchema from './Validity/formSchema'
import './App.css';
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  username: '',
  email: '',
  role: '',
  terms: '',
}
const initialFriends = []
const initialDisabled = true

function App() {
  const [friends, setFriends] = useState(initialFriends)          
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 


  const getFriends = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
          setFriends(res.data.data)
      })
      .catch(err => {
      console.log("error")
      })
      }

  const postNewFriend = newFriend => {
       
        axios.post('https://reqres.in/api/users', newFriend)
          .then(res => {
            setFriends([...friends, res.data])
          })
          .catch(err => {
            debugger
          })
          .finally(() => {
            setFormValues(initialFormValues)
          })
      }
      const inputChange = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: "",
          })
        })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors,
        })
      })
        setFormValues({
          ...formValues,
          [name]: value, // NOT AN ARRAY
        })
      }

      const checkboxChange = (name, isChecked) => {
        setFormValues({
          ...formValues,
            [name]: isChecked
          
        })
      }
      
      const submit = () => {
        const newFriend = {
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          civil: formValues.term
     
        
      }
      postNewFriend(newFriend)
    }
    
    useEffect(() => {
      getFriends()
    }, [])

    useEffect(() => {
      // 🔥 STEP 10- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
      formSchema.isValid(formValues)
        .then(valid => {
          setDisabled(!valid);
        })
    }, [formValues])
  return (
    <div className="App">
        <div className="App">
      <FormList
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        friends.map(friend => {
          return (
            <Form key={friend.id} details={friend} />
          )
        })
      }
    </div>
    </div>
  );
}

export default App;
