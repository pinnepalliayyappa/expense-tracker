import React from 'react';
import './Expenseitem.css';
import Expensedate from './expensedate';
import Card from '../UI/card';
function Expenseitem(props){
    //const expensedate = new Date(2021,2,28);
    //const expensetitle = 'car insurance';
    //const month = props.date.toLocaleString('en-US',{month:'long'});
    //const day = props.date.toLocaleString('en-US',{month:'2-digit'});
    //const year = props.date.getFullYear();

    return(
        <Card className='expense-item'>
            <Expensedate date={props.date}></Expensedate>
        <div className='expense-item__description'>
            <h2>
                {props.title}
            </h2>
            <div className='expense-item__price'>
                {props.amount}
            </div>
        </div>
        </Card>

    );
}
export default Expenseitem;