import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";
import { Grid, Typography} from "@mui/material";
import { Box } from "@material-ui/core";

const AboutUsFinal: FunctionComponent = () => {

  const containerStyle = {
    background: 'linear-gradient(115.34deg, rgba(180, 180, 180, 0.8), rgba(220, 220, 220, 0.6) 30%, rgba(255, 255, 255, 0.4) 70%, #fafcff 100%)',
    minHeight: '75vh',
    padding: '0',
};

  return (
    <Box className="mainContent" style={containerStyle}>
      <div className={styles.startsidaFinalVersion}>
      <Grid item xs={12} md={8} container display="flex" justifyContent="flex-start" flexDirection="column">
      <Typography variant="h4" color="textPrimary" gutterBottom style={{ marginTop: '10%', fontWeight: 'bold', marginLeft: '10%' }}>
        About us
      </Typography>

    </Grid>

    <Grid item xs={12} md={10} container display="flex" justifyContent="flex-start" flexDirection="column">
      <Typography variant="h4" color="textPrimary" gutterBottom style={{ marginTop: '3%', fontWeight: 'bold', fontSize: '30px', marginLeft: '10%' }}>
      Our mission
      </Typography>

    </Grid>

    <Grid item xs={12} md={10} container display="flex" justifyContent="flex-start" flexDirection="column">
      <Typography variant="h4" color="textPrimary" gutterBottom style={{ marginTop: '3%', fontSize: '20px', width: '60%', marginLeft: '10%' }}>
      At Jolint, we are driven by a passion for <strong> improving workplaces </strong> and creating a better world for everyone. 
We make sure to keep ethics and privacy at the forefront when gathering data. Throughout our journey, 
we've stayed committed to these principles, ensuring that <strong> individuals' information is handled with care and respect. </strong>  Discover the journey of Jolint, and join us in our quest to make the world a better place, one company at a time. 
With our innovative approach, cutting-edge technologies, and a team of experts, we are committed to creating 
a <strong> more inclusive and equitable work culture for all. </strong>
      </Typography>

    </Grid>

    <Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
  
  <Grid item xs={12} sm={4} md={4} lg={2}>
    <img
      src="/public/image16.png"
      alt="How It Works"
      style={{ width: '100%', height: 'auto' , marginLeft: '20px', marginTop: '30px'}}
    />
  </Grid>

  <Grid item xs={12} sm={8} md={4} lg={8}>
    <Typography variant="h6" color="dark" gutterBottom style={{ marginRight: '20%', marginLeft: '10%' }}>
    <strong>Klaudia Mur</strong>
    <br />
    I am a data scientist and physicist. My background in Complex Adaptive Systems has fueled my passion for understanding how people interact, communicate, and collaborate in the workplace. My mission is to use data-driven analysis to make the workplace a better place for employees, by understanding the complexities of human interactions and finding ways to improve them. Join me on my journey to enhance workplace culture and improve the work environment. With my expertise in data analysis and understanding of human behavior, I am committed to leading the way towards a more inclusive and equitable work culture for all.
    </Typography>
  </Grid>
  
</Grid>

<Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
  
  <Grid item xs={12} sm={4} md={4} lg={2}>
    <img
      src="/public/image17.png"
      alt="How It Works"
      style={{ width: '100%', height: 'auto' , marginLeft: '20px', marginTop: '30px'}}
    />
  </Grid>

  <Grid item xs={12} sm={8} md={4} lg={8}>
    <Typography variant="h6" color="dark" gutterBottom style={{ marginRight: '20%', marginLeft: '10%' }}>
    <strong>Faheem Shah</strong>
    <br />
    As the co-founder of Jolint, I bring a wealth of expertise in organizational communication and collaboration to the table. With a background in international politics, communication studies, and specialized training in these areas, I understand the intricacies and nuances of effective communication within organizations. My passion for this field led me to start Jolint, with the goal of empowering companies to create more inclusive and equitable work cultures. Join me in my journey with Jolint, as we work together to improve communication and collaboration within organizations for a more inclusive work environment.
    </Typography>
  </Grid>
  
</Grid>
  
      </div>
    </Box>
  );
};

export default AboutUsFinal;
