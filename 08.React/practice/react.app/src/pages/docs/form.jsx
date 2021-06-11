import React from 'react'

export default class FormComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      city: -1,
      info: '',
      sex: -1,
      isChecked: false
    }
  }

  handleChange = e => {
    const { name, type, value, checked } = e.target
    this.setState({
      [name]: type === "checkbox" ? checked : value
    })
  }

  render() {
    const {
      email, city, info, sex, isChecked
    } = this.state
    return (
      <form>
        <div className="form-item">
          <label htmlFor="email"> Email：
            <input type="email" name="email" id="email" value={email} onChange={this.handleChange} />
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="city"> City：
            <select name="city" id="city" value={city} onChange={this.handleChange}>
              <option value="-1" disabled>请选择所在城市</option>
              <option value="0">北京</option>
              <option value="1">上海</option>
              <option value="2">广州</option>
              <option value="3">深圳</option>
              <option value="4">杭州</option>
              <option value="5">武汉</option>
              <option value="6">成都</option>
            </select>
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="info">Info：
            <textarea name="info" id="info" cols="30" rows="4" value={info} onChange={this.handleChange}></textarea>
          </label>
        </div>
        <div className="form-item">
          Sex：
          <label htmlFor="sex1">
            <input type="radio" name="sex" id="sex1" value="1" checked={sex === '1'} onChange={this.handleChange} />男
          </label>&nbsp;
          <label htmlFor="sex2">
            <input type="radio" name="sex" id="sex2" value="0" checked={sex === '0'} onChange={this.handleChange} />女
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="isChecked">
            <input type="checkbox" name="isChecked" id="isChecked" checked={isChecked} onChange={this.handleChange} /> 7日自动登录
          </label>
        </div>
      </form>
    )
  }
}