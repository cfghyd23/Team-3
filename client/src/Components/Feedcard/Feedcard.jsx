import React from 'react'
import './Feedcard.css'

const cardStyle = {
    width: '40rem'
}

const Feedcard = (props) => {

    return (
        <div>
            <div className="card my-3" style={cardStyle}>

                <div className="card-body">
                    <p className="btn btn-primary">{props.tags}</p>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}


export default Feedcard
