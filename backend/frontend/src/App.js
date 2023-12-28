import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/api').then(response => {
      setNotes(response.data);
    });
  }, []);

  return notes.map((note) => {
    return (
      <div>
        <h1>{note.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: note.html }}></div>
      </div>
    )
  })
}

export default App;
