import React, { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import NightlightIcon from '@mui/icons-material/Nightlight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Pending from "./components/Pending/Pending.js"
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ViewListIcon from '@mui/icons-material/ViewList';
import CloseIcon from '@mui/icons-material/Close';

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [menuitem, setMenuitem]=useState("Orders")

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMenuItemClick = (menuItem) => {
    setMenuitem(menuItem);
  };

  const toggleLeftMenu = () => {
    setIsLeftMenuOpen(!isLeftMenuOpen);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: "#dadce0" }}>
      {isLeftMenuOpen && (
        <div style={{ width:"10%", backgroundColor: 'lightgray', padding: '10px',marginTop:"20px" }}>
          
          <div>
            <div style={{display:'flex',marginBottom:"20px",cursor:"pointer",marginTop:"40px",padding:"10px",borderRadius:"7px", backgroundColor: menuitem === 'Dashboard' ? 'blue' : 'inherit',
                color: menuitem === 'Dashboard' ? 'white' : 'inherit'}} onClick={() => handleMenuItemClick('Dashboard')}>
              <SpeedIcon style={{paddingRight:"20px"}}/>
              Dashboard
            </div>
            <div style={{display:'flex',marginBottom:"20px",cursor:"pointer",padding:"10px",borderRadius:"7px", backgroundColor: menuitem === 'Inventory' ? 'blue' : 'inherit',
                color: menuitem === 'Inventory' ? 'white' : 'inherit'}} onClick={() => handleMenuItemClick('Inventory')}>
              <LocalOfferIcon style={{paddingRight:"20px"}}/>
              Inventory
            </div>
            <div style={{display:'flex',marginBottom:"20px",cursor:"pointer",padding:"10px",borderRadius:"7px", backgroundColor: menuitem === 'Orders' ? 'blue' : 'inherit',
                color: menuitem === 'Orders' ? 'white' : 'inherit'}} onClick={() => handleMenuItemClick('Orders')}>
              <ViewListIcon style={{paddingRight:"20px"}}/>
              Orders
            </div>
            <div style={{display:'flex',marginBottom:"20px",padding:"10px",borderRadius:"7px", backgroundColor: menuitem === 'Shipping' ? 'blue' : 'inherit',
                color: menuitem === 'Shipping' ? 'white' : 'inherit',cursor:"pointer"}} onClick={() => handleMenuItemClick('Shipping')}>
              <LocalShippingIcon style={{paddingRight:"20px"}}/>
              Shipping
            </div>
            <div style={{display:'flex',marginBottom:"20px",padding:"10px",borderRadius:"7px", backgroundColor: menuitem === 'Channel' ? 'blue' : 'inherit',
                color: menuitem === 'Channel' ? 'white' : 'inherit',cursor:"pointer"}} onClick={() => handleMenuItemClick('Channel')}>
              <ShareIcon style={{paddingRight:"20px"}}/>
              Channel
            </div>
          </div>
          
        </div>
      )}
      <div style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: "space-between", backgroundColor: "gray" }}>
          <div>
            <ListIcon style={{ padding: "10px", cursor: 'pointer' }} onClick={toggleLeftMenu} />
          </div>
          <div>
            <NightlightIcon style={{ padding: "10px" }} />
            <NotificationsIcon style={{ padding: "10px" }} />
            <GTranslateIcon style={{ padding: "10px" }} />
            <AccountCircleIcon style={{ padding: "10px" }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          <div style={{display:'flex',justifyContent:"space-around",backgroundColor:"white",margin:"20px",padding:"0px 20px 0px 20px",width:"100px",height:"50px",alignItems:"center"}}>
          <h4>{menuitem}</h4><CloseIcon/> 
          </div>
          <SettingsIcon />
        </div>
        {/* Tabs */}
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Pending" />
          <Tab label="Accepted" />
          <Tab label="AWB Created" />
          <Tab label="Ready To Ship" />
          <Tab label="Shipped" />
          <Tab label="Completed" />
          <Tab label="Cancelled" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Typography><Pending /></Typography>
        </TabPanel>
      </div>
    </div>
  );
};
const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
