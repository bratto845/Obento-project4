

export default function ingredientsCollector(madeDish) {

    const ingredients = madeDish.map(item => item.name);

    let recipes = {
        "Katsu Curry": ["rice", "vegtables", "curry", "katsu"],
        "Chicken Nanban": ["rice", "fried chicken", "tarter sauce", "salad"],
        "Sushi": ["rice", "raw fish", "wasabi", "soy sauce"],
        "Yakisoba": ["noodles", "cabbage", "pork", "oyster sauce"],
        "Ramen": ["noodles", "broth", "egg", "pork"]
    }

    for(let name in recipes){
        const recipe = recipes[name]
        if (recipe.every(ingredient => ingredients.includes(ingredient))) {
            return name
        }
    }
    
    return false
}
