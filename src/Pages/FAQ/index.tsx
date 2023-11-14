import faqs from '../../mockdata/faqs.js';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export default function Faqs() {
  return (
    <Box sx={{minWidth: '100vw'}}>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{
          ml: 5, mr: 5, maxWidth: {xs: '100%', sm: '90%', lg: '80%'}, '&.Mui-expanded': {
              ml: 5, 
            }, }}>

          <AccordionSummary
            sx={{ml: 5, mr: 5, mt: 10}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant='h5'>{ faq.Q}</Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ml: 5, mr: 5,  }}>
          <Typography variant='h6' sx={{fontSize: 20}} >

           {faq.A}
          </Typography>
        </AccordionDetails>
      </Accordion>
     ))}
      

    </Box>

  );
}