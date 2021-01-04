import styled from "styled-components";

const Slider = styled.div`
    width: 50%;
    color: white;
    display: inline-block;
    background: #A9C5BA;

    @media (max-width: 1024px) {
            width: 100%;
    }

    .w-100 {
        width: 70% !important;
        height: 450px !important;
        margin: 3em auto 10.5em auto;

        @media (max-width: 1024px) {
            margin: 3em auto 15em auto;
            height: 550px !important;
        }

        @media (max-width: 800px) {
            margin: 3em auto 15em auto;
            height: 400px !important;
        }

        @media (max-width: 450px) {
            margin: 3em auto 15em auto;
            height: 200px !important;
        }
        
    }

    .carousel {
        margin-bottom: 65px;
    }

    .carousel-caption
    {
        width: 60%;
        margin: 0 auto;

        @media (max-width: 1024px) {
            width: 70%;
        }
    }

    .carousel-indicators .active 
    {
        width: 20px;
        height: 10px;
        border: 50px !important;
    }

    .carousel-indicators li 
    {
        width: 10px;
        height: 10px;
        border-radius: 50px !important;
        border-top: none;
        border-bottom: none;
    }
`;


export default Slider;