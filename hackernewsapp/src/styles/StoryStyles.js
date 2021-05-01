import styled from 'styled-components';

export const StoryWrapper=styled.section`
    padding:5px;
    margin-bottom:5px;
`


export const StoryTitle=styled.h1`
    margin-bottom:10px;
    margin-top:0;
    font-size:14px;
    line-height:2.0;
    
    text-decoration:none;

    a{  padding:5px;
        border-radius:8px;
        color:#fff;
        background-color:#4d4949;
        text-decoration:none;
        
    }
    a:hover{
        background-color:#000;
    }
`

export const StoryMeta=styled.div`
font-style:italic;
margin-bottom:10px;
color:#fff;

 >span:first-child{
    margin-right:10px;
} 

>span:not(:first-child):before{
    content:'';
    margin-right:8px;
    margin-left:8px;
}

.story__meta-bold{
    font-weight:bold;
   
}
`

export const StoryMetaElement=styled.span`
 
    font-weight:bold;
    color:${props=>props.color||'red'};
`;