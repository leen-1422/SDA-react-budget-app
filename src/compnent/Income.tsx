

import { type } from 'os'
import { title } from 'process'
import React,{ChangeEvent} from 'react'
import {useState} from 'react'


type Prop ={
  income:{
    income: string;
    amount: number;
    date: string; }
   ob: React.Dispatch<React.SetStateAction<{
      income: string,
      amount: number;
      date: string,
  }>>

  a: {
    income: string;
    amount: number;
    date: string;
}[]
b: React.Dispatch<React.SetStateAction<{
  income: string;
  amount: number;
  date: string;
}[]>>
balance: () => void
}
  



export default function Income(props:Prop) {

    
    // const [userInformationList, setUserInformationList] = useState <{income:string, amount:number, date:string}[]> ([])


    function getUserIncome(event: React.ChangeEvent<HTMLInputElement>){
      props.ob({ ...props.income, income: event.target.value });
      
      };
    function getUserAmount(event: React.ChangeEvent<HTMLInputElement>){
      props.ob({ ...props.income, amount:Number(event.target.value)}); 
      };

    function getUserDate(event:React.ChangeEvent<HTMLInputElement>){
      props.ob({...props.income, date: event.target.value})
    }

    function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      props.b([...props.a, props.income]);
      props.balance();
      props.ob({ ...props.income, income: "", amount: 0, date: "" });
    }



    




  

  return (
    
    
    <div>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="">inome source</label> <br />
            <input type="text" onChange={getUserIncome} value={props.income.income}  /> <br />
            

            <label htmlFor="">amount of income</label> <br />
            <input type="number" onChange={getUserAmount} value={props.income.amount} placeholder='amount'/> <br />

            <label htmlFor="">date of income</label> <br />
            <input type="date"  onChange={getUserDate} value={props.income.date} /> <br />
            <button >add income</button> 

        </form>
        
        

        <div>
        {props.a.map((user)=> {
          return(
            <li> {user.income}: {user.amount} EUR on {user.date} <button >delete</button> </li>

          ) })}
          
        </div>

    </div>
  )
}
