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
import WhatsAppIcon from "./img/whatsapp.png";
import pixcopy from "./img/document copi.png";
import { useCreateTime } from "../../services/create-time";
import Button from '@mui/material/Button';
import MaterialModal from "../modal/modal";
import { CircularProgress } from "@mui/material";

const BookmarkPage = () => {

  const pixKey = import.meta.env.VITE_KEY;
  const [openModal, setOpenModal] = useState(false)

  const { mutateAsync: createTime, isPending: loadingCreateTime } = useCreateTime()

  const [value, setValue] = useState(dayjs());

  const [numberPhone, setnumberPhone] = useState("");

  const [name, setName] = useState("");

  const [time, setTime] = useState("");

  const [date , setDate] = useState(dayjs().format("YYYY-MM-DD"));

 const [title , setTitle] = useState("");

  const [ message , setMessage] = useState("");

  const selectTime = (event) => {
    const seletedTime = event.target.value;
    setTime(seletedTime);
  };


    const create = async () => {
     

      try {
          const data = await createTime({name, numberPhone, date, time});
  
          setOpenModal(true);
          setTitle("Horário marcado");
          setMessage(`Seu horário foi marcado para as ${dayjs(time, "HH:mm").format("HH:mm")} no dia ${dayjs(date).format("DD/MM")} com sucesso ${name} !`);
  
          console.log("Data recebida da API:", data);
      } catch (error) {
          setOpenModal(true);
          setTitle("Horário está indisponível");
          setMessage("Infelizmente não temos esse horário disponível para essa data");
  
          console.error("Erro ao marcar horário:", error);
      }
}
    


 
    const number = '5585998160243';
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
      <MaterialModal 
        open={openModal}
        messageMain={title}
        message={message}
        onClose={() => setOpenModal(false)}
      />
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
                  format="YYYY-MM-DD"
                  value={value}
                  onChange={(newValue) => { 
                    const formatDate = dayjs(newValue).format("YYYY-MM-DD")
                    console.log("Formatado:", formatDate);
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
                <option value={"00:00:00"}>Escolher</option>
                <option value={"09:00:00"}>9:00</option>
                <option value={"09:30:00"}>9:30</option>
                <option value={"10:00:00"}>10:00</option>
                <option value={"10:30:00"}>10:30</option>
                <option value={"11:00:00"}>11:00</option>
                <option value={"11:30:00"}>11:30</option>
                <option value={"12:00:00"}>12:00</option>
                <option value={"14:00:00"}>14:00</option>
                <option value={"14:30:00"}>14:30</option>
                <option value={"15:00:00"}>15:00</option>
                <option value={"15:30:00"}>15:30</option>
                <option value={"16:00:00"}>16:00</option>
                <option value={"16:30:00"}>16:30</option>
                <option value={"17:00:00"}>17:00</option>
                <option value={"17:30:00"}>17:30</option>
                <option value={"18:00:00"}>18:00</option>
                <option value={"18:30:00"}>18:30</option>
                <option value={"19:00:00"}>19:00</option>
                <option value={"19:30:00"}>19:30</option>
                <option value={"20:00:00"}>20:00</option>
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
            onClick={create}
           >
            { loadingCreateTime ? <CircularProgress /> : 'Agendar' }
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookmarkPage;
