import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Typography, CssBaseline, AppBar, Toolbar } from '@mui/material';

import useStyles from './styles.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function AppContent() {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/api').then(response => {
      const data = Array.isArray(response.data) ? response.data : [response.data];
      setNotes(data);
      // axios.get('/api').then(response => {
      //   setNotes(response.data);
    });
  }, []);

  return notes.map((note) => {
    return (
      <div className={classes.container}>
        <Typography variant="h4">{note.title}</Typography>
        <div dangerouslySetInnerHTML={{ __html: note.html }}></div>
      </div>
    )
  })
}

//functional component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Notes</Typography>
        </Toolbar>
      </AppBar>
      <AppContent />
    </ThemeProvider>
  );
}


export default App;
