import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cast from './cast';
import Crew from './crew';

  
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `verticl-tab-${index}`,
      'aria-controls': `verticl-tabpanel-${index}`,
    };
  }
  
  export default function MovieInfo(props) {
   

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box className='container'>
        <Box sx={{ borderBottom:0, borderColor: 'divider', height:'0px' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab label="cast" {...a11yProps(0)}  sx={{fontSize:'1.5rem', fontWeight:"700", color:'#1c1d1d', letterSpacing:"4px"}} />
            <Tab label="crew" {...a11yProps(1)} sx={{fontSize:'1.5rem', fontWeight:"700", color:'#1c1d1d', letterSpacing:"4px"}}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} >
       <Cast data={props.cast}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
       <Crew  data={props.crew}/>
      
        </TabPanel>

      </Box>
    );
  }