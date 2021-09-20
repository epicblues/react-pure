import React, { ChangeEventHandler, FunctionComponent } from 'react'
interface Props {
  inputData: string,
  onChange: ChangeEventHandler,
  theme: string;
  isValid: boolean;
}
const controlStyle: React.CSSProperties = {
  margin: "auto",
  background: "gray",
}




const FormControl: FunctionComponent<Props> = ({ inputData, onChange, theme, isValid }) => {
  function isPassword(): boolean {
    return /password/.test(theme.toLowerCase())
  }
  return (
    <div className="form-control" style={controlStyle}>
      <label htmlFor="" style={{ display: "block" }}>{theme}</label>
      <input type={isPassword() ? "password" : "text"} value={inputData} placeholder={'Please Submit Your ' + theme} onChange={onChange} name={theme} style={{ border: "3px solid " + (isValid ? "green" : "red") }} />
    </div>
  )
}



export default FormControl
