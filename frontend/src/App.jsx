import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteDetail from './NoteDetail';
import MainView from './MainView';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/note/:noteId" element={<NoteDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
