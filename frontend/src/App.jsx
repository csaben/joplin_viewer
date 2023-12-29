import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Typography, CssBaseline, AppBar, Toolbar } from '@mui/material';

//functional component
function App() {
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
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6">Joplin Notes Viewer</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Typography variant="h4">{note.title}</Typography>
            <div dangerouslySetInnerHTML={{ __html: note.html }}></div>
          </div>
        </main>
      </>
    )
  })
}


export default App;
