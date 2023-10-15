import { type } from 'os';
import React, { useState }from 'react'

type Prop ={
  
  setTargetInput: React.Dispatch<React.SetStateAction<number | undefined>>
  saving: number | undefined
  target: number | undefined
  progress: number
  

}


export default function Target(props:Prop) {
  const [target,setTarget] = useState (0)
  // const [targetInput, setTargetInput]= useState<number>(target);


  function getUserTarget(event: React.ChangeEvent<HTMLInputElement>){
    setTarget(Number(event.target.value));
    
    
    };
    function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      console.log(target);
      props.setTargetInput(target);
      setTarget(0);
    }

  
  return (
    <div>
        <form action="" onSubmit={onSubmitHandler}  >
            <label htmlFor="target-source">set target <br />
            <input type="number" id='target-source' value={target}onChange={getUserTarget} />
            </label>
            
            <button>add</button>
            
            
        </form>

        <div>
        <p>Target: {props.target} </p>
          <p>Current Saving:{props.saving}</p>
          <p>Progress: {props.progress} %</p>

          <progress id="file"  value={props.saving }  max={props.target } ></progress>
        </div>




    </div>
  )
}
