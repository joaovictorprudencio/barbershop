import style from "./login.module.css"
import React, { useState } from "react";
import Footer from "../footer/Footer"
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import loginBarber from "../../services/auth-service";
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = React.useState(false);




  const [login, setLogin] = useState({ password: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };



  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setLoading(true);
    setError('');

    try {
      const data = await loginBarber(login.email, login.password); 


      localStorage.setItem('authToken', data.token);

      window.location.href = '/serviços';
    } catch (err) {
      setError('Usuário não autenticado ');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className={style.page}>

      <section className={style.content}>

        <h1 className={style.title}>Entrar</h1>

        {!loading &&

          <><div className={style.sectionLogin}>
            <TextField s
              id="outlined-email-input"
              label="Email"
              value={login.email}
              onChange={handleChange}
              type="email"
              name="email"
              autoComplete="current-email" />

            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={login.password}
                onChange={handleChange}
                name="password"
                endAdornment={<InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>}
                label="Password" />
            </FormControl>
          </div><div className={style.Paymment}>
              <p> Este login é apenas para profissionais cadastrados.
                <br /> Clientes podem agendar diretamente.</p>
            </div><Button variant="contained"
              sx={{ marginTop: 5, backgroundColor: 'rgb(228, 110, 15);', width: 130, height: 40 }}
              onClick={handleSubmit}
            >
              <p>Entrar</p>
            </Button></>
        }

        {!!loading &&

          <div className={style.loading}>
            <h1>confirmando dados</h1>
            <CircularProgress />
          </div>

        }


        {!!error &&

          <div className={style.loading}>
            <h1>Erro ao autenticar</h1>
             <h3>{error}</h3>
          </div>

        }

      </section>

      <Footer></Footer>
    </div>
  )



};

export default Login