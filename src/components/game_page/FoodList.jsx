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













// export default function FoodList({ foodItems }) {
//     return (
//         <div className="food-item-list">
//             {foodItems.map((item) => (
//                 <FoodCard key={item.id} item={item} />
//             ))}
//         </div>
//     );
// }

// const FoodCard = ({ item }) => {
//     const { id, japaneseName, img, name } = item;
//     const { attributes, listeners, setNodeRef, transform } = useDraggable({
//         id: id
//     });

//     console.log('Transform:', transform, id);

//     const style = {
//         transform: transform ? CSS.Translate.toString(transform) : undefined,
//         transition: transform ? 'transform 0.2s ease' : undefined,
//     };

//     return (
//         <div
//             ref={setNodeRef}
//             {...attributes}
//             {...listeners}
//             id={id}
//             className="food-item"
//             style={style}
//         >
//             <header>
//                 <h4>{japaneseName}</h4>
//             </header>
//             <img src={img} alt={name} />
//             <footer>
//                 <span className="english-translation">{name}</span>
//             </footer>
//         </div>
//     );
// };
