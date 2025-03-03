import styles from "./CardService.module.css";
import Chip from '@mui/material/Chip';

const CardService = ({ titulo, imagem, texto, preco }) => {
  return (
    <div className={styles.componente}>
      <img className={styles.imagem} src={imagem} alt="" />
      <div className={styles.content}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.texto}>{texto}</p>
        <Chip label={preco}
         color="success" 
         variant="outlined" 
         sx={{
          fontSize: "1.0rem",    
          borderColor: "green",
          width:"90px" ,
          height:"26px" ,
          marginTop: "5px", 
          marginBotton: "13px",
          marginLeft:"40%", 
        }}
         />
      </div>
    </div>
  );
};
export default CardService;
