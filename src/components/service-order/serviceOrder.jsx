import style from "./serviceOrder.module.css"
import ServiceOrder from "./cards-orders/cardOrder"
import Footer from "../footer/Footer"
import React, { useState } from "react";
const serviceOrderList = () => {


  const [loading, setLoading] = useState(false);

  return (
    <div className={style.page}>
      <section className={style.content}>
        <div className={style.list}>
             
             <h2>Horarios para hoje</h2>
        
          <ServiceOrder
            name="João" 
            date="10/02"
            number="97323892"
            time="9:00"
          />
          <ServiceOrder
            name="João"
            date="10/02"
            number="97323892"
            time="9:00"
          />
    
   
      
        </div>

      </section>
      <Footer/>
    </div>
  )
}

export default serviceOrderList;