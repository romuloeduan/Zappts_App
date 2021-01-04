import React, { useState } from 'react';
import GoogleBtn from './Googlebtn';
import { Link } from 'react-router-dom';
import FormCss from '../../styles/Form';


class FormLogin extends React.Component {

    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
          input
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        if(this.validate()){
            console.log(this.state);
            let input = {};
            input["email"] = "";
            input["password"] = "";
            this.setState({input:input});
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Este campo não pode ser vazio.";
        }

        if (!input["password"]) {
            isValid = false
            errors["password"] = "Este campo não pode ser vazio.";
        }

        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "O e-mail está incorreto";
            }
        }

        this.setState({
        errors: errors
        });

        return isValid;
    }


    render() {
        return (
            <>
            <FormCss>
                <h3 className="TituloForm">Invision</h3>
                <h4 className="SubTitulo">Welcome to Invision</h4>
                <form className="Login" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Users name or Email:</label>
                        <input 
                            id="email" 
                            name="email" 
                            className="form-control" 
                            type="text" 
                            value={this.state.input.email}
                            onChange={this.handleChange}
                        />
                        <div className="text-danger">{this.state.errors.email}</div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            id="password" 
                            name="password" 
                            className="form-control" 
                            type="password" 
                            value={this.state.input.password}
                            onChange={this.handleChange}
                        />
                        <div className="text-danger">{this.state.errors.password}</div>
                    </div>
                    <div className="divButtons">
                        <a href="" className="forgot-pass">Forgot password?</a>
                        <br></br>
                        <div className="button">
                            <input type="submit" value="Sign in" className="btn primary" />
                        </div>
                        <div className="barras">
                            <div className="barraLeft"></div>
                            <p className="fraseBarra">Or</p>
                            <div className="barraRight"></div>
                        </div>
                        <div className="SignGoogle">
                            <GoogleBtn/>
                            <p className="newAccount">New <b>Invision</b>? <Link to="/Account">Creat Account</Link></p>
                        </div>
                    </div>
                </form>
            </FormCss>
            </>
        )
    }
}
    
export default FormLogin;