import React, { ChangeEventHandler, FunctionComponent } from 'react'
interface Props {
  inputData: string,
  onChange: ChangeEventHandler,
  theme: string;
}
const controlStyle: React.CSSProperties = {
  margin: "auto",
  background: "gray",
}



const FormControl: FunctionComponent<Props> = ({ inputData, onChange, theme }) => {
  function isPassword(): boolean {
    return /password/.test(theme.toLowerCase())
  }
  return (
    <div className="form-control" style={controlStyle}>
      <label htmlFor="" style={{ display: "block" }}>{theme}</label>
      <input type={isPassword() ? "password" : "text"} value={inputData} placeholder={'Enter ' + theme} onChange={onChange} name={theme} />
    </div>
  )
}



export default FormControl
