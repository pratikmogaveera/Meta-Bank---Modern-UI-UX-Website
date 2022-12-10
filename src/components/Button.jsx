import React from 'react'

const Button = ({ styles, text }) => {
  return (
    <button type="button" className={`py-2 px-6 bg-blue-gradient rounded-[10px] font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>{text}</button>
  )
}

export default Button