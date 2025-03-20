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
import { useNavigate } from 'react-router-dom';
import {useFormik} from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";

const Login = () => {


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();


  const [login, setLogin] = useState({ password: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };



  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (login) => {

    setLoading(true);
    setError('');

    try {
      const data = await loginBarber(login.email, login.password);


      localStorage.setItem('authToken', data.token);


     navigate('/agendamentos');

    } catch (err) {
      setError('Erro: '+ err);
     
      //mock for test  flux login
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email é obrigatório!'),
      password: Yup.string().required('Senha é obrigatória!')
    }),
    onSubmit: (values) => handleSubmit(values)
  })


  return (
    <div className={style.page}>

      <section className={style.content}>



        {!loading &&
          <>
            <h1 className={style.title}>Entrar</h1>

            <div className={style.sectionLogin}>
              <TextField
                id="outlined-email-input"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors.email)}
                helperText={
                  (formik.touched.email && Boolean(formik.errors.email)) ?
                      formik.errors.email : ''
              }
                type="email"
                name="email"
                autoComplete="current-email" />

              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.password)}
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
                {
                  (formik.touched.password && Boolean(formik.errors.password)) && (
                      <Typography color={'error'} ml={2} fontSize={12}>{formik.errors.password}</Typography>
                    )
                }
              </FormControl>
            </div><div className={style.Paymment}>
              <p> Este login é apenas para profissionais cadastrados.
                <br /> Clientes podem agendar diretamente.</p>
            </div><Button variant="contained"
              sx={{ marginTop: 5, backgroundColor: 'rgb(228, 110, 15);', width: 130, height: 40 }}
              onClick={formik.handleSubmit}
            >
              <p>Entrar</p>
            </Button></>
        }

        {!!loading &&

          <div className={style.loading}>
            <h1 className={style.loginMessege}>Verificando credenciais...</h1>
            <CircularProgress size="4rem" />
          </div>

        }


        {!!error  &&

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