import React, { useContext } from 'react';
import { AppContextt } from '../context/AppContext';


    const  ExpenseItem =() => {
    const { expense } = useContext(AppContextt);

    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Allocation Budget</th>
                    <th scope='col'>Increase by 10</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {expense.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </tbody>
        </table>
    );
}
    export default ExpenseItem;