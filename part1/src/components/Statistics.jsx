import React from 'react'

const Statistics = ({ all, children, mssg, title }) => {
  return (
    all > 0 ?
      <table>
        <thead>{title}</thead>
        <tbody>{children}</tbody>
      </table> 
    : <p>{mssg}</p>
    )
}

export default Statistics