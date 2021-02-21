import React, {Fragment}  from 'react'

const Statistic = ({text,value}) => {
    return (
        <Fragment>
            <strong>{text}</strong>
            <p>{value}</p>
        </Fragment>
    )
}

export default Statistic