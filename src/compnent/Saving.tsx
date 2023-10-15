import React,{useState} from 'react'
import { Data } from '../App';
import { Console } from 'console';
type Prop = {
  setSavingInput: React.Dispatch<React.SetStateAction<number | undefined>>
  saving: number | undefined;
  balance: number; 
  
};




export default function Saving(props:Prop) {

  const  [saving,setSaving] = useState (0)
  const [savingInput, setSavingInput]= useState<number>();


  function getUserSaving(event: React.ChangeEvent<HTMLInputElement>){
    setSaving(Number(event.target.value));
    };

    function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const updatedSaving = (savingInput ?? 0) + saving;
      setSaving(updatedSaving);
      props.setSavingInput(updatedSaving);
    
      console.log(updatedSaving);
    
      setSavingInput(updatedSaving);
      setSaving(0);
    }
  return (
    <div>
        <h3>current balance:{props.balance}</h3>
        <form action=""onSubmit={onSubmitHandler} >
            <label htmlFor="saving-source">Transfer to saving account<br />
            <input type="number" id='saving-source' onChange={getUserSaving}  value={saving}/>
            </label>
            
            <button>Transfer</button>
        </form>

        

    </div>
  )
}
