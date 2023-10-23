import { Grid, Box, Typography } from '@mui/material';
import { BoxText, boxText } from '../..//mockdata/inclusion';


const boxColor = '#2C3386'


export default function index() {
  return (
      <Grid container sx={{mt:4}}>
          <Grid item xs={12} md={12}>
              <Typography variant='h5' sx={{fontWeight: 700, textAlign: 'center'}}>
              Advantages with Jolint at your workplace
          </Typography>
          </Grid>
          
          {boxText.map((item: BoxText, index: number) => (
             <Grid item md={4} sx={{textAlign: 'center'}} key={index}>
                  <Box sx={{ backgroundColor: boxColor, color: 'white', m: 2,width: .8,  height: 260, textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                      {item.text}
                  </Box>
              
          </Grid> 
          ))}
          
   </Grid>
  )
}
