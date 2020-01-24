import React from 'react'
import { connect } from 'react-redux'
import { getName } from 'redux/selectors'
import Style from 'stylesheet/style.module.sass'

const GetName = ({name}) => {
  return (
    <p className={Style.display_name}>
      入力された名前：{name}
    </p>
  );
}

const MapStateToProps = state => {
  const name = getName(state);
  return {name};
}

export default connect(MapStateToProps)(GetName);