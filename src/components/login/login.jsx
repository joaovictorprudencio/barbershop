import style from "./login.module.css"
import React from "react";
import Footer from "../footer/Footer"
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
          <TextField sx={{ marginTop: 5, color: '#ffff', width: 130, height: 40 }}
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
          />

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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

      </section>

      <Footer></Footer>
    </div>
  )
};

export default Login