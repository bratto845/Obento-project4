import Bento from "./Bento";
import FoodList from "./FoodList";
import React from "react";
import './GamePage.css'
import { useState } from "react";
import ingredientsCollector from "./ingredientsCollector";
import FinalDish from "./FinalDish";
import data from './data.json'
import Prompt from "./Prompt";
const [foodItemsData, dishes] = data
import { useLocation } from "react-router-dom";

export default function GamePage() {
    const [madeDish, setMadeDish] = useState([])
    const [foodItems, setFoodItems] = useState(foodItemsData)
    const [clickedItem, setClickedItem] = useState('')
    const [currentStep, setCurrentStep] = useState(0)
   

    const location = useLocation()
    const selectedDish = location.state?.selectedDish

    function addIngredient(ingredient) {
        setMadeDish([ingredient, ...madeDish])
        let clickedItemRemoved = foodItems.filter(ing => ing !== ingredient)
        setFoodItems(clickedItemRemoved)
        setClickedItem(ingredient.name)
       
    }
    function checkMatch(madeDish) {
        return ingredientsCollector(madeDish)
    }
    function removeIngredient(madeDishId) {
        let reclickedItemRemoved = madeDish.filter(ing => ing.id !== madeDishId);
        setMadeDish(reclickedItemRemoved);
        let replaceIngredient = madeDish.filter(ing => ing.id === madeDishId)
        console.log(replaceIngredient);
        setFoodItems([replaceIngredient[0], ...foodItems])
    }
    

    return (
        <div className="game-page">
            <Prompt clickedItem={clickedItem} selectedDish={selectedDish} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <div className="main-game-container">             
                <section className="word-list">
                    <FoodList addIngredient={addIngredient} foodItems={foodItems} />
                </section>
                <section className="madeDish">
                    {checkMatch(madeDish) ? (
                        <FinalDish dishes={dishes} dishName={checkMatch(madeDish)} />
                    ) : (
                        <Bento madeDish={madeDish} removeIngredient={removeIngredient}/>
                    )}
                </section>
            </div>
        </div>
    )
}

