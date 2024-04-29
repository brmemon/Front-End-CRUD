import { TextField } from '@mui/material'
import React from 'react'

const Input = ({ className, type, label, disabled, onChange, value, name,id }) => {
  return (
    <div>
        <TextField
        label={label}
        value={value}
        type={type}
        onChange={onChange}
        className={className}
        disabled={disabled}
        name={name}
        id={id}/>
    </div>
  )
}

export default Input