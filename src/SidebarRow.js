import React from 'react'
import './SidebarRow.css'


function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
       <div className="sidebar-icon">{Icon}</div> 
        <h4 className="sidebar-title">{title}</h4>
     
    </div>
  )
}

export default SidebarRow