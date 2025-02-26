/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import styles from "./bookmarkPage.module.css";
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
import WhatsAppIcon from "./img/whatsapp.png";
import pixcopy from "./img/document copi.png";
import createTime from "../../services/create-time";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const BookmarkPage = () => {

  const pixKey = import.meta.env.VITE_KEY;

  const [value, setValue] = useState(dayjs());

  const [numberPhone, setnumberPhone] = useState("");

  const [name, setName] = useState("");

  const [time, setTime] = useState("");

  const [date , setDate] = useState("");

  const selectTime = (event) => {
    const seletedTime = event.target.value;
    setTime(seletedTime);
    console.log(` horario: ${event.target.value} data ${value}`)
  };


  useEffect(()=>{
    const create = async () => {

      const data =  await createTime(name,numberPhone,date,time)

      if(data.messege === "Horario não disponivel") {

      }

      


    
    }
  },[]);


 
    const number = '5585997330821';
    const messege = "envie o comprovante pix!";
    const encodeMessege = encodeURIComponent(messege);
    const whatsappLink = `https://wa.me/${number}?text=${encodeMessege}`
  

  const handleRedirec = () => {
    window.location.href = whatsappLink;
  }


  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleNumberBlur = (event) => {
    setnumberPhone(event.target.value);
  };

  const stateObject = () => {
    console.log(`nome: ${name} telefone: ${numberPhone} horario: ${time} data: ${date}`)
  }

  const confirm = () => {
   alert("chave pix copiada")
  }

  const text = "texto copiado";

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(pixKey)
        .then(() => alert("Chave pix copiada!"))
        .catch(err => fallbackCopy());
    } else {
      fallbackCopy();
    }
  };
  
  const fallbackCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = pixKey;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Chave pix copiada!");
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
                  onChange={(newValue) => {
                    const formatDate = dayjs(newValue).format("YYYY-MM-DD")
                    setValue(newValue)
                    setDate(formatDate)
                  }}
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
                shrink={time === "" || time !== ""}
              >
                Horario
              </InputLabel>
              <NativeSelect
                value={time}
                onChange={selectTime}
                inputProps={{
                  name: "horario",
                  id: "uncontrolled-native",
                }}
              >
                <option value={"8:30"}>8:30</option>
                <option value={"9:00"}>9:00</option>
                <option value={"10:00"}>10:00</option>
                <option value={"10:30"}>10:30</option>
                <option value={"11:00"}>11:00</option>
                <option value={"11:30"}>11:30</option>
                <option value={"14:00"}>14:00</option>
                <option value={"14:30"}>14:30</option>
                <option value={"15:00"}>15:00</option>
              </NativeSelect>
            </FormControl>
          </Box>

          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: 200, mt: 5 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Nome"
              variant="standard"
              onChange={handleNameBlur}
              value={name}  
            />

          </Box>

          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: 200, mt: 5 } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic"
              label="Numero de contato"
              variant="standard"
              onChange={handleNumberBlur}
              value={numberPhone}
            />
          </Box>

          <div className={styles.Paymment}>
            <p> 50% do valor <br /> garante sua reserva.</p>
          </div>

          <div className={styles.firstStep}>
            <p className={styles.messege}>.1 Copie a chave pix </p>
            <img className={styles.copyImage} onClick={handleCopy} src={pixcopy} 
            alt="" />
          </div>

          <div className={styles.secondStep}>
            <p className={styles.messege} >.2 Mande o comprovante aqui </p>
            <img className={styles.whatsappImage} onClick={handleRedirec} src={WhatsAppIcon} 
            alt="" />
          </div>


          <Button
           variant="contained"
            sx={{ marginTop: 5, backgroundColor: 'rgb(228, 110, 15);', width: 130, height: 40 }}
            onClick={marchTime}
           >
            agendar
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookmarkPage;
