import React from 'react'

const Button = (props) => {
  return (
    <button disabled={props.text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={props.handleClick}>{props.btnText}</button>
  )
}

export default Button
