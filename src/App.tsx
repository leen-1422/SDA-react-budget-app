import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './compnent/Income';
import Expense from './compnent/Expense';
import Target from './compnent/Target';
import Saving from './compnent/Saving';
import { Route, Routes } from 'react-router-dom';
import Budget from './compnent/pages/Budget';
import { IconButton } from '@mui/material';



export interface Data {
  income: string;
  amount: number;
  date: string;
}

function App() {
  const [userIncome,setUserIncome] = useState({income:"", amount:0, date:""})
  const [userInformationList, setUserInformationList] = useState <{income:string, amount:number, date:string}[]> ([])
  
  const [userInput,setUserInput] = useState ({expense:"", amount:0, date:""})
  const [userExpense, setUserExpense] = useState<{expense:string, amount:number, date:string}[]>([])
  
  const [savingInput, setSavingInput]= useState<number>();
  const [targetInput, setTargetInput]= useState<number>();

  const [balance, setBalance] = React.useState(0);
  const [progress, setProgress] = React.useState(0);



  const calculateBalance = (): void => {
    const incomeAmount = userInformationList.reduce((total, info) => total + info.amount, 0);
    const expenseAmount = userExpense.reduce((total, info) => total + info.amount, 0);
    const savingAmount = savingInput || 0; 
    const calculatedBalance = incomeAmount - expenseAmount - savingAmount;
    setBalance(calculatedBalance);
  };
  useEffect(calculateBalance, [userInformationList, userExpense, savingInput]);
  

  const calculateProgress = (): void => {
    const targetAmount = targetInput || 0;
    const savingAmount = savingInput || 0; 
    const calculatedProgress = (savingAmount / targetAmount || 0 ) *100 ; 
    setProgress(calculatedProgress);
  };
  useEffect(calculateProgress, [savingInput, targetInput]); 



  
  return (
    <div className="App">
      <Income setUserIncome={setUserIncome} income={userIncome} userInformationList={userInformationList} setUserInformationList={setUserInformationList} balance={calculateBalance}/>
      <Expense setUserInput={setUserInput} expense={userInput} userExpense={userExpense} setUserExpense={setUserExpense} balance={calculateBalance}/>
      <Target saving= {savingInput} setTargetInput={setTargetInput} target={targetInput} progress={progress} />
      <Saving setSavingInput={setSavingInput} saving={savingInput} balance={balance}  />


      <Routes>
        <Route path="/budget-app" element={<Budget />}>

          
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
