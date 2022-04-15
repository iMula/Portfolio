import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArticleIcon from '@mui/icons-material/Article';

export const  SidebarData = [
    {
       title: "Profile",
       icon: <PersonIcon/>,
       link: "/profile"
    },
    {
        title: "Projects",
        icon: <DevicesIcon/>,
        link: "/projects"
     },
     {
        title: "Contact",
        icon: <ContactPageIcon/>,
        link: "/contact"
     },
     {
        title: "Resume",
        icon: <ArticleIcon/>,
        link: "/resume"
     }
]
 
