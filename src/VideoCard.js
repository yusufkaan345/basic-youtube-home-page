import React from 'react'
import { Avatar } from '@mui/material'
import './VideoCard.css'

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className='video-cards'>
            <img className='videocard-thumbnail' src={image} alt="" />
            <div className="video-info">
                <Avatar className='video-avatar' alt={channel} src={channelImage} />
                <div className="card-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p> {views} * {timestamp} </p>
                </div>
            </div>


        </div>
    )
}

export default VideoCard