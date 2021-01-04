import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Slider from './components/layout/Carrousel'
import SliderCss from './styles/Slider'
import Content from './components/layout/Content';


export default () => {
    return (
        <>
            <GlobalStyle/>
            <SliderCss>
                <Slider/>
            </SliderCss>
            <Router>
                <Content></Content>
            </Router>  
        </>
    )
}