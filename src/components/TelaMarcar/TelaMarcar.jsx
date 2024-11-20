import { useState } from "react";
import styles from "./TelaMarcar.module.css";
import calendario from "./img/calendario.png"
const TelaMarcar = () => {

  const [horario, setHorario] = useState(null);

  const horarios = ['09:00', '09:30', '10:30', '12:00', '14:00', '14:30'];

  const selecionarHorario = ( horarioSelecionado) =>{
     setHorario(horarioSelecionado)
  }


  return (
    <div className={styles.componentTela}>

      <div className={styles.cardForm}>

        <div className={styles.titulo}>
          <img className={styles.icon} src={calendario} alt="" /> 
          <h2>agendamento</h2> 
        </div>
        <div className={styles.contentData}>
            <label>Data desejada</label>
           <input type="date" name="" id="" /> 
        </div>


        <div className={styles.SegundoInput}>
             <h2>escolha o horario: </h2>
             <div className={styles.carrosselBotoes}>
        {horarios.map((horarioItem, index) => (
          <button
            key={index}
            onClick={() => selecionarHorario(horarioItem)}
            className={horario === horarioItem ? 'botaoSelecionado' : 'botao'}
          >
            {horarioItem}
          </button>
        ))}
      </div>
      {horario && <p className="horario-selecionado">Horário selecionado: {horario}</p>}
    </div>

      </div>

    </div>
  );
};

export default TelaMarcar;
