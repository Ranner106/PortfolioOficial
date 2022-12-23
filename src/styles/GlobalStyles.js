import { createGlobalStyle } from 'styled-components';
import { backgroundColor } from '../config/colors';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: 0.5s ease-in-out;
    overflow-x: hidden;
}

html, body, #root {
    height: 100%;
    background-color: ${backgroundColor};
}

*, input, button, a {
    text-decoration: none;
    font-family: 'poppins', sans-serif;
}

ul {
    list-style: none;
}
`;
