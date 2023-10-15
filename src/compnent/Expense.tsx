import { Button } from '@mui/material';
import React, { useState } from 'react'

type Prop ={
  expense:{
    expense: string;
    amount: number;
    date: string; }
    setUserInput: React.Dispatch<React.SetStateAction<{
    expense: string;
    amount: number;
    date: string;
}>>
userExpense: {
  expense: string;
  amount: number;
  date: string;
}[]
setUserExpense: React.Dispatch<React.SetStateAction<{
  expense: string;
  amount: number;
  date: string;
}[]>>
balance: () => void

}

export default function Expense(props:Prop) {



function getUserExpense(event:React.ChangeEvent<HTMLInputElement>){
  props.setUserInput({...props.expense, expense:event.target.value})

}
function getUserAmount(event:React.ChangeEvent<HTMLInputElement>){
  props.setUserInput({...props.expense, amount:Number(event.target.value)})

}
function getUserDate(event:React.ChangeEvent<HTMLInputElement>){
  props.setUserInput({...props.expense, date:event.target.value})

}
function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
  event.preventDefault();
  props.setUserExpense([...props.userExpense,props.expense]);
  props.balance();
  props.setUserInput({ ...props.expense, expense: "" , amount:0, date:""})

}

const deleteByValue = (value: {
  expense: string,
  amount: number,
  date: string
})  => {
  props.setUserExpense(oldValues => {
    return oldValues.filter( user => user !== value)
  })
}

  return (
    <div>
        <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="expense-source">expense source <br />
        <input type="text" id='expense-source' onChange={getUserExpense} value={props.expense.expense}/> <br />
        </label> 
            

            <label htmlFor="amount-source">amount of expense   <br />
            <input type="number" id='amount-source' onChange={getUserAmount} value={props.expense.amount}/> <br />
            </label> 
            

            <label htmlFor="date-source">date of expense <br />
            <input type="date" id='date-source' onChange={getUserDate} value={props.expense.date}/> <br />

            </label><br /> 
            
            <button>add expense</button>
        </form>

        <div>
        {props.userExpense.map((user, index)=> {
          return(
            <li key={`expense-${index}`}> {user.expense}: {user.amount} EUR on {user.date}  <Button onClick={() => deleteByValue(user)} 
            variant="outlined" color="error" >X</Button> </li>

          ) })}
          
        </div>

    </div>
  )
}
