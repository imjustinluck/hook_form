import React from "react";

const Form = props => {
    const { inputs, setInputs } = props;


    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange = { onChange } />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange = { onChange } />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange = { onChange } />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange = { onChange } />
            </div>
            <div>
                <label htmlFor="conPassword">First Name: </label>
                <input type="password" name="conPassword" onChange = { onChange } />
            </div>
            
        </form>
    )
}

export default Form