import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import Allocation from './components/AllocationForm';
import {AppProvider} from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 classsName='mt-3'>
                    Budgeted Planing List
                </h1>
                <div className='row mt-3'>
                    { <Budget/>}
                    { <Remaining/>}
                    { <ExpenseTotal/>}
                    { <ExpenseList/>}
                    { <ExpenseItem/>}
                    { <Allocation/>}
                </div>
            </div>
        </AppProvider>
        
    );
};
export default App;
