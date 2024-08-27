import styles from "./CardDisponiveis.module.css"
import Item from "./item/Itens";    

const horaInicial = "9:00"
const nome = "joão victor"
const numero = 8779879;

let [horas, minutos ] = horaInicial.split(":").map(Number);
let HorarioFinal = new Date();
HorarioFinal.setHours(horas, minutos,0,0);

HorarioFinal.setMinutes(HorarioFinal.getMinutes() + 30);

 let hora = HorarioFinal.getHours();
  let minuto = HorarioFinal.getMinutes();
  let horaFormatada = `${hora}:${minuto}`;

const CardDisponiveis = () => {


    const horario = {horaInicial,horaFormatada , nome, contato:numero}
    
  return (
    <div className={styles.component}>
        <div className={styles.card}>
            <h1 className={styles.titulo}>disponiveis para hoje</h1>
         <Item
           Horario={horario}
         />
          <Item
           Horario={horario}
         />
          <Item
           Horario={horario}
         />
         
        </div>
    </div>
  );
};

export default CardDisponiveis;
