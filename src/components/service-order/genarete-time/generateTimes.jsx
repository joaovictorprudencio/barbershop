import style from "./generateTimes.module.css"
import axios from "axios";





const generateTimes = () => {




    const generateTime = () => {
        // return axios.get(`${import.meta.env.VITE_API_URL}/times/unavailable`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // });

        console.log("gerou");
    }






    return (
        <div class={style.component}>
            <section class={style.content}>
                <button class={style.button} onClick={generateTime}>
                    Gerar horarios do dia
                </button>
            </section>
        </div>
    )
}


export default generateTimes;