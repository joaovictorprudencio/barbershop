/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import style from "./serviceOrder.module.css"
import ServiceOrder from "./cards-orders/cardOrder"
import Footer from "../footer/Footer"
import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import {DeleteOrderDialog} from "./components/DeleteOrderDialog.jsx";
import {useListTimesToday} from "../../services/list-times-today-service.js";
const serviceOrderList = () => {
    const { data: times = [], isLoading } = useListTimesToday()
  const [loading, setLoading] = useState(true);

  const [status, setstatus] = useState("error");

  const [messege, setmessege] = useState("");


  const [openModal, setOpenModal] = useState({
      open: false,
      orderId: null
  });


  useEffect(() => {
    const statePage =  () => {


      if (times.length === 0) {
        setstatus("sucess");
        console.log("chamou")
      }
      
    };
    if (isLoading) {
      statePage();
    }
  }, [times, isLoading]);

  

  if (isLoading) {
    return (
      <div className={style.loading}>
        <p>Buscando horários</p>
         <CircularProgress size="4rem" />
      </div>
    )
  }

  const handleOpenModal = (id) => {
      setOpenModal({
          open: true,
          orderId: id,
      });
  }

  const handleCloseModal = () => {
      setOpenModal({
          open: false,
      });
  }

  return (
    <div className={style.page}>

        <DeleteOrderDialog
            open={openModal.open}
            onClose={handleCloseModal}
            orderId={openModal.orderId}
        />

      <section className={style.content}>

        <div className={
          `${style.list} ${status === "sucess" ? style.list : ""} ${status === "error" ? style.listNotFound : ""}`
        }>

            {
                times.length <= 0 && (<h2 className={style.title}>{'Não há horários no momento'}</h2>)
            }

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
                  onClick={() => handleOpenModal(service.id)}
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