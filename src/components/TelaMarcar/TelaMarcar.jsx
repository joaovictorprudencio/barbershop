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

const TelaMarcar = () => {
  const [horario, setHorario] = useState(null);
  const [value, setValue] = useState(dayjs());

  const horarios = ["09:00", "09:30", "10:30", "12:00", "14:00", "14:30"];

  const selecionarHorario = (horarioSelecionado) => {
    setHorario(horarioSelecionado);
  };

  return (
    <div className={styles.componentTela}>
      <div className={styles.cardForm}>
        <div className={styles.titulo}>
          <img className={styles.icon} src={calendario} alt="" />
          <h3>agendamento</h3>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker 
              label="Data do corte"
              format="DD-MM-YYYY"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>

        
          <Box sx={{  marginTop: 5 , width:200}}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Horario
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>9:00</option>
                <option value={20}>9:30</option>
                <option value={30}>16:30</option>
              </NativeSelect>
            </FormControl>
          </Box>
      </div>
      <Footer />
    </div>
  );
};

export default TelaMarcar;
