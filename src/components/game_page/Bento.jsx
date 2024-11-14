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



// onClick={() => removeIngredient(madeDish.name)}




/* {madeDish.map((item, index) => (
                <div className="bento-box" key={index}>
                    <div className="content-wrapper">
                        <h2>{item.japaneseName}</h2>
                        <img src={item.img} alt={item.japaneseName} />
                        <footer>
                            <span className="english-translation">{item.name}</span>
                        </footer>
                    </div>
                </div>
            ))} */







// export default function Bento() {
//     const [droppedItems, setDroppedItems] = useState([]);

//     function handleDrop(event) {
//         const { active } = event;
//         if (!droppedItems.includes(active.id)) {
//             setDroppedItems((prevItems) => [...prevItems, active.id]);
//         }
//     }
//     const { isOver, setNodeRef } = useDroppable({
//         id: "bento-container",
//         onDrop: handleDrop,
//     });
//     return (
//         <div ref={setNodeRef} className= "bento-container">
//             {droppedItems.length > 0 ? (
//                 droppedItems.map((id) => {

//                     console.log(id);

//                 })
//             ) : (
//                 <p>Drag food items here!</p>
//             )}
//         </div>
//     )
// }

/* <div className="bento-container">
                {dishes.map((item, index) => (
                    <div className="bento-box" key={index}>
                        <div className="content-wrapper">
                            <h2>{item.japaneseName}</h2>
                            <img src={item.img} alt={item.japaneseName} />
                            <footer>
                                <span className="english-translation">{item.name}</span>
                            </footer>
                        </div>
                    </div>
                ))}
            </div> */