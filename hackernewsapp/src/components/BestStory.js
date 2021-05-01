import React,{useState,useEffect} from 'react';
import {getBestStory} from '../services/hackerNewsApi';
import {StoryMeta, StoryMetaElement, StoryTitle, StoryWrapper} from '../styles/StoryStyles'
import {mapTime} from '../components/mapTime'

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  );


export const BestStory=({bestStoryId})=>{
    const [bestStory,setBestStory]=useState({});


    useEffect(()=>{
        getBestStory(bestStoryId).then(data=>data && data.url && setBestStory(data))
    },[]);

    return bestStory && bestStory.url?(
        <>
        <StoryWrapper data-testid="story">
            <StoryTitle><a target="_blank" href={bestStory.url}>{bestStory.title}</a></StoryTitle>

            <StoryMeta>
                <span  data-testid="story-by">
                    <StoryMetaElement color="#fff">By:</StoryMetaElement>{` ${bestStory.by}`}
                </span>
                <span  data-testid="story-time">
                    <StoryMetaElement color="#fff">Posted:</StoryMetaElement>
                    {` ${mapTime(bestStory.time)}`}

                </span>
                <span>
                <StoryMetaElement color="#fff">Score:</StoryMetaElement>
                    {` ${bestStory.score}`}
                </span>
                
                    <StoryMetaElement>
                    <span>Comments:
                    <Link
                        url={`https://news.ycombinator.com/item?id=${bestStoryId}`}
                        title={`${bestStory.kids && bestStory.kids.length > 0 ? bestStory.kids.length : 0} comments`}
                    />
                     </span>
                    </StoryMetaElement>
            </StoryMeta>
           
        </StoryWrapper>
         <hr/>
         </>

        
    ):null;
};