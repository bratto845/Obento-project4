import './DishDetails.css'
import { useLocation } from 'react-router-dom'
import data from '../game_page/data.json'
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

let dishes = data[1]

export default function DishDetails() {

    const location = useLocation()
    const selectedDish = location.state?.selectedDish
    let createdDish = dishes.find(dish => dish.name === selectedDish)
    console.log(createdDish);

    const [confettiVisible, setConfettiVisible] = useState(false);

    useEffect(() => {
        setConfettiVisible(true);

        setTimeout(() => {
            setConfettiVisible(false);
        }, 50000);
    }, []);

    return (

        <div className="final-page-container">
             <div className="final-page-overlay"></div>
            {confettiVisible && <Confetti numberOfPieces={500}
                gravity={0.1} />}
            <div className="final-page-header">
                <h1>おめでとうございます </h1>
                <h4>You made {createdDish.name}</h4>
                <Link to="/menu"><button className='button-85'>Play again?</button></Link>
            </div>
            <div className="finished-dish">
                <div className="final-bento-box" key={dishes.id}>
                    <div className="final-content-wrapper">
 
                        <img src={createdDish.img} alt={dishes.japaneseName} />
                    </div>
                </div>
            </div>
        </div>

    )
}