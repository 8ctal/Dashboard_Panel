import { Typography, Paper } from '@mui/material';

const Home = () => {
  return (
    <Paper 
      sx={{ 
        p: 4, 
        mt: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        maxWidth: 600, 
        mx: 'auto', 
        textAlign: 'center' 
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Bienvenido al Panel Administrativo
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Selecciona una sección en la barra de navegación para comenzar.
      </Typography>
    </Paper>
  );
};

export default Home; 