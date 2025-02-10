/* eslint-disable react/prop-types */

import style from "./cardOrder.module.css"

const CardOrder = ({name,number,date,time}) => {
  return (
    <div className={style.card}>
        <h1>{date}</h1>
        <p>horario:{time}</p>
        <p>cliente: {name}</p>
        <p>contato: {number}</p>
    </div>
  );
}

export default CardOrder