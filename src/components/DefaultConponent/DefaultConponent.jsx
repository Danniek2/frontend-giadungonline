import React from 'react'
import HeaderConponent from '../HeaderConponent/HeaderConponent'

const DefaultConponent = ({children}) => {
  return (
    <div>
        <HeaderConponent />
        {children}
    </div>
  )
}

export default DefaultConponent