import styled from "styled-components";

const FormStyles = styled.div`
    width: 50%;
    padding: 65px;
    padding-bottom: 0px;
    background: white;
    display: inline-block;
    float: right;

    @media (max-width: 1024px) {
        width: 100%;
    }

    .TituloForm {
        font-family: Avenir;
        float: right;
    }

    .SubTitulo {
        font-family: Muli;
        margin-top: 70px;
        margin-bottom: 50px;
        text-align: center;
        color: #838383;
    }

    form {
        width:70%;
        margin: 0 auto;

        @media (max-width: 1024px) {
            width: 60%;
        }
        
        @media (max-width: 800px) {
            width: 100%;
        }
    }

    label {
        margin-bottom: 0rem;
        font-size: 14px;
        color: #ACACAC;
    }

    .form-control {
        border: 1px solid #ACACAC;
        border-radius: 0px;
        border-top: none;
        border-left: none;
        border-right: none;
    }

    .form-control:focus {

        box-shadow: 0 0 0 0;
    }

    .forgot-pass {
        font-size: 14px;
        color: #ACACAC;
        float:right;
        text-decoration: none;
    }

    .text-danger {
        font-size: 13px;
    }

    .divButtons {
        text-align: center;
    }

    .btn {
        margin-top: 30px;
        font-size:14px;
        color: white;
        background: #707070;
        padding-left: 40px;
        padding-right: 40px;
        border-radius: 20px;
    }

    .barras {
        color: #ACACAC;
        margin-top: 10px;
    }

    .fraseBarra {
        font-size: 14px;
        display: inline-block;
        padding: 20px;
    }

    .barraLeft {
        width: 140px;
        padding-bottom: 3px;
        border-top: 1px solid #CED4DA;
        display: inline-block;
        color: #ACACAC;

        @media (max-width: 1024px) {
            width: 80px;
        }
    }

    .barraRight {
        width: 140px;
        padding-bottom: 3px;
        border-top: 1px solid #CED4DA;
        display: inline-block;
        color: #ACACAC;

        @media (max-width: 1024px) {
            width: 80px;
        }
    }

    .btnGoogle {
        border-radius:20px !important;
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    .newAccount {
        margin-top: 30px;
        color: #707070;
        font-size: 14px;
    }
`;

export default FormStyles;