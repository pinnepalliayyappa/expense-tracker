import React,{ useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/expenses';

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const App=()=>{
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{return [expense,...prevExpenses];});
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;




//import Expenseitem from "./components/expenseitem";
//import Card from "./components/card";
//function App() {
  //const expenses=[
    //{ title:'car insuranse',amount: 345,date: new Date(2021,2,28)},
    //{ title:'toilet',amount: 34,date: new Date(2021,5,28)},
    //{ title:'insurance',amount: 3,date: new Date(2021,7,28)},
  //];
  //return (
    //<div>
      //<h2>Let's get started!</h2>
      //<Card classname='expenses'>
      //<Expenseitem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></Expenseitem>
      //<Expenseitem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></Expenseitem>
      //<Expenseitem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></Expenseitem>
      //</Card>

    //</div>
  //);
//}

//export default App;
