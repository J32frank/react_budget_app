import React, { useContent } from 'react';
import { AppContext } from '../context/AppContext';


const ExpenseTotal = () => {
    const { expenses } = useContent(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);

    }, 0);
    return(
        <div className='alert alert-primary'>
            <span>Spent Expenses: ${totalExpenses}</span>
        </div>
    )
}
export default ExpenseTotal;