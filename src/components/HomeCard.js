import React , {useState} from 'react'
import cardDataImport from './cardData'
import { NavLink } from 'react-router-dom'
import "./../css/Home.css"

export default function HomeCard() {
    const [cardData, setCardData] = useState(cardDataImport);

    return (
        <div className="container mt-4">
            <div className="row">
                {cardData ?
                    cardData.map(data => {
                        return (
                            <div className="col-md-4" key={data.front.title}>
                                <NavLink to={data.link}>
                                    <Card  data={data} />
                                </NavLink>
                            </div>
                        )
                    })
                    : "loading"
                }
            </div>
        </div>
    )
}


function Card({ data }) {
    return (
        <div className="container-card">
            <div className="front side">
                <div className="content">
                    <h1>{data.front.title}</h1>
                    <p>{data.front.description}</p>
                </div>
            </div>
            <div className="back side">
                <div className="content">
                    <h1>{data.back.title}</h1>
                    <p>{data.back.description}</p>
                </div>
            </div>

        </div>
    )
}
