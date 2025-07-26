import { useState } from 'react'

export default function Input({ label, type, id, htmlFor, placeholder }) {

  const [valueInput, setValueInput] = useState('')

  return (
    <>
      <div className="d-flex flex-column align-items-start">
        <label className={`${valueInput==""?"hidden-label": ""} label-transition text-main`} htmlFor={htmlFor}> {label}</label>
        <input onChange={(e)=>{setValueInput(e.target.value)}} value={valueInput} type={type} id={id} className="form-control w-100 my-3 border-0 border-bottom py-1 z-2" placeholder={placeholder} />
      </div>
    </>
  )
}
