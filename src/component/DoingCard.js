import React from 'react'
import { Card } from 'react-bootstrap'
import { useState,useEffect } from 'react'


const DoingCard = ({list,setList}) => {
    
    
    const doneList=(item)=>{
        const updateList = list.map((listItem)=>
        listItem ===item?{...listItem, done:true}:listItem
        );
        setList(updateList)

    }
    const doingCount = list.filter(
        (item) => item.done === false && item.start === true
      ).length;
    return (
    <div>
        <div className='list_state'>
            <div className='list_name' id='doing_title'>진행 중</div>
            <div>{doingCount}</div>

        </div>
        {list.map((item)=>{
            if(item.start === true && item.done === false){
                return (
                    <Card id='list-content'>
                        <div>{item.value}</div>
                        <button onClick={()=>doneList(item)}>완료</button>
                    </Card>
                )
            }
        })}
    </div>
  )
}

export default DoingCard