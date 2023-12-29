import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Grid } from '@mui/material';
import useNotes from './useNotes';
import NoteCard from './NoteCard';

function MainView() {
    const notes = useNotes();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Joplin Notes Viewer</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}></Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {notes.map((note, index) => (
                            <NoteCard key={index} note={note} />
                        ))}
                    </Grid>
                </Container>
            </main>
        </>
    );
}

export default MainView;
