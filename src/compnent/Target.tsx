import React, { useState }from 'react'


export default function Target() {

  const [userCurrent,setUserCurrent] = useState <number> ();
  const [userTarget,setUserTarget] = useState <number> ();
  const [userProgress,setUserProgress] = useState <number> ();

  function getUserTarget(event:React.ChangeEvent<HTMLInputElement>){
    setUserTarget(Number(event.target.value))
  
  }
  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setUserTarget(userTarget);
  
  }

  
  return (
    <div>
        <form action=""  onSubmit={onSubmitHandler} >
            <label htmlFor="">set target</label>
            <input type="number" onChange={getUserTarget} />
            <button>add</button>
            
            
        </form>

        <div>
        <p>Target: </p>
          <p>Current Saving:</p>
          <p>Progress: %</p>

          <progress id="file" value="0" max="100"></progress>
        </div>




    </div>
  )
}
