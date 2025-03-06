/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import style from "./serviceOrder.module.css"
import ServiceOrder from "./cards-orders/cardOrder"
import Footer from "../footer/Footer"
import React, { useState, useEffect } from "react";
import ListTimesToday from "../../services/list-times-today-service"
import CircularProgress from '@mui/material/CircularProgress';
const serviceOrderList = () => {


  const [loading, setLoading] = useState(true);

  const [status, setstatus] = useState("error");

  const [messege, setmessege] = useState("");

  const [times, setTimes] = useState([])


  useEffect(() => {
    const GetListTimes = async () => {
      try {

        const listTimes = await ListTimesToday();

        

            const safeListTimes = listTimes ? listTimes : []; 

            setTimes(safeListTimes);

            if (safeListTimes.length === 0) { 
                setstatus("error");
                setmessege("Não há horários para hoje");
            } else {
                setstatus("success");
                setmessege("Horários para hoje");
            }


      } catch (err) {
        setmessege(err || "handling error")
      }

      setLoading(false)

    };

    GetListTimes();

  }, []);


  if (loading) {
    return (
      <div className={style.loading}>
        <p>Buscando horários</p>
         <CircularProgress size="4rem" />
      </div>
    )
  }

  
  return (
    <div className={style.page}>

      <section className={style.content}>

        <div className={
          `${style.list} ${status === "sucess" ? style.list : ""} ${status === "error" ? style.listNotFound : ""}`
        }>

          <h2 className={style.title}>{messege}</h2>

          {times.length === 0 && (
            <div className={style.noServices}>
              <img
                src="/Search.gif"
                alt="Nenhum horário disponível"
                className={style.notfound}
              />
            </div>
          )}


          {times.length > 0 &&
            times.map((service, index) => (
              <>

                <ServiceOrder
                  key={index}
                  name={service.cliente.nome || ""}
                  date={service.data || ""}
                  number={service.cliente.telefone || ""}
                  time={service.horario || ""} 
                  /> 
              </>
            ))
          }
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default serviceOrderList;