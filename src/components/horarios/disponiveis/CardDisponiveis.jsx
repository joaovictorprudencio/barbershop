import styles from "./CardDisponiveis.module.css"
import Item from "./item/Itens";
import listTimesAvailable from "../../../services/times-available"
import { useState } from "react";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';



const CardDisponiveis = () => {



 

  const [times, setTimes] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const GetListTimesAvaliable = async () => {

      const data = await listTimesAvailable();
        setTimes(data)


      if (data.lengh === 0) {
        setEmpty(true);
        setLoading(false)
      }
      setLoading(false)
    };
    GetListTimesAvaliable();
  }, []);






  if (loading) {
    return (
      <div className={styles.component}>
        <div className={styles.card}>
        <CircularProgress size="4rem" />
        </div>
      </div>
    )

  } 


  if (times.length === 0 && loading ===false) {
    return (
      <div className={styles.component}>
      <div className={styles.card}>
      <h2 className={styles.messegeNotFound}>
            Não a Horarios disponiveis <br /> para hoje
          </h2>
          <img
            src="/Empty-cuate.svg"
            alt="Nenhum horário disponível"
            className={styles.empty}
          />
      </div>
    </div> 
    )
  }



  return (
    <div className={styles.component}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>disponiveis para hoje</h1>
        {
          times.map((time, index) => {
            return (
              <Item
                key={index}
                Horario={time}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default CardDisponiveis;
