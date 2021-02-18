import React, {Fragment}  from 'react'

const Paragraph = ({title,text}) => {
    return (
        <Fragment>
            <strong>{title}</strong>
            <p>{text}</p>
        </Fragment>
    )
}

export default Paragraph