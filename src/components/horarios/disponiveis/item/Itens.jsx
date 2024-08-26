import styles from './item.module.css'

const Item = ({Horario}) => {

    if(!Horario){
        return <h1>carregando....</h1>
    }
    return(
        <div className={styles.item}>
           <h2 className={styles.data}>{Horario.HorarioFinal} - {Horario.HorarioFinal}</h2>
           <p className={styles.dado}> nome: {Horario.nome}</p>
           <p className={styles.dado}>contato: {Horario.contato}</p>
        </div>
    )
}

export default Item;