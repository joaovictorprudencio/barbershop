/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import style from "./cardOrder.module.css"

const CardOrder = ({name,number,date,time}) => {

  return (
    <div className={style.card}>
        <h1 className={style.date}>{dayjs(date).format("DD/MM")}</h1>
        <p className={style.tome}>Horário : {time.substring(0, 5)}</p>
        <p className={style.name}>cliente : {name}</p>
        <p className={style.number}>contato : {number}</p>
    </div>
  );
}

export default CardOrder