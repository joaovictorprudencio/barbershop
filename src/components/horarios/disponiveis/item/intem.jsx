import syles from './item.module.css'

const item = ({props}) => {
    return(
        <div>
          <h2>9:30-10:30</h2>
           <p>barbeiro:{props}</p>
           <p>contado: {props}</p>
        </div>
    )
}

export default item;