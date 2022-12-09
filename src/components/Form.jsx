import { useState } from 'react'

function Form({ setFlashCard }) {
    const [name,setname]=useState({
        a:'',
        b:''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        setFlashCard({
            word:name.a,
            persianEquivalent:name.b
        })
        name.a='';
        name.b='';
        
    }
    const handlechange1=(e)=>{
        name.a=e.target.value;
        setname({...name})
    }
    const handlechange2=(e)=>{
        name.b=e.target.value;
        setname({...name})
    }
    
    
  return (
    <form onSubmit={handlesubmit}>
      <input
        id="word-input"
        placeholder="کلمه"
        value={name.a}
        onChange={handlechange1}
      />
      <input
        id="persian-equivalent-input"
        placeholder="معادل فارسی"
        value={name.b}
        onChange={handlechange2}
      />
      <button id="submit-btn">ثبت</button>
    </form>
  )
}

export default Form
