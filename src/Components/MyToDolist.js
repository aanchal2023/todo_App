import React, {useState } from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css';

function MyToDolist() {
    const [data,updateData]=useState([]);
    const [myvalue,updateValue]=useState('');
    const [index,setIndex]=useState(null)
    
    function getValue(e){
        updateValue(e.target.value)
        }
    
 const addValue=()=>
 {
    let newData=[...data,myvalue];
    updateData(newData);
    updateValue('');
 }
 function deleteValue(index)
 {
    let dummyArray = [...data];
    dummyArray.splice(index,1);
    updateData(dummyArray);
 }

 function updateElement(ind){
updateValue(data[ind]);
setIndex(ind);
 }
 function saveChanges(){
  let myarr=[...data];
  myarr[index] =myvalue;
  updateData(myarr);
  setIndex(null);
  updateValue(null)
 }
      return (
    <>
    <div className='container '>    
    <input placeholder='enter your plan'  className="form-control mt-5 ml-3 mb-5  w-50" onChange={getValue} value={myvalue} />
    <button className="btn btn-danger me-3" onClick={addValue}> Add Data </button>
    <button onClick={saveChanges} className="btn btn-danger">Save changes</button>
    {
        data.map((a,i)=> {
             return (
             <>
            <p className='border border-danger mt-4 mb-4 w-50 text-center'>{a}</p>
             <button className="btn btn-danger me-3" onClick={()=>{deleteValue(i)}}> Delete</button>
             <button className="btn btn-danger" onClick={()=>{updateElement(i)}}>Update</button>
            </>
            )
        })
    }
    </div>

    </>
  )
}

export default MyToDolist;  