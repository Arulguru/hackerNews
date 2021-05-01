import React,{useState,useEffect} from 'react';
import {getTopStory} from '../services/hackerNewsApi';
import {StoryMeta, StoryMetaElement, StoryTitle, StoryWrapper} from '../styles/StoryStyles'
import {mapTime} from '../components/mapTime'

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  );


export const TopStory=({topStoryId})=>{
    const [topStory,setTopStory]=useState({});


    useEffect(()=>{
        getTopStory(topStoryId).then(data=>data && data.url && setTopStory(data))
    },[]);

    return topStory && topStory.url?(
        <>
        
        <StoryWrapper data-testid="story">
            <StoryTitle><a target="_blank" href={topStory.url}>{topStory.title}</a></StoryTitle>

            <StoryMeta>
                <span  data-testid="story-by">
                    <StoryMetaElement color="#fff">By:</StoryMetaElement>{` ${topStory.by}`}
                </span>
                <span  data-testid="story-time">
                    <StoryMetaElement color="#fff">Posted:</StoryMetaElement>
                    {` ${mapTime(topStory.time)}`}

                </span>
                <span>
                <StoryMetaElement color="#fff">Score:</StoryMetaElement>
                    {` ${topStory.score}`}
                </span>

                <StoryMetaElement>
                    <span>Comments:
                    <Link
                        url={`https://news.ycombinator.com/item?id=${topStoryId}`}
                        title={`${topStory.kids && topStory.kids.length > 0 ? topStory.kids.length : 0} comments`}
                    />
                     </span>
                </StoryMetaElement>

            </StoryMeta>
        </StoryWrapper>
        <hr/>
        </>
    ):null;
};