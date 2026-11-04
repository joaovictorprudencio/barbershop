import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from '../footer/Footer';
import logo from '../header/img/logo.png';
import loginBarber from '../../services/auth-service';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (credentials) => {
    setLoading(true);
    setError('');

    try {
      await loginBarber(credentials.email, credentials.password);
      navigate('/agendamentos');
    } catch (err) {
      setError(err?.message || 'Não foi possível autenticar. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().trim().required('E-mail é obrigatório!').email('Informe um e-mail válido'),
      password: Yup.string().required('Senha é obrigatória!'),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

 
  const handleFieldChange = (event) => {
    if (error) setError('');
    formik.handleChange(event);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        pt: { xs: 3, sm: 5, md: 8 },
        background:
          'radial-gradient(circle at 12% 0%, rgba(228, 110, 15, 0.22), transparent 45%), linear-gradient(180deg, #2f2f2f 0%, #1b1b1b 100%)',
      }}
    >
      <Container maxWidth="md" sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.85fr) minmax(0, 1.15fr)' },
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 6,
              p: 5,
              color: 'common.white',
              background: 'linear-gradient(160deg, #1f1f1f 0%, #000 100%)',
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box component="img" src={logo} alt="Barbershop" sx={{ width: 40, height: 40 }} />
              <Typography variant="h6" fontWeight={700}>
                barbershop
              </Typography>
            </Stack>

            <Box>
              <Typography variant="h5" component="p" fontWeight={700} sx={{ mb: 1.5 }}>
                Painel do profissional
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Acompanhe seus agendamentos e organize os horários da sua agenda.
              </Typography>
            </Box>

            <Box sx={{ height: 3, width: 56, borderRadius: 3, bgcolor: 'primary.main' }} />
          </Box>

          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ p: { xs: 3, sm: 4, md: 5 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ display: { md: 'none' } }}>
              <Box component="img" src={logo} alt="Barbershop" sx={{ width: 32, height: 32 }} />
              <Typography variant="subtitle1" fontWeight={700}>
                barbershop
              </Typography>
            </Stack>

            <Box>
              <Typography variant="h5" component="h1" fontWeight={700}>
                Entrar
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                Use o e-mail e a senha cadastrados para acessar sua conta.
              </Typography>
            </Box>

            {!!error && (
              <Alert severity="error" variant="outlined" icon={<ErrorOutlineOutlinedIcon />}>
                {error}
              </Alert>
            )}

            <TextField
              id="login-email"
              name="email"
              label="E-mail"
              type="email"
              value={formik.values.email}
              onChange={handleFieldChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email ? formik.errors.email : ''}
              autoComplete="current-email"
              autoFocus
              disabled={loading}
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              id="login-password"
              name="password"
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={handleFieldChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password ? formik.errors.password : ''}
              autoComplete="current-password"
              disabled={loading}
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon fontSize="small" color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                        onClick={() => setShowPassword((show) => !show)}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                        disabled={loading}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Alert
              severity="info"
              icon={<InfoOutlinedIcon />}
              sx={{
                bgcolor: 'rgba(228, 110, 15, 0.08)',
                color: 'text.primary',
                border: '1px solid rgba(228, 110, 15, 0.24)',
              }}
            >
              Este login é apenas para profissionais cadastrados. Clientes podem agendar diretamente.
            </Alert>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : <LoginOutlinedIcon />
              }
              sx={{ minHeight: 48, fontSize: '1rem' }}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>

            <Divider flexItem />

            <Typography variant="caption" color="text.secondary" textAlign="center">
              É cliente?{' '}
              <Link component={RouterLink} to="/horarios" underline="hover" sx={{ fontWeight: 600 }}>
                Agende seu horário
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
};

export default Login;
