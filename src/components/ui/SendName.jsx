import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { sendName } from 'redux/action'
import Style from 'stylesheet/style.module.sass'

class SendName extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', disabled: true};
  }

  updataName = name => {
    name = name.trim();
    this.setState({ name, disabled: name ? false : true });
  };

  handleSendName = () => {    
    this.props.sendName(this.state.name);
    this.setState({name: ''});
  };

  render() {
    return (
      <div className={Style.form}>
        <label htmlFor='name'>
          名前
          <input 
            type='text'
            placeholder='名前を入力してください'
            onChange={e => this.updataName(e.target.value)}
            value={this.state.name}
            className={Style.input_name}
          />
        </label>
        <button
          onClick={this.handleSendName}
          disabled={this.state.disabled}
          className={Style.btn_send}
        >
          送信
        </button>
      </div>
    );
  }
}

export default connect(null, {sendName})(SendName);