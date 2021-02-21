import React, {Fragment} from 'react'

const Statistics = ({ all, children, mssg, title }) => {
    return (
        <Fragment>
            <h3>{title}</h3>
            {all > 0 ? children : mssg}
        </Fragment>
    )
}

export default Statistics