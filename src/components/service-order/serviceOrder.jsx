/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import style from "./serviceOrder.module.css"
import ServiceOrder from "./cards-orders/cardOrder"
import Footer from "../footer/Footer"
import React, { useState } from "react";
const serviceOrderList = () => {


  const [loading, setLoading] = useState(false);

  const services = ["ok"]

  return (
    <div className={style.page}>

 <section className={style.content}>
       

      
      {services.length === 0 && (
        <div className={style.noServices}>
          <img 
          src="/public/Search.gif"
          alt="Nenhum horário disponível"
          className={style.notfound}
           />
          <p>Sem horários disponíveis para hoje.</p>
        </div>
      )}

     
      

          
          {services.length > 0 &&
            services.map((service, index) => ( 
              <>  <div className={style.list}>
              
              <h2>Horários para hoje</h2><ServiceOrder
                key={index}
                name="João"
                date="10/02"
                number="97323892"
                time="9:00" />  </div></>
            ))
          }
      
      </section>

      <Footer />
    </div>
  )
}

export default serviceOrderList;