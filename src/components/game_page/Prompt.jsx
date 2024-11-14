
import './prompt.css';
import data from './prompts.json';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Prompt({ selectedDish, clickedItem, currentStep, setCurrentStep }) {
    const navigateToPage = useNavigate()
    const dish = data[selectedDish]
    const currentItem = dish[currentStep] 
    const [outPut, setOutPut] = useState(currentItem.name);
    const [error, setError] = useState("");

    useEffect(() => {
        
        const nextItem = dish[currentStep + 1]
        const isStartStep = currentItem.name === "start"
        const isFinalStep = currentItem.name === dish[dish.length - 2].name
        //const isFinalStep = currentItem.name === "finish"

        if (isStartStep) {
            setOutPut(currentItem.message)
            setTimeout(() => {
                setCurrentStep(1)
                setOutPut(nextItem.message)
            }, 4000)
        } else if (!clickedItem) {
            return;
        } else if (isFinalStep) {
            setOutPut(currentItem.message)
            setTimeout(() => {
                navigateToPage('/dish', { state: { selectedDish: selectedDish } });
            }, 2000);
        } else if (clickedItem === currentItem.name) {
            setCurrentStep(prev => prev + 1)
            setOutPut(nextItem.message)

        } else {
            setError("ちがいます。もういちど。Try again")
            setTimeout(() => setError(''), 2000)
        }
    }, [clickedItem])

    return (
        <div className="body">
            <div className="section">
                <div className="content">
                    <h2>{outPut}</h2>
                    {error && <h4 style={{color: "hotpink"}}>{error}</h4>}
                    <p>Follow the prompts above</p>
                    <p>Click on the ingredients to create the bento</p>
                </div>
            </div>
        </div>
    );
}

