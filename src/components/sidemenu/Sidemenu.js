import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import DiscountIcon from '@mui/icons-material/Discount';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom'

export default function Sidemenu() {

    const dashboard = () => {
        navigate("/dashboard")
    }
    const allcourses = () => {
        navigate("/allCourses")
    }
    const addCourses = () => {
        navigate("/addCourses")
    }
    const yourCourses = () => {
        navigate("/yourCourses")
    }

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <nav aria-label="secondary mailbox folders">

                    <Tooltip title="Developer Infomation">
                        <div onClick={dashboard}>
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CoPresentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Developer Infomation" />
                                </ListItemButton>
                            </ListItem>
                        </div>
                    </Tooltip>
                </nav>
                <Divider />
                <List>
                    <Tooltip title="All Courses">
                        <div onClick={allcourses}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="All Courses" />
                                </ListItemButton>
                            </ListItem>
                        </div>
                    </Tooltip>
                    <Tooltip title="Add Corses">
                        <div onClick={addCourses}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DiscountIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Courses" />
                                </ListItemButton>
                            </ListItem>
                        </div>
                    </Tooltip>
                    <Tooltip title="Your Courses">
                    <div onClick={yourCourses}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CreditScoreIcon />
                                </ListItemIcon>
                                <ListItemText primary="Your Courses" />
                            </ListItemButton>
                        </ListItem>
                        </div>
                    </Tooltip>
                </List>
            </nav>
            <Divider />

            <nav aria-label="secondary mailbox folders">
                <Tooltip title="Profile">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsAccessibilityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                </Tooltip>

                <Tooltip title="Settings">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </Tooltip>
            </nav>


            <Divider />



            <nav aria-label="secondary mailbox folders">
                <Tooltip title="Customer Service">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SupportAgentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Customer Service" />
                        </ListItemButton>
                    </ListItem>
                </Tooltip>

                <Tooltip title="Help us">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CurrencyRupeeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help Us" />
                        </ListItemButton>
                    </ListItem>
                </Tooltip>
            </nav>


            <Divider />
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <PermPhoneMsgIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <AlternateEmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Email Developer" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <PhoneInTalkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Call Developer" />
                    </ListItemButton>
                </List>
            </Collapse>
        </Box>
    )
}


   // <nav aria-label="secondary mailbox folders">
    //   <List>
    //     <ListItem disablePadding>
    //       <ListItemButton>
    //         <ListItemText primary="Trash" />
    //       </ListItemButton>
    //     </ListItem>
    //     <ListItem disablePadding>
    //       <ListItemButton component="a" href="#simple-list">
    //         <ListItemText primary="Spam" />
    //       </ListItemButton>
    //     </ListItem>
    //   </List>
    // </nav>
