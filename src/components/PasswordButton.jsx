import React from 'react';

const PasswordButton = (props) => {

    return (
        <button onClick={props.onClick} className='btn-password' data-value={props.value}> { props.label } </button>
    );
};

export default PasswordButton