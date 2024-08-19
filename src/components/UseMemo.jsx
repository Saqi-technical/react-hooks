import  { useMemo, useState } from 'react'

const UseMemo = () => {
    const [number, setNumber] = useState(0)
    const [show, setShow] = useState(false)

    const getValue = ()=>{
        return setNumber(number +1)
    }
    const countNumber = (num)=>{
        console.log("Number : ",num)
        for (let index = 0; index < 1000090000; index++) {}
        return num
        
    }

    
    // const checkNumber = useMemo(()=>{countNumber(number)},[])
    const checkNumber = useMemo(()=>{return  countNumber(number)},[number])
  return (
    <div className='memo-container'>
     <button onClick={getValue} >
        Counter
        </button> 
        <p>New number value : {checkNumber}</p>
        <button onClick={()=>setShow(!show)}>{show ? "You clicked me":"Click me plz"}</button>
    </div>
  )
}

export default UseMemo
