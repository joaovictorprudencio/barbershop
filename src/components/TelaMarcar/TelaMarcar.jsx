import React from "react";
import { useState, useEffect } from "react";
import styles from "./TelaMarcar.module.css";
import calendario from "./img/calendario.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Footer from "../footer/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const TelaMarcar = () => {

  const [value, setValue] = useState(dayjs());

  const [number, setnumber] = useState("");

  const [horario, sethorario] = useState("");

  const selectTime = (event) => {
    const seletedTime = event.target.value;
    sethorario(seletedTime);
    console.log(` horario: ${ event.target.value} data ${value}`)
  };

 

  return (
    <div className={styles.componentTela}>
      <section className={styles.cardContent}>
        <div className={styles.cardForm}>
          <div className={styles.titulo}>
            <img className={styles.icon} src={calendario} alt="" />
            <h3>agendamento</h3>
          </div>
          <Box sx={{ marginTop: 5, width: 200 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Data do corte"
                  format="DD-MM-YYYY"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  minDate={dayjs()}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          <Box sx={{ marginTop: 5, width: 200 }}>
            <FormControl fullWidth>
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                shrink={horario === "" || horario !== ""}
              >
                Horario
              </InputLabel>
              <NativeSelect
                value={horario}
                onChange={selectTime}
                inputProps={{
                  name: "horario",
                  id: "uncontrolled-native",
                }}
              >
                <option value={"9:00"}>9:00</option>
                <option value={"10:00"}>10:00</option>
                <option value={"11:00"}>11:00</option>
              </NativeSelect>
            </FormControl>
          </Box>

          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: 200, mt: 5 } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Nome" variant="standard" />
          </Box>

          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: 200, mt: 5 } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Numero de contato" variant="standard" />
          </Box>

          <Button variant="contained" sx={{ marginTop: 5 , backgroundColor: 'rgb(228, 110, 15);',  fontFamily: 'Roboto, sans-serif' }} >
            agendar 
        </Button> 
          
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TelaMarcar;
