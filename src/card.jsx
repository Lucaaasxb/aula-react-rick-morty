import react from 'react'
import './card.css'

function card(props) {
    return (
        <>
            <div className='card'>
                <h2>{props.info.nome}</h2>
                <img src={props.info.foto} />
            </div>
        </>
    )
}

export default card