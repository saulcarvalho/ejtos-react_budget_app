import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleEditBudget = (e)=>{
        if(e.target.value < totalExpenses) alert("Amount lower than the amount spent so far!")
        else if (e.target.value > 20000) alert("Maximum budget allowed is 20.000!")
        else dispatch({type: "SET_BUDGET", payload: e.target.value})        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span><input type="number" step={10} value={budget} onChange={handleEditBudget}/>
        </div>
    );
};
export default Budget;