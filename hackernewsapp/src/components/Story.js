import React,{useState,useEffect} from 'react';
import {getStory} from '../services/hackerNewsApi';
import {StoryMeta, StoryMetaElement, StoryTitle, StoryWrapper} from '../styles/StoryStyles'
import {mapTime} from '../components/mapTime'

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  );


export const Story=({storyId})=>{
    const [story,setStory]=useState({});


    useEffect(()=>{
        getStory(storyId).then(data=>data && data.url && setStory(data))
    },[]);

    return story && story.url?(
        <>
        <StoryWrapper data-testid="story">
            <StoryTitle><a target="_blank" href={story.url}>{story.title}</a></StoryTitle>

            <StoryMeta>
                <span  data-testid="story-by">
                    <StoryMetaElement color="#fff">By:</StoryMetaElement>{` ${story.by}`}
                </span>
                <span  data-testid="story-time">
                    <StoryMetaElement color="#fff">Posted:</StoryMetaElement>
                    {` ${mapTime(story.time)}`}

                </span>
                <span>
                <StoryMetaElement color="#fff">Score:</StoryMetaElement>
                    {` ${story.score}`}
                </span>
                
                <StoryMetaElement>
                    <span>Comments:
                    <Link
                        url={`https://news.ycombinator.com/item?id=${storyId}`}
                        title={`${story.kids && story.kids.length > 0 ? story.kids.length : 0} comments`}
                    />
                     </span>
                     
                </StoryMetaElement>

            </StoryMeta>
        </StoryWrapper>
        <hr/>
        </>
        
    ):null;
};