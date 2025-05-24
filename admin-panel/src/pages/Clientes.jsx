import { Typography, Paper } from '@mui/material';

const Clientes = () => {
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
        Gestión de Clientes
      </Typography>
      <Typography variant="body1">
        Aquí podrás gestionar toda la información relacionada con los clientes.
      </Typography>
    </Paper>
  );
};

export default Clientes; 