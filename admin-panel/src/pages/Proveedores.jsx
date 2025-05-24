import { Typography, Paper } from '@mui/material';

const Proveedores = () => {
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
        Gestión de Proveedores
      </Typography>
      <Typography variant="body1">
        Aquí podrás gestionar toda la información relacionada con los proveedores.
      </Typography>
    </Paper>
  );
};

export default Proveedores; 