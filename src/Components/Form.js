import React from 'react'
import PropTypes from 'prop-types'

export function Form(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                {props.children ? props.children : null}
            </form>
        </div>
    )
}

export function TextInput(props) {
    return (
        <React.Fragment>
            {props.labelText ? <label style={props.labelStyle} className={props.labelClassName}>{props.labelText}</label> : null}
            <input type='text' style={props.style} name={props.name} value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} className={props.className}>{props.display}</input>
        </React.Fragment>
    )
}


Form.propTypes = {
    style: PropTypes.object,
    labelStyle: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string, 
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    labelText: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.any,
    onChange: PropTypes.func
}