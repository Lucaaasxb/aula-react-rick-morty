import react from 'react'
import './card.css'

function card(props) {
    return (
        <>
            <div className='card'>
                <h2>{props.nome}</h2>
                <img src={props.foto} />
            </div>
        </>
    )
}

export default card