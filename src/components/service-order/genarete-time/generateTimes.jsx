import style from "./generateTimes.module.css"
import axios from "axios";
import Modal from "../../modal/modal";
const GenerateTimes = () => {

    const generateTime = () => {
        
        return axios.get(`${import.meta.env.VITE_API_URL}/times/config`, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    const actionButton = () => {
      generateTime();
      alert("Rotina gerada !")
    };

    return (
        <div class={style.component}>
            <section class={style.content}>
                <button class={style.button} onClick={actionButton}>
                    Gerar Rotina
                </button>
            </section>
        </div>
    )
}


export default GenerateTimes;