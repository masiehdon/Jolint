import { FunctionComponent } from "react";
import styles from "./howitWorks.module.css";
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Typography, Paper} from "@mui/material";
import { Box } from "@material-ui/core";

const StartsidaFinalVersion: FunctionComponent = () => {

  const containerStyle = {
    background: 'linear-gradient(115.34deg, rgba(255, 165, 0, 0.8), rgba(255, 255, 255, 0.6) 30%, rgba(0, 0, 255, 0.4) 70%, #fafcff 100%)',
    minHeight: '75vh',
    padding: '0',
};

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateWidth = () => {
    if (isSmallScreen) {
      return '80%';
    } else {
      return '30%'; 
    }
  };
  return (
    <div className={styles.startsidaFinalVersion}>
      
      <Box className="mainContent">
  <Grid container spacing={3} style={containerStyle}>
    <Grid item xs={12} md={8} container display="flex" justifyContent="flex-start" flexDirection="column">
      <Typography variant="h4" color="textPrimary" gutterBottom style={{ marginTop: '10%', marginLeft: '10%' }}>
        Let’s Create an Inclusive <br />Workspace Together
      </Typography>

      <Typography variant="h6" color="textSecondary" gutterBottom style={{ marginTop: '10%', marginLeft: '10%' }}>
        Gain valuable data insights with our solution that measures inclusion and belonging within your organization,
        enabling you to take action for a more inclusive and vibrant work culture while maintaining the privacy and integrity of your personal data
      </Typography>
    </Grid>

    <Grid item xs={8} md={4} container justifyContent="flex-start" alignItems="flex-start">
      <Paper elevation={0} style={{ padding: '0', backgroundColor: 'transparent' }}>
        <img
          src="/public/ellipse.png"
          alt="ellipse"
          style={{ width: '100%', height: 'auto', marginTop: '20px', marginLeft: '20px' }}
        />
      </Paper>
    </Grid>
  </Grid>

  <Grid container spacing={2} justifyContent="flex-start" style={{ marginTop: '20px' }}>
  <Grid item>
    <div style={{ marginLeft: '10px' }}>
      <Button variant="outlined" color="primary" style={{ borderRadius: '10px'}}>
        Why inclusion
      </Button>
    </div>
  </Grid>

  <Grid item>
    <div style={{ marginLeft: '10px' }}>
      <Button variant="contained" color="primary" style={{ borderRadius: '10px'}} >
        How it Works
      </Button>
    </div>
  </Grid>

  <Grid container item xs={12} style={{ marginTop: '20px', textAlign: 'center' }}>
  <Grid item xs={12} sm={6} md={3}>
    <div style={{ marginLeft: '0' }}>
      <Button variant="contained" color="primary" href="https://jolint-consent-form-one.vercel.app/" style={{ backgroundColor: '#F4770A', borderRadius: '10px' }}>
        CONSENT FORM
      </Button>
    </div>
  </Grid>
</Grid>

  <Grid item xs={12} style={{ marginTop: '10px', textAlign: 'center' }}>
    <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
      Inclusion makes a difference
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
      Organisations with higher inclusion among coworkers have according to [source]:
    </Typography>

    <Grid container justifyContent="space-evenly">
      <Grid item xs={3} style={{ textAlign: 'center' }}>
        <Typography variant="h4" color="primary" style={{ margin: '15px' }}>
          31%
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Less isolation
        </Typography>
      </Grid>

      <Grid item xs={3} style={{ textAlign: 'center' }}>
        <Typography variant="h4" color="primary" style={{ margin: '15px' }}>
          41%
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Lower sick leave
        </Typography>
      </Grid>

      <Grid item xs={3} style={{ textAlign: 'center' }}>
        <Typography variant="h4" color="primary" style={{ margin: '15px' }}>
          59%
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Lower staff turnover
        </Typography>
      </Grid>

      <Grid item xs={3} style={{ textAlign: 'center' }}>
        <Typography variant="h4" color="primary" style={{ margin: '15px' }}>
          61%
        </Typography>
        <Typography variant="h6" color="textSecondary">
          More satisfied employees
        </Typography>
      </Grid>
    </Grid>
  </Grid>
</Grid>
  <Typography variant="h4" align="center" color="textPrimary" gutterBottom style={{ marginTop: '20px', fontWeight: 'bold' }}> 
      Advantages with Jolint at your workplace
      </Typography>

      <Grid container justifyContent="space-evenly" flexDirection={isSmallScreen ? 'column' : 'row'}>
      <Grid item xs={12} md={4} style={{ textAlign: 'center', margin: '5px', width: calculateWidth() }}>
        <div
          style={{
            backgroundColor: '#2C3386',
            borderRadius: '15px',
            padding: '70px 20px',
          }}
        >
          <Typography variant="h6" color="white" style={{ fontWeight: 'bold' }}>
            Anonymous and Objective Analysis
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} md={4} style={{ textAlign: 'center', margin: '5px', width: calculateWidth() }}>
        <div
          style={{
            backgroundColor: '#2C3386',
            borderRadius: '15px',
            padding: '70px 50px',
          }}
        >
          <Typography variant="h6" color="white" style={{ fontWeight: 'bold' }}>
            More Aware Employers
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} md={4} style={{ textAlign: 'center', margin: '5px', width: calculateWidth() }}>
        <div
          style={{
            backgroundColor: '#2C3386',
            borderRadius: '15px',
            padding: '70px 50px',
          }}
        >
          <Typography variant="h6" color="white" style={{ fontWeight: 'bold' }}>
            Healthier Work Environment
          </Typography>
        </div>
      </Grid>
    </Grid>
    <Typography variant="h4" align="center" color="textPrimary" gutterBottom style={{ marginTop: '20px', fontWeight: 'bold' }}> 
      How it works
      </Typography>

      <Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
  
  <Grid item xs={12} sm={4} md={4} lg={3}>
    <img
      src="/public/second.png"
      alt="How It Works"
      style={{ width: '100%', height: 'auto' , marginLeft: '20px'}}
    />
  </Grid>

  <Grid item xs={12} sm={8} md={4} lg={6}>
    <Typography variant="h6" color="dark" gutterBottom style={{ marginRight: '20%', marginLeft: '10%' }}>
    <strong>Data Extraction</strong>
    <br />
    Jolint pulls out interaction info from common work tools like email, but without touching any personal details. Imagine it like seeing where conversations happen without knowing who said what. This way, Jolint gets a bird's-eye view of how people connect at work while keeping everyone's privacy intact.
    </Typography>
  </Grid>
  
