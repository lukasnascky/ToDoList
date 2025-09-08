import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Header: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                To Do List
            </Typography>
        </Container>
    );
};

export default Header;
