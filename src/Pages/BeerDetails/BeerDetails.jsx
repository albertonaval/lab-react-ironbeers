import { useEffect, useState } from "react"
import beerService from "../../services/beers.service"
import { Link, useParams } from 'react-router-dom'


const BeerDetails = () => {

    const [beers, setBeers] = useState([])


    const { beer_id } = useParams()
    const { image_url, name, tagline, contributed_by, first_brewed, attenuation_level, description } = beers


    useEffect(() => {
        beerService
            .getOneBeers(beer_id)
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="row">
            <div className="col-6">
                <img src={image_url} className="card-img-top" alt={name} />
                <div className='card mt-3 BeerCard'>
                    <div className="card-body">
                        <h2 className='card-title'>{name}</h2>
                        <h5 className="card-text">{tagline}</h5>
                        <p className="card-text">{contributed_by}</p>
                        <p className="card-text">{first_brewed}</p>
                        <p className="card-text">{attenuation_level}</p>
                        <p className="card-text">{description}</p>
                        <Link to={'/beers'} className="btn btn-primary">Beers</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

//TENIA QUE HABER CREADO UN COMPONENTE DE ESTO PARA HACER EL RANDOM DESPUES

export default BeerDetails
