import { Card, Grid, Typography } from "@mui/material";
import dataExtraction from '../../assets/dataExtraction.svg';

export default function HowItWorks() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card variant='outlined'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}> {/* Adjust the width as needed */}
              <img
                src={dataExtraction}
                alt="Data Extraction"
                loading="lazy"
                style={{ width: '100%', maxWidth: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={8}> {/* Adjust the width as needed */}
              <Typography>
                Jolint pulls out interaction info from common work tools like email, but without touching any personal details. Imagine it like seeing where conversations happen without knowing who said what. This way, Jolint gets a bird's-eye view of how people connect at work while keeping everyone's privacy intact.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}


