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
      }

    return(
        <div className="lol">
            
      <form onSubmit={onSubmit}>
      <button disabled={disabled}>submit</button>

            <div className='errors'>
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.role}</div>
            <div>{errors.civil}</div>
            </div>
            
        <label>Username&nbsp;
          <input
              value={values.username}
              onChange={onInputChange}
              name='username'
              type='text'
            />
        </label>
        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password
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
          onChange={inputChange} 
          />
        Terms/ Conditions
      </label>



      </form>


    </div>
    )
}

export default FormList;