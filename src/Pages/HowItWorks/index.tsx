import { FunctionComponent } from "react";
import styles from "./howitWorks.module.css";
import Button from '@material-ui/core/Button';
import { Grid, Typography, Paper} from "@mui/material";
import { Box } from "@material-ui/core";

const StartsidaFinalVersion: FunctionComponent = () => {

  const containerStyle = {
    background: 'linear-gradient(115.34deg, rgba(7, 63, 234, 0.28), rgba(209, 223, 237, 0.22) 25.98%, rgba(237, 243, 249, 0.93) 48.39%, #fafcff 58.59%)',
    minHeight: '50vh', 
    padding: '0', 
  };
  return (
    <div className={styles.startsidaFinalVersion}>
      
      <Box className="mainContent">
      <Grid container spacing={3}  style={containerStyle}>
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
              style={{ width: '100%', height: 'auto', marginTop: '120px', marginLeft: '20px' }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>

      <Grid container spacing={2} justifyContent="flex-start" style={{ position: 'relative', left: '20px', top: '100px' }} height={400} >
      <Grid item xs={12} sm={6} md={3} style={{ position: 'absolute', left: '20px', top: '15%' }}>
        <div style={{ marginLeft: '10px' }}>
          <Button variant="contained" color="primary" style={{ backgroundColor: '#F4770A' }}>
            CONSENT FORM
          </Button>
        </div>
      </Grid>

      <Grid item style={{ position: 'absolute', left: '20px', top: '0' }}>
        <div style={{ marginLeft: '10px' }}>
          <Button variant="outlined" color="primary">
            Why inclusion
          </Button>
        </div>
      </Grid>

      <Grid item style={{ position: 'absolute', left: '200px', top: '0' }}>
        <div style={{ marginLeft: '10px' }}>
          <Button variant="contained" color="primary">
            How it Works
          </Button>
        </div>
      </Grid>
    </Grid>

    <Grid item xs={12} style={{ marginTop: '0', textAlign: 'center' }}>
    <Typography variant="h4" align="center" color="textPrimary" gutterBottom> 
      Inclusion makes a difference
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" gutterBottom> 
      Organisations with higher inclusion among coworkers have according to [source]: 
      </Typography>
      </Grid>

      <Typography variant="h5" align="center" color="textPrimary" gutterBottom> 
      Advantages with Jolint at your workplace
      </Typography>

      
      
    </div>
  );

};

export default StartsidaFinalVersion;
