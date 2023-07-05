import React from "react";
import './Input.css'

function Input({ name, onChange, isCorrect, title, placeholder  }) {

    return (
        <div>
          <label htmlFor={name}>{title}: </label>
          <input  type={name} onChange={onChange} placeholder={placeholder} name={name} />

          {isCorrect || <div className="error-message">You format is incorrect</div>}
        </div>
    )
}

export default Input;