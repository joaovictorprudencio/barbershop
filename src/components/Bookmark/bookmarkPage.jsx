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
import { CircularProgress, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';

const BookmarkPage = () => {

  const TimeValidation = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    time: Yup.string().required('Horário é obrigatorio'),
    numberPhone: Yup.string().required('Numero de celular é obrigatorio'),
  })

  const pixKey = import.meta.env.VITE_KEY;
  const [openModal, setOpenModal] = useState(false)
  
  const { mutateAsync: createTime, isPending: loadingCreateTime } = useCreateTime()
  
  const [value, setValue] = useState(dayjs());
    
  const [date , setDate] = useState(dayjs().format("YYYY-MM-DD"));
  
  const [title , setTitle] = useState("");
  
  const [ message , setMessage] = useState("");
  
  
  const create = async ({name, numberPhone, date, time}) => {
    
    
    try {
      console.log(`data no compoenete: ${date}`)
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
  
  const formik = useFormik({
    initialValues: {
      name: '',
      time: '',
      numberPhone: '',
      date: dayjs().format("YYYY-MM-DD")
    },
    validationSchema: TimeValidation,
    onSubmit: async (values) => {
      try {
        await create({...values})
      } catch (e) {
        console.error(e)
      }
    }
  })


 
    const number = '5585998160243';
    const messege = "envie o comprovante pix!";
    const encodeMessege = encodeURIComponent(messege);
    const whatsappLink = `https://wa.me/${number}?text=${encodeMessege}`
  

  const handleRedirec = () => {
    window.location.href = whatsappLink;
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
                    formik.setFieldValue("date", formatDate);
                    setValue(newValue)
                    setDate(formatDate)
                    console.log("date no input  : " ,date)
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
                shrink={formik.values.time === "" || formik.values.time !== ""}
              >
                Horario
              </InputLabel>
              <NativeSelect
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.time && Boolean(formik.errors.time)}
                inputProps={{
                  id: "uncontrolled-native",
                }}
                style={{
                  color: (formik.touched.time && Boolean(formik.errors.time)) ? '#E53935' : '#000'
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
            {
              (formik.touched.time && Boolean(formik.errors.time)) && (
                <Typography fontSize={12} color="error">{formik.errors.time}</Typography>
              )
            }
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
              name={'name'}
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.name}  
              error={formik.touched.name && Boolean(formik.errors.name)}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.name && formik.errors.name
              }
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
              name={'numberPhone'}
              onChange={formik.handleChange}
              value={formik.values.numberPhone}
              error={formik.touched.numberPhone && Boolean(formik.errors.numberPhone)}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.numberPhone && formik.errors.numberPhone
              }
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
            sx={{ marginTop: 2, backgroundColor: 'rgb(228, 110, 15);', width: 130, height: 40 }}
            onClick={formik.handleSubmit}
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
