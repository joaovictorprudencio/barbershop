
import styles from "./Mapa.module.css";
const Mapa = () => {
  return (
    <div className={styles.mapaCard}>
  <iframe className={styles.Mapa}
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.933428098188!2d-38.48620111079724!3d-3.759310485891954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7475b99a34829%3A0xc0e8cde50a9d1697!2sMM%20Barbearia%20-%20Cortes%2C%20Barba%2C%20Qu%C3%ADmicas%2C%20Pigmenta%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1732110229838!5m2!1spt-BR!2sbr"
     allowfullscreen="" 
     loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Mapa;
