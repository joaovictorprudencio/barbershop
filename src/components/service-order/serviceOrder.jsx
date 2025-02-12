/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import style from "./serviceOrder.module.css"
import ServiceOrder from "./cards-orders/cardOrder"
import Footer from "../footer/Footer"
import React, { useState } from "react";
const serviceOrderList = () => {


  const [loading, setLoading] = useState(false);

  const [status , setstatus] = useState("error");

  const [messege, setmessege] = useState("")

  const services = []

  return (
    <div className={style.page}>

      <section className={style.content}>

      <div className={
        `${style.list} ${status === "sucess" ? style.list: ""} ${status ==="error" ? style.listNotFound : ""}`
        }>

        <h2 className={style.title}>{messege}</h2>

        {services.length === 0 && (
          <div className={style.noServices}>
            <img
              src="/Search.gif"
              alt="Nenhum horário disponível"
              className={style.notfound}
            />
            <p className={style.messegeNotfound}>Sem horários disponíveis para hoje.</p>
          </div>
        )}


        {services.length > 0 &&
          services.map((service, index) => (
            <> 

              <ServiceOrder
                key={index}
                name="João"
                date="10/02"
                number="97323892"
                time="9:00" />  </>
          ))
        }
</div>
      </section>

      <Footer />
    </div>
  )
}

export default serviceOrderList;