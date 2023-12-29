import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const NoteCard = ({ note }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="div" sx={{ pt: '56.25%' }} image="https://source.unsplash.com/random?wallpapers" />
                <CardContent sx={{ flexGrow: 1 }}>
                    {note && (
                        <>
                            <Typography gutterBottom variant="h5" component="h2">
                                {note.title}
                            </Typography>
                        </>
                    )}
                </CardContent>
                <CardActions>
                    <Link to={`/note/${note.id}`} style={{ textDecoration: 'none' }}>
                        <Button size="small">View</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NoteCard;
