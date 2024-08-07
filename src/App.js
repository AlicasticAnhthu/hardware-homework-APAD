import './App.css';
import React from 'react';
import { Box, Grid, Button as MUIButton } from '@mui/material';
import CustomButton from './components/Button';
import ProjectName from './components/ProjectName';
import HWSet from './components/HWSet';
import TextField from './components/CustomTextField';

const projects = [
  { name: "Project 1", description: "List of authorized users", hwSets: ["HWSet1", "HWSet2"], hwset_capacity: ["50/100","0/100"] },
  { name: "Project 2", description: "List of authorized users", hwSets: ["HWSet1", "HWSet2"], hwset_capacity: ["50/100","0/100"] },
  { name: "Project 3", description: "List of authorized users", hwSets: ["HWSet1", "HWSet2"], hwset_capacity: ["0/100","0/100"] }
];

const buttons = [
  { name: "Join", alert: "You have clicked Join" },
  { name: "Leave", alert: "You have clicked Leave" },
  { name: "Join", alert: "You have clicked Join" },
];

function App() {
  return (
    <div>
      {projects.map((project, index) => (
        <Box className="project-container" sx={{ padding: 2 }} key={project.name}>
          <ProjectName project_name={project.name} project_description={project.description} />
          <Grid container spacing={2}>
            {project.hwSets.map((hwSet, hwIndex) => (
              <Grid item xs={12} md={6} key={hwSet}>
                <Box className="hw-set">
                  <HWSet hwset={hwSet} hwset_capacity={project.hwset_capacity[hwIndex]} />
                  <TextField size="small" label="Enter qty" variant="outlined" />
                  <div className="button-group">
                    <CustomButton button_alert="You have checked in" button_name="Check In" variant="contained" color="primary"/>
                    <CustomButton button_alert="You have checked out" button_name="Check Out" variant="contained" color="secondary"/>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
          <MUIButton 
            variant="contained" 
            color="success" 
            className="join-btn" 
            sx={{
              marginTop: 2,
              backgroundColor: '#4CAF50',
              '&:hover': {
                backgroundColor: '#45a049'
              }
            }}
            onClick={() => console.log(`${buttons[index].alert} ${project.name}`)}>
              {buttons[index].name}
          </MUIButton>
        </Box>
      ))}
    </div>
  );
}

export default App;
