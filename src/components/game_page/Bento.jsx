import './Bento.css'

export default function Bento({ madeDish, removeIngredient }) {

    return (
        <>
            <div className="bento-container">
                    {madeDish.map((item, index) => {
                        return (
                            <div key ={index} data-idx={item.id}  onClick={() => removeIngredient(item.id)} className='ingredient'>
                                <header>
                                    <h4>{item.japaneseName}</h4>
                                </header>
                                <img src={item.img} alt={item.name} />
                                <footer>
                                    <span className="english-translation">{item.name}</span>
                                </footer>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

