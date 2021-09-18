import { ChangeEvent, ChangeEventHandler, Component, Fragment } from 'react';
import React from 'react';
import FormControl from './FormControl'
interface formValue {
  value: string,
  isValid: boolean
}

interface State {
  username: formValue,
  email: formValue,
  password: formValue,
  confirmPassword: formValue,

}


export default class KMSTypeComponent extends Component<any, State> {

  state = {
    username: { value: "", isValid: false },
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    confirmPassword: { value: "", isValid: false }
  }



  setName: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    if (/^[a-z0-9]{8,11}$/.test(value)) {
      e.currentTarget.style.border = "3px green solid";
      this.setState({ username: { value, isValid: true } })
    } else {
      e.currentTarget.style.border = "3px red solid";
      this.setState({ username: { value, isValid: false } })
    }

  }

  setEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    const input = e.currentTarget;

    if (/^[a-z0-9]{6,12}@[a-z]{4,10}\.[a-z]{1,3}$/.test(input.value)) {
      input.style.border = "3px green solid"
      this.setState({ email: { value: input.value, isValid: true } })
    } else {
      input.style.border = "3px red solid"
      this.setState({ email: { value: input.value, isValid: false } })
    }

  }

  setPassword: ChangeEventHandler<HTMLInputElement> = e => {
    const input = e.currentTarget;
    if (/^[a-z0-9]{8,11}$/.test(input.value)) {
      e.currentTarget.style.border = "3px green solid";
      this.setState({ password: { value: input.value, isValid: true } });
    } else {
      e.currentTarget.style.border = "3px red solid";
      this.setState({ password: { value: input.value, isValid: false } });
    }


  }

  setConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const input = currentTarget;
    if (input.value === this.state.password.value) {
      this.setState({ confirmPassword: { value: input.value, isValid: true } })
      input.style.border = "3px green solid";
    } else {
      this.setState({ confirmPassword: { value: input.value, isValid: false } })
      input.style.border = "3px red solid";
    }

  }



  render() {
    const finalCheck: boolean = this.state.confirmPassword.isValid &&
      this.state.email.isValid &&
      this.state.username.isValid &&
      this.state.password.isValid

    return (
      <form style={{ textAlign: "center" }}>
        <h2>Register With Us</h2>
        <FormControl theme="Username" inputData={this.state.username.value} onChange={this.setName} />
        <FormControl theme="Email" inputData={this.state.email.value} onChange={this.setEmail} />
        <FormControl theme="Password" inputData={this.state.password.value} onChange={this.setPassword} />
        <FormControl theme="ConfirmPassword" inputData={this.state.confirmPassword.value} onChange={this.setConfirmPassword} />
        <hr />
        <button disabled={!finalCheck}>{finalCheck ? '제출 가능!' : '제출 불가!'}</button>
      </form>
    )

  }
}