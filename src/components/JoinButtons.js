import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

const JoinButtons = () => {
  return (
    <Box mt={8}>
      <Typography variant="h3">Interested in joining?</Typography>
      <Box mt={4} py={12} bgcolor="#f1f1f1">
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" sx={{pb: 2}}>Company</Typography>
              <Button component={RouterLink} to="/signup_company" variant="contained" sx={{px: 3}}>Learn more</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" sx={{pb: 2}}>Candidate</Typography>
              <Button component={RouterLink} to="/jobti" variant="contained" sx={{px: 3}}>Learn more</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default JoinButtons;