import { Avatar, Button, Card, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { content } from '../../mockdata/home';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { inclusion, InclusionDifference } from '../..//mockdata/inclusion';
import Advantages from '../Advantages';



const btnColor = '#F4770A'
const percentageColor= '#0015CE'
  
  
export default function index() {

  

  return (
    
    <Grid container>
     
        {content.map((item, index) => (
         <Grid item xs={12} md={6} lg={6} >         
          <Card key={index} sx={{ border: 'none', boxShadow: 'none' }}>
          <Stack sx={{m:3}}>
          <Typography variant='h5'>
              {item.header}
            </Typography> 
            <Typography variant='subtitle1'>
              {item.text}
              </Typography>
              <Grid item xs={6} sm={12}>
              <Button variant='outlined' sx={{m:1}}>Why inclusion </Button>
               <Button variant='contained' sx={{m:1}}><ArrowRightIcon />How it works</Button>
              </Grid>
              <Grid item xs={6} sm={12}>
                  <Button variant='contained' sx={{ backgroundColor: btnColor, m: 1 }}>Consent form</Button>
              
                </Grid>
              </Stack>
            </Card>
          </Grid>
        ))}
      <Grid item xs={12} md={6} lg={6}>
        <Card  sx={{
          border: 'none', boxShadow: 'none'
        }}>
          {
            <Avatar
            src="https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_1280.jpg"
            alt="Description"
              sx={{
                height: .8, width: .8, overflow: 'hidden', position: 'relative', ml: 25, mt: 5
                 }}
          />}
        </Card>
      </Grid>
      
      <Grid item xs={12} sx={{mt: 10, ml:5, mb: 5, textAlign: 'center'}} >
        <Card sx={{ border: 'none', boxShadow: 'none',  }} >
        <Typography variant='h4'>Inclusion makes a difference</Typography>
          <Typography variant='body2'>Organisations with higher inclusion among coworkers have according to [source]:
          </Typography>
        </Card>
      </Grid>
      
      {inclusion.map((item: InclusionDifference, index: number) => (
        <Grid item xs={6} md={3} sx={{textAlign: 'center'}}>
          <Paper elevation={0} key={index}>
          <Typography variant="body2" sx={{color: percentageColor, fontWeight: 700}}>{item.percentage}%</Typography>
      <Typography variant="body2">{item.text}</Typography>
          </Paper>
           </Grid>
        ))}
        <Advantages />
      </Grid>
  )
}
