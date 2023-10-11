

import { type } from 'os'
import { title } from 'process'
import React,{ChangeEvent} from 'react'
import {useState} from 'react'

export default function Income() {

  // type TodoList ={
  //   taskName: string;
  //   deadline: number | undefined;
  //   date: string|undefined
  // }


    
    // const  [title, setTitle] = useState <string> ("")
    // const  [task, setTask] = useState <number> ()
    // const  [date, setDate] = useState <string> ()

    const [userInput,setUserInput] = useState({income:"", amount:0, date:""})
    const [userInformationList, setUserInformationList] = useState <{income:string, amount:number, date:string}[]> ([])


    function getUserIncome(event: React.ChangeEvent<HTMLInputElement>){
      setUserInput({ ...userInput, income: event.target.value });
      
      };
    function getUserAmount(event: React.ChangeEvent<HTMLInputElement>){
      setUserInput({ ...userInput, amount:Number(event.target.value)}); 
      };

    function getUserDate(event:React.ChangeEvent<HTMLInputElement>){
      setUserInput({...userInput, date: event.target.value})
    }

    function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      setUserInformationList([...userInformationList,userInput]);
      setUserInput({ ...userInput, income: "" , amount:0, date:""})


    }


      

    


    // const handleChange =(event: ChangeEvent<HTMLInputElement>):void => {
    //   if(event.target.name === "title"){
    //     setTitle(event.target.value)
    //   }if(event.target.name === "task"){
    //     setTask(Number(event.target.value))
    //   }else{
    //     setDate(event.target.value)

    //   }
    // };
    
    // const addTask = ():void =>{
    //   const newTask = {taskName: title, deadline:task, date:date}
    //   setTodoList([...todolist,newTask]);
    //   console.log(todolist)


    // }

  

  return (
    
    
    <div>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="">inome source</label> <br />
            <input type="text" onChange={getUserIncome} value={userInput.income}  /> <br />

            <label htmlFor="">amount of income</label> <br />
            <input type="number" onChange={getUserAmount} value={userInput.amount}/> <br />

            <label htmlFor="">date of income</label> <br />
            <input type="date"  onChange={getUserDate} value={userInput.date} /> <br />
            <button >add income</button> 

        </form>
        
        

        <div>
        {userInformationList.map((user)=> {
          return(
            <li> {user.income}: {user.amount} EUR on {user.date} </li>

          ) })}
          
        </div>

    </div>
  )
}
