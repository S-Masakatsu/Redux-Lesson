import React from 'react'
import Header from 'components/layouts/Header'
import Footer from 'components/layouts/Footer'
import SendName from 'components/ui/SendName'
import GetName from 'components/ui/GetName'
import Style from 'stylesheet/style.module.sass'

export default () => {
  return (
    <div className={Style.wrapper}>
      <Header />
        <SendName />
        <GetName />
      <Footer />
    </div>
  );
}