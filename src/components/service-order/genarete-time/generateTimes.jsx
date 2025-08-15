import style from "./generateTimes.module.css"
import axios from "axios";

const GenerateTimes = () => {

    const generateTime = () => {
        return axios.get(`${import.meta.env.VITE_API_URL}/times/config`, {
            headers: {
                "Content-Type": "application/json",
            }
        });

    }

    return (
        <div class={style.component}>
            <section class={style.content}>
                <button class={style.button} onClick={generateTime}>
                    Gerar Rotina
                </button>
            </section>
        </div>
    )
}


export default GenerateTimes;