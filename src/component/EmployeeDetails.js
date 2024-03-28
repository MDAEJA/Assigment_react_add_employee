import React, { useEffect, useReducer, useState } from 'react'
import "../component/employeeStyle.css"
import { act } from 'react-dom/test-utils';

function EmployeeDetails() {
    const employees={
        data : 
    [{"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80,'status':'false'},
{"id":2,"first_name":"Jody","last_name":"Themann","email":"jthemann1@skyrock.com","gender":"Agender","age":29,'status':'false'},
{"id":3,"first_name":"Cece","last_name":"Carlet","email":"ccarlet2@jalbum.net","gender":"Male","age":69,'status':'false'},
{"id":4,"first_name":"Elton","last_name":"Allinson","email":"eallinson3@jugem.jp","gender":"Male","age":31,'status':'false'},
{"id":5,"first_name":"Garvy","last_name":"Shaddick","email":"gshaddick4@rediff.com","gender":"Male","age":32,'status':'false'},
{"id":6,"first_name":"Fin","last_name":"Realy","email":"frealy5@unc.edu","gender":"Male","age":26,'status':'false'},
{"id":7,"first_name":"Minnaminnie","last_name":"Fransseni","email":"mfransseni6@aboutads.info","gender":"Agender","age":52,'status':'false'},
{"id":8,"first_name":"Fernando","last_name":"Pagon","email":"fpagon7@blogs.com","gender":"Male","age":40,'status':'false'},
{"id":9,"first_name":"Tiphanie","last_name":"Fenny","email":"tfenny8@sakura.ne.jp","gender":"Female","age":52,'status':'false'},
{"id":10,"first_name":"Nerti","last_name":"Try","email":"ntry9@shareasale.com","gender":"Female","age":43,'status':'false'},
{"id":11,"first_name":"Abagael","last_name":"Beadell","email":"abeadella@unc.edu","gender":"Female","age":76,'status':'false'},
{"id":12,"first_name":"Morten","last_name":"McNamee","email":"mmcnameeb@sun.com","gender":"Male","age":38,'status':'false'},
{"id":13,"first_name":"Domenico","last_name":"Shearman","email":"dshearmanc@seesaa.net","gender":"Male","age":66,'status':'false'},
{"id":14,"first_name":"Rodolphe","last_name":"Bittlestone","email":"rbittlestoned@51.la","gender":"Male","age":33,'status':'false'},
{"id":15,"first_name":"Merv","last_name":"Watterson","email":"mwattersone@storify.com","gender":"Male","age":37,'status':'false'},
    ]
}
const[setdata,setData] = useState([]);
const[showStatus,setStatus] = useState("No Employe is added in the Team");

const reduce = (state,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
         return {
          data : state.data.map((item,index)=>{
            setStatus("");
            if(item.id === action.payload){
              setData(preData=>[...preData,item])
              console.log(setdata)
              
              return{...item,status:item.status = 'true'};
            }
            else{
              return item;
            }
          })
         }
         case 'REMOVE_ITEM' :

         return {
          data : state.data.map((item,index)=>{
            if(item.id === action.payload){
              alert("Back to Employee");
              return{...item,status:item.status = 'false'};
            }
            else{
              return item;
            }
          })
         }

            default :
            return state;
    }
}

const[state,dispatch] = useReducer(reduce,employees);
const employeeAdd = (emp_id)=>{
    dispatch({type:'ADD_ITEM',payload:emp_id})
}
const deleteEmployee = (emp_id)=>{
  
  let remaning_data = setdata.filter((item)=>{
       return item.id !== emp_id;
      })
      setData(remaning_data);
      alert("Employee is deleted from Team")
  dispatch({type:'REMOVE_ITEM',payload:emp_id})
}

useEffect(()=>{
  const sortedData = [...setdata].sort((a,b)=>a.age-b.age);
  setData(sortedData);
  console.log("sorted")
},[state])


  return (
   <>
   <div className='main-div'>
    <div className='employee-div'>
      <h1 style={{textDecoration:'underline',color:'white'}}>Employee</h1>

      {
        state.data.map((item,index)=>{
            return  <div   className={(item.status === 'true') ?'employee-add-disable':'employee-add'} key={index}>
            <div><h3>{item.first_name}{" "}{item.last_name}</h3></div>
            <div><h3>{item.age}</h3></div>
            <button disabled = {item.status === 'true'}  onClick={()=>{employeeAdd(item.id)}} style={{padding:'2px 5px',borderRadius:"5px",backgroundColor:'rgb(231, 96, 12)',color:'whitesmoke',cursor:"pointer"}}>ADD</button>
    
          </div>
            
        })
      }
    </div>

    <div className='team-div'>
      <h1 style={{textDecoration:'underline',color:'white'}}>Team</h1>
      <div><h3>{showStatus}</h3></div>
      {
        setdata.map((item,index)=>{
            //  if(item.status === "true"){
              return  <div className='team-add' key={index}>
               
            <div><h3>{item.first_name}{" "}{item.last_name}</h3></div>
            <div><h3>{item.age}</h3></div>
            <button onClick={()=>{deleteEmployee(item.id)}}  style={{padding:'2px 5px',borderRadius:"5px",backgroundColor:'rgb(231, 96, 12)',color:'whitesmoke',cursor:"pointer"}}>REMOVE</button>
    
          </div>
            //  } 
        })
      }

     
    </div>
   </div>
   </>
  )
}

export default EmployeeDetails
