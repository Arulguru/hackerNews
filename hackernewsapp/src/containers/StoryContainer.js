import React,{useState,useEffect} from 'react'
import {getStoryIds} from '../services/hackerNewsApi'
import {getBestStoryIds} from '../services/hackerNewsApi'
import {getTopStoryIds} from '../services/hackerNewsApi'
import {Story} from '../components/Story'
import {TopStory} from '../components/TopStory'
import {BestStory} from '../components/BestStory'
import {ButtonWrapper,HeadWrapper} from '../styles/StoriesContainerStyles'


import{GlobalStyle,StoriesContainerWrapper} from "../styles/StoriesContainerStyles"


export const StoryContainer=()=>{
    const [storyIds,setStoryIds]=useState([]);
    const[bestStoryIds,setBestStoryId]=useState([]);
    const[topStoryIds,setTopStoryId]=useState([]);
    const[storyView,setStoryView]=useState("block");
    const[bestStoryView,setBestStoryView]=useState("none");
    const[topStoryView,setTopStoryView]=useState("none");
    
  
    useEffect(()=>{
      getStoryIds().then(op=>op && setStoryIds(op));
      getBestStoryIds().then(op2=>op2 && setBestStoryId(op2));
      getTopStoryIds().then(op3=>op3 && setTopStoryId(op3));
    },[]);

    
    const newStoryHandler=()=>{
        setStoryView("block");
        setBestStoryView("none");
        setTopStoryView("none");
    }
    const bestStoryHandler=()=>{
        setStoryView("none");
        setBestStoryView("block");
        setTopStoryView("none");
    }
    const topStoryHandler=()=>{
        setStoryView("none");
        setBestStoryView("none");
        setTopStoryView("block");
    }

  
    return(
    <>
    
    <GlobalStyle/>
    <StoriesContainerWrapper data-test-id="stories-cointainer">
        <HeadWrapper>News and Stories from HackerNewsAPI<p>18euec021-Arulanandha Guru I</p></HeadWrapper>
        <h4>Greetings Viewer!!! Please wait for your stories to load...</h4>
        <ButtonWrapper onClick={newStoryHandler}>NEW STORIES</ButtonWrapper>
        <ButtonWrapper onClick={bestStoryHandler}>BEST STORIES</ButtonWrapper>
        <ButtonWrapper onClick={topStoryHandler}>TOP STORIES</ButtonWrapper>
        <br/>
        <div className="container-fluid">
            <div className="row">
            
                <div style={{display:`${storyView}`}} className="col-md-3">
                    <h2>NEW STORIES</h2>
                {storyIds.map(storyId=>(<Story key={storyId} storyId={storyId}/> ))}
                </div>

                <div style={{display:`${bestStoryView}`}} className="col-md-3">
                    <h2>BEST STORIES</h2>
                {bestStoryIds.map(bestStoryId=>(<BestStory key={bestStoryId} bestStoryId={bestStoryId}/> ))}
                </div>

                <div style={{display:`${topStoryView}`}} className="col-md-3">
                    <h2>TOP STORIES</h2>
                {topStoryIds.map(topStoryId=>(<TopStory key={topStoryId} topStoryId={topStoryId}/> ))}
                </div>
            </div>
        </div>
   
    </StoriesContainerWrapper>
    
    
    </>)
  };

