import React, { useContext } from 'react';
import { TiDelete } from ' react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) =>{
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_REXPENSE',
            payload: props.id
        });
    };
    const increaseAllocation = (name) => {
        const expense ={

            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    return (
        <tr>
            <td>[props.name]</td>
            <td>[props.cost]</td>
            <td><button onClick={Event=> increaseAllocation(props.name)}>+</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
};
export default ExpenseItem;