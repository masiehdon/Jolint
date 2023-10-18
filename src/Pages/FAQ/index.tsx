import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export default function Faq() {
  const linearGradient = 'linear-gradient(#fdecdd, #fff)';

  return (
    <Box sx={{ background: linearGradient, minHeight: '100vh', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant='h3' sx={{ margin: 2 }}>
        FAQ
      </Typography>
      <Typography variant='subtitle1' sx={{ margin: 2 }}>
        Learn more about Jolint and our work method
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid key={item} item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ marginY: 2 }}>
                  Q: Why do I need to sign a consent form?
                </Typography>
                <Typography variant="body1" sx={{ marginY: 2 }}>
                  A: To be able to help your organization improve inclusion and belonging, and create a more diverse and inclusive workplace, we at Jolint need your consent to collect your personal data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
