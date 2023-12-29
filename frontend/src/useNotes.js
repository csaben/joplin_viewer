import { useState, useEffect } from 'react';
import axios from 'axios';

const useNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('/api');
                const data = Array.isArray(response.data) ? response.data : [response.data];
                setNotes(data);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, []);

    return notes;
};

export default useNotes;
