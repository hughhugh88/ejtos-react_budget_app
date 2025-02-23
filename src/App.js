import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <ExpenseList />
                    </div>
                    {/* <div className='col'>
                        <ExpenseItem />
                    </div> */}
                </div>
                <div className='row'>
                    <div className='col'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
