import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarRow from './SidebarRow.js'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>

      <SidebarRow selected title='Home' Icon={<HomeIcon/>} />
      <SidebarRow title='Trending' Icon={<WhatshotIcon/>}/>
      <SidebarRow title='Subscription' Icon={<SubscriptionsIcon/>}/>
      <hr />
      <SidebarRow title='Library' Icon={<VideoLibraryIcon/>}/>
      <SidebarRow title='History' Icon={<HistoryIcon/>}/>
      <SidebarRow title='Your Videos' Icon={<OndemandVideoIcon/>}/>
      <SidebarRow title='Watch Later' Icon={<WatchLaterIcon/>}/>
      <SidebarRow title='Liked Videos' Icon={<ThumbUpIcon/>}/>
      <SidebarRow title='Show More' Icon={<ExpandMoreIcon/>}/>
      <hr />
    </div>
  )
}

export default Sidebar