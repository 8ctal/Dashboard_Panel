import { Typography, Paper } from '@mui/material';

const Usuarios = () => {
  return (
    <Paper 
      sx={{ 
        p: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        maxWidth: 600, 
        alignSelf: 'center', 
        textAlign: 'center' 
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Gestión de Usuarios
      </Typography>
      <Typography variant="body1">
        Aquí podrás gestionar todos los usuarios del sistema.
      </Typography>
    </Paper>
  );
};

export default Usuarios; 