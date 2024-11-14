import './FoodList.css'



export default function FoodList({ addIngredient, foodItems }) {
   

    return (
        <div className='food-item-list'>
        {foodItems.map(item => (
                <div key={item.id} data-idx={item.id} onClick={() => addIngredient(item)} className="food-item">
                    <header>
                        <h4>{item.japaneseName}</h4>
                    </header>
                    <img src={item.img} alt={item.name} />
                    <footer>
                        <span className="english-translation">{item.name}</span>
                    </footer>
                </div>
        ))}
        </div>
    )

}



