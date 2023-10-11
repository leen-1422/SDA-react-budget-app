import React, { useState } from 'react'

export default function Expense() {
const [userInput,setUserInput] = useState ({expense:"", amount:0, date:""})
const [userInformationList, setUserInformationList] = useState<{expense:string, amount:number, date:string}[]>([])

function getUserExpense(event:React.ChangeEvent<HTMLInputElement>){
  setUserInput({...userInput, expense:event?.target.value})

}
function getUserAmount(event:React.ChangeEvent<HTMLInputElement>){
  setUserInput({...userInput, amount:Number(event.target.value)})

}
function getUserDate(event:React.ChangeEvent<HTMLInputElement>){
  setUserInput({...userInput, date:event.target.value})

}
function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
  event.preventDefault();
  setUserInformationList([...userInformationList,userInput]);
  setUserInput({ ...userInput, expense: "" , amount:0, date:""})

}

  return (
    <div>
        <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">expense source</label> <br />
            <input type="text" onChange={getUserExpense} value={userInput.expense}/> <br />

            <label htmlFor="">amount of expense</label> <br />
            <input type="number" onChange={getUserAmount} value={userInput.amount}/> <br />

            <label htmlFor="">date of expense</label> <br />
            <input type="date" onChange={getUserDate} value={userInput.date}/> <br />

            <button>add expense</button>
        </form>

        <div>
        {userInformationList.map((user)=> {
          return(
            <li> {user.expense}: {user.amount} EUR on {user.date} </li>

          ) })}
          
        </div>

    </div>
  )
}
