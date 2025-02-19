/* eslint-disable react/prop-types */

import style from "./cardOrder.module.css"

const CardOrder = ({name,number,date,time}) => {

  return (
    <div className={style.card}>
        <h1 className={style.date}>{date}</h1>
        <p className={style.tome}>horario:{time}</p>
        <p className={style.name}>cliente: {name}</p>
        <p className={style.number}>contato: {number}</p>
    </div>
  );
}

export default CardOrder