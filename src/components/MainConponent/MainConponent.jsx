import React  from 'react'
import HeaderConponent from '../HeaderConponent/HeaderConponent'
import FooterConponent from '../FooterConponent/FooterConponent'

const MainConponent = (props) => {
  return (
    <div>
        <HeaderConponent />
        {props.children}
        <FooterConponent />
    </div>
  )
}

export default MainConponent