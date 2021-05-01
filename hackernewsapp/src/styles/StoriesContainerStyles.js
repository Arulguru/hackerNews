import styled,{createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
body{
    margin:5px;
    padding:5px;
    background-color:#121212;
    color:#fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size:12px;
}

ul{
    margin:0;
    padding:0;
}
`

export const StoriesContainerWrapper=styled.main`
    max-width:1140px;
    padding:20px 15px;
    margin :auto;
`
export const HeadWrapper=styled.h1`
    font-size:35px;
    background-color:#f0f0ed;
    padding:10px;
    border:2px solid black;
    opacity:0.8;
    color:#000;
    border-radius:10px;
    p{
        font-size:12px;
    }
    
`
export const ButtonWrapper=styled.button`
    font-size:25px;
    font-weight:bold;
    width:220px;
    padding:5px;
    color:white;
    background-color:#333;
    margin:10px;
    box-shadow: 2px 2px solid white;
`