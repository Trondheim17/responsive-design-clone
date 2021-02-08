import React from 'react'

export default BigButton = (props) => {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}