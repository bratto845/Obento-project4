import './FinalDish.css'

export default function FinalDish({ dishes, dishName }) {
    const matchedDish = dishes.find(dish => dish.name === dishName)
    

    return (
        <div className="bento-box" key={matchedDish.id}>
            <div className="content-wrapper">
                <h2>{matchedDish.japaneseName}</h2>
                <img src={matchedDish.img} alt={matchedDish.japaneseName} />
            
            </div>
        </div>
    )

}