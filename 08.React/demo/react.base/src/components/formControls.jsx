import React from 'react'

import { Formik, Field, FieldArray, } from 'formik'
import * as Yup from 'yup'
import Datetime from  'react-datetime'
import moment from 'moment'
import Form  from 'react-bootstrap/Form'
import './customForm.less'
import './datatimepicker.css'

// Input feedback
const InputFeedback = ({ error, }) =>
  error ? <div className="input-feedback">{error}</div> : null;

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur, },
  id,
  label,
  className,
  val,
  ...props
}) => {
  return (
    <label htmlFor={id}><input
      checked={val === value}
      // className={classNames('radio-button')}
      id={id}
      name={name} // could be something else for output?
      onBlur={onBlur}
      onChange={onChange}
      type="radio"
      value={val}
      {...props}
    /><i></i>{label}</label>
  );
}

const Switch = ({
  field: { name, value, },
  // label,
  // className,
  // val,
  // ...props
  onChange,
}) => {
  return (
    <div className="form-sw">
      <div className="custom-control custom-switch">
        <input checked={value} className="custom-control-input" id={name} onChange={onChange} type="checkbox" />
        <label className="custom-control-label" htmlFor={name} title=""></label>
      </div>
    </div>



  // <label htmlFor={id}><input
  //   checked={val === value}
  //   id={id}
  //   name={name}
  //   onBlur={onBlur}
  //   onChange={onChange}
  //   type="radio"
  //   value={val}
  //   {...props}
  // /><i></i>{label}</label>
  );
}

const DateTimePicker = ({
  field: { name, value,},
  form:{initialValues,},
  timeFormat,dateFormat,defaultValue,onChange,
  ...props
}) => {
  return (
    <Datetime dateFormat={dateFormat} defaultValue={moment(initialValues[name], dateFormat +' '+ timeFormat).toDate()}
      inputProps={{name:name,id:name, }} onChange={onChange} timeFormat={timeFormat} />
  );
}

const DateTimePicker2 = ({
  field: { name, value,},
  form:{initialValues,},
  onChange,
  ...props
}) => {
  // value= 'M4.2.0/03:00:00'
  // initialValues = 'M4.2.1/03:00:00'
  return <span>
    {/* <input inputProps={{name:name,id:name, }} onChange={onChange} value={value}></input> */}
    <select onChange={onChange[1]}>
      <option value="0">First</option>
      <option value="1">Second</option>
      <option value="2">Third</option>
      <option value="3">Forth</option>
      <option value="4">Last</option>
    </select>
    <select onChange={onChange[2]}>
      <option value="0">Sunday</option>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wedsday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Staturday</option>
    </select>,
    <select onChange={onChange[0]}>
      <option value="0">Jan</option>
      <option value="1">Feb</option>
      <option value="2">Mar</option>
      <option value="3">Apr</option>
      <option value="4">May</option>
      <option value="5">Jun</option>
      <option value="6">Jul</option>
      <option value="7">Aug</option>
      <option value="8">Sep</option>
      <option value="9">Oct</option>
      <option value="10">Nov</option>
      <option value="11">Dec</option>
    </select>,at
    <select onChange={onChange[3]}>
      <option value="0">00</option>
      <option value="1">01</option>
      <option value="2">02</option>
      <option value="3">03</option>
      <option value="4">04</option>
      <option value="5">05</option>
      <option value="6">06</option>
      <option value="7">07</option>
      <option value="8">08</option>
      <option value="9">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
    </select>
  </span>

}



// Group Radio input
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label, // 标签名 弃用
  className,
  children,
}) => {
  // const classes = classNames(
  //   'input-field',
  //   {
  //     'is-success': value || (!error && touched), // handle prefilled or user-filled
  //     'is-error': !!error && touched,
  //   },
  //   className
  // );
  return (
    <>
      {children}
      {touched && <InputFeedback error={error} />}
    </>
  );
}

export {RadioButton, RadioButtonGroup,Switch,DateTimePicker, DateTimePicker2,}