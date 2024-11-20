import React from 'react';
import { useState , useEffect } from "react";
import styles from "./TelaMarcar.module.css";
import calendario from "./img/calendario.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import Footer from "../footer/Footer";

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
          <h3 >agendamento</h3>
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
      </div>
      <Footer />
    </div>
  );
};

export default TelaMarcar;
