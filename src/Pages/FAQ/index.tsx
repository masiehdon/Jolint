import faqs from '../../mockdata/faqs.js';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faqs() {
  return (
    <div>
      {faqs.map((faq, index) => (
       <Accordion key={index} sx={{ml: 5, mr: 5, mt: 10}}>
          <AccordionSummary
            sx={{ml: 5, mr: 5, mt: 10}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant='h5'>{ faq.Q}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ml: 5, mr: 5, background: '#E5E4E2'}}>
          <Typography variant='h6'>
           {faq.A}
          </Typography>
        </AccordionDetails>
      </Accordion>
     ))}
      
    </div>
  );
}