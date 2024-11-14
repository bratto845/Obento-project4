import './MenuPage.css'
import data from '../game_page/data.json'
import { useNavigate } from 'react-router-dom'



export default function MenuPage() {
    const naviagteToPage = useNavigate()

 function handleDishSelect(dishName){
    
    naviagteToPage('/game-page', { state: { selectedDish: dishName } })
 }
    return (
        <>
        <div className='menu-background'>
            <div className="menu-body">
                <div className="menu-section">
                    <div className="menu-content">
                        <h2>Obento Menu</h2>
                        <p>Select the dish you would like to make </p>
                    </div>
                </div>
            </div>
           
            <div className='menu'>
                {data[1].map((dish,index) => (
                    <div onClick={() => handleDishSelect(dish.name)} key={dish.id} className={`menu-item animate-item item-${index + 1}`}>
                        <img src={dish.img} alt={dish.name} />
                        <h3>{dish.name}</h3>
                    </div>
                ))}
            </div>
        </div>
        </>

    )
}

