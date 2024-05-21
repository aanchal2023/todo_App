import React, { useState } from 'react'
import { addTodos } from './store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function NewTodoList() {
  const dataList=useSelector(state=>state.todo)
  const dispatch=useDispatch()
    const [val,setVal] =useState('');

    function changeHandler(e){
        setVal(e.target.value)
    }
    function addData(){
dispatch(addTodos(val))
    }
  return (
    <>
    <input placeholder='enter your todos' onChange={changeHandler } value={val}/>
    <button onClick={addData}>Add data</button>
    {
      dataList && dataList.map((a,b)=>{
        return(
          <> 
          <h1>{a}</h1>
          </>
        )
      })
    }
    </>
  )
}

export default NewTodoList;