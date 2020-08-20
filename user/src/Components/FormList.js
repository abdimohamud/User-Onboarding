import React from 'react';

function FormList (props) {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
      const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
        evt.persist()
      }

    return(
        <div className="lol">
            
      <form onSubmit={onSubmit}>

            <div className='errors'>

            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.role}</div>
            <div>{errors.terms}</div>
            </div>
            
        <label>Username: &nbsp;
          <input
              value={values.username}
              onChange={onInputChange}
              name='username'
              type='text'
            />
        </label>
        <label>Email: &nbsp;
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password: &nbsp;
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='text'
          />
        </label>
        <label className="terms">
          <input 
          name="terms" 
          type="checkbox" 
          onChange={onCheckboxChange} 
          />
        Terms/ Conditions
      </label>
      <button disabled={disabled}>submit</button>



      </form>


    </div>
    )
}

export default FormList;