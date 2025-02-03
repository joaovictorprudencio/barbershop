import style from "./login.module.css"
import React from "react";
import Footer from "../footer/Footer"
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
const Login = () => {


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = React.useState(false);

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
        <div className={style.sectionLogin}>
          <TextField s
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
          />

          <FormControl  variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
          <div className={style.Paymment}>
                    <p> Este login é apenas para profissionais cadastrados.
                   <br /> Clientes podem agendar diretamente.</p>
                  </div>
          <Button variant="contained" sx={{ marginTop: 5, backgroundColor: 'rgb(228, 110, 15);', width: 130, height: 40 }} >
           <p>Entrar</p>
          </Button>
      </section>

      <Footer></Footer>
    </div>
  )
};

export default Login