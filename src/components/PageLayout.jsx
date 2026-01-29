import React from 'react'
import propTypes from 'prop-types'

const PageLayout = (props) => {
  return (
    <div>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <footer>{props.footer}</footer>
        
    </div>
  )
}

// PageLayout.propTypes = {
//     header : propTypes.string,
//     content : propTypes.string,
//     footer : propTypes.string
// }

export default PageLayout