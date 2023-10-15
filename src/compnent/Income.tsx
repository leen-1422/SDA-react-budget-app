
import React,{ChangeEvent} from 'react'
import { Box, Button, IconButton, TextField } from '@mui/material';
type Prop ={
  income:{
    income: string;
    amount: number;
    date: string; }
    setUserIncome: React.Dispatch<React.SetStateAction<{
      income: string,
      amount: number;
      date: string,
  }>>

  userInformationList: {
    income: string;
    amount: number;
    date: string;
}[]
setUserInformationList: React.Dispatch<React.SetStateAction<{
  income: string;
  amount: number;
  date: string;
}[]>>
balance: () => void
}
export default function Income(props:Prop) {
    function getUserIncome(event: React.ChangeEvent<HTMLInputElement>){
      props.setUserIncome({ ...props.income, income: event.target.value });
      
      };
    function getUserAmount(event: React.ChangeEvent<HTMLInputElement>){
      props.setUserIncome({ ...props.income, amount:Number(event.target.value)}); 
      };

    function getUserDate(event:React.ChangeEvent<HTMLInputElement>){
      props.setUserIncome({...props.income, date: event.target.value})
    }

    function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      props.setUserInformationList([...props.userInformationList, props.income]);
      props.balance();
      props.setUserIncome({ ...props.income, income: "", amount: 0, date: "" });
    }


    const deleteByValue = (value: {
      income: string,
      amount: number,
      date: string
    })  => {
      props.setUserInformationList(oldValues => {
        return oldValues.filter( user => user !== value)
      })
    }

  return (
    
    
    <div>
        <form onSubmit={onSubmitHandler} className="income-form">
            <label htmlFor="expense-source"> <br />
            <input type="text" id="expense-source" onChange={getUserIncome} value={props.income.income}  /> <br />
            </label> 
            
            

            <label htmlFor="amount-source">amount of income  <br />
            <input type="number" id="amount-source" onChange={getUserAmount} value={props.income.amount} placeholder='amount'/> <br />
            </label> 
           

            <label htmlFor="date-source">date of income <br />
            <input type="date" id='date-source' onChange={getUserDate} value={props.income.date} /> <br />
            </label> <br />
            
            <button  >add income</button> 

        </form>

        

        <div>
        {props.userInformationList.map((user,index)=> {
          return(
            <li key={`income-${index}`}> {user.income}: {user.amount} EUR on {user.date} <Button onClick={() => deleteByValue(user)} 
            variant="outlined" color="error" size="small" >X</Button> 
            </li>

          ) })}




          
        </div>

    </div>
  )
}
