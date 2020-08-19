import React, {useState} from 'react';
import Form from "./Components/Form"
import './App.css';




const defaultState = {
  name: "",
  email: "",
  password: "",
  terms: false
};

function App() {
  const [formState, setFormState] = useState(defaultState)
  const [formValues, setFormValues] = useState(defaultState)


  const inputInfo = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

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
