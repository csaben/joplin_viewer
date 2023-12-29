import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Stack, Typography, CssBaseline, AppBar, Toolbar, Button, CardContent, Grid, CardActions, Box, Container, CardMedia, Card } from '@mui/material';

import useStyles from './styles.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const cards = [1, 2, 3];
const theme = createTheme();

//functional component
function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get('/api').then(response => {
      const data = Array.isArray(response.data) ? response.data : [response.data];
      setNotes(data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Joplin Notes Viewer</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}></Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, index) => {
              const note = notes[index]; // Get the note corresponding to the card index
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="div"
                      sx={{ pt: '56.25%' }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {note && (
                        <>
                          <Typography gutterBottom variant="h5" component="h2">
                            {note.title}
                          </Typography>
                          {/* <Typography dangerouslySetInnerHTML={{ __html: note.html }}></Typography> */}
                        </>
                      )}
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
      <footer>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Previous Preview</Button>
              <Button variant="outlined">Next Preview </Button>
            </Stack>
          </Container>
        </Box>
      </footer>
    </ThemeProvider>
  );
}


export default App;