</Grid>

<Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
  
  <Grid item xs={12} sm={4} md={4} lg={3}>
    <img
      src="/public/group-2130.svg"
      alt="How It Works"
      style={{ width: '100%', height: 'auto' , marginLeft: '20px', marginTop: '30px'}}
    />
  </Grid>

  <Grid item xs={12} sm={8} md={4} lg={6}>
    <Typography variant="h6" color="dark" gutterBottom style={{ marginRight: '20%', marginLeft: '10%' }}>
    <strong>Anonymization</strong>
    <br />
    Jolint gives everyone an anonymized ID, replacing real names and emails to keep things private. So, even when looking at how people interact, there's no way to tell who's who, ensuring everyone's privacy while still understanding the big picture of connections at work.
    </Typography>
  </Grid>
  
</Grid>

<Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
  
  <Grid item xs={12} sm={4} md={4} lg={3}>
    <img
      src="/public/group-2128.svg"
      alt="How It Works"
      style={{ width: '100%', height: 'auto' , marginLeft: '20px', marginTop: '30px'}}
    />
  </Grid>

  <Grid item xs={12} sm={8} md={4} lg={6}>
    <Typography variant="h6" color="dark" gutterBottom style={{ marginRight: '20%', marginLeft: '10%' }}>
    <strong>Data Processing</strong>
    <br />
    Data is transformed into a network representation where each employee is a node and interactions form connections. Each person becomes a point on the web, and the lines between them show conversations. This setup helps Jolint see how well everyone is connected, without knowing any personal details.
    </Typography>
  </Grid>
  
</Grid>

<Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
  
  <Grid item xs={12} sm={4} md={4} lg={3}>
    <img
      src="/public/group-2129.svg"
      alt="How It Works"
      style={{ width: '100%', height: 'auto' , marginLeft: '20px', marginTop: '30px'}}
    />
  </Grid>

  <Grid item xs={12} sm={8} md={4} lg={6}>
    <Typography variant="h6" color="dark" gutterBottom style={{ marginRight: '20%', marginLeft: '10%' }}>
    <strong>AI  Analysis</strong>
    <br />
    AI and machine learning analyze data to pinpoint drivers of inclusion and belonging. They seek patterns to address questions such as new hire integration speed or how to elevate inclusion scores by addressing organizational weak points. The analysis also delves into social capital variations based on gender, role, and hire timing..
    </Typography>
  </Grid>
  
</Grid>

<Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
  
  <Grid item xs={12} sm={4} md={4} lg={3}>
    <img
      src="/public/group-2131.svg"
      alt="How It Works"
      style={{ width: '100%', height: 'auto' , marginLeft: '20px', marginTop: '30px'}}
    />
  </Grid>

  <Grid item xs={12} sm={8} md={4} lg={6}>
    <Typography variant="h6" color="dark" gutterBottom style={{ marginRight: '20%', marginLeft: '10%' }}>
    <strong>Insights Interface</strong>
    <br />
    Insights from the data analysis are showcased in an intuitive interface, offering aggregated-level insights for easier understanding and action. It highlights key drivers of inclusion and recommends activities tailored to your company's specific challenges, aiding in informed decision-making.
    </Typography>
  </Grid>
  
</Grid>


      
</Box>

      

      
      
    </div>
  );

};

export default StartsidaFinalVersion;
