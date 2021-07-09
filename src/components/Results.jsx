import React from "react";

const Results = props => {
    const{firstName, lastName, email, password, conPassword} = props.data;
    return(
        <div>
            <h1>Your Form Data</h1>
            <table>
                <tr>
                    <td>First Name:</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>Confirm Password:</td>
                    <td>{conPassword}</td>
                </tr>
            </table>
        </div>
    )
}

export default Results