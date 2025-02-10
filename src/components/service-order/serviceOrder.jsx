import style from "./serviceOrder.module.css"
import ServiceOrder from "./cards-orders/cardOrder"

const serviceOrderList = () => {


  return (
    <div className={style.page}>
         <section className={style.content}>
           <div>

           </div>
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
                <ServiceOrder
              name="João"
              date="10/02"
              number="97323892"
              time="9:00"
              />
         </section>
    </div>
  )
}

export default serviceOrderList;