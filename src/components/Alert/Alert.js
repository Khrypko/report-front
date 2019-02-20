import React from 'react';

const Alert = ({ type, text }) => {
    const classes = type ? `alert alert-${type}` : `alert alert-info`;
    const alertText = text ? text : 'alert property "text" is not set';
    return (
        <div className={classes} role="alert">
            {alertText}
        </div>
    )
}

export default Alert
