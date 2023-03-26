import React from 'react'
import { Card } from 'react-bootstrap'
import { useState,useEffect } from 'react'


const DoneCard = ({list,setList}) => {
    
    
    const doneCount = list.filter(
        (item) => item.done === true && item.start === true
      ).length;
      const handleDelete = (id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
      };
    return (
    <div className='list-card'>
        <div className='list_state'>
            <div className='list_name' id='done_title'>완료</div>
            <div>{doneCount}</div>
        </div>
        {list.map((item)=>{
            if(item.done === true){
                return (
                    <Card id='list-content'>
                        <div id='done-list'>{item.value}</div>
                        <button onClick={() => handleDelete(item.id)}>삭제</button>
                    </Card>
                )
            }
        })}
    </div>
  )
}

export default DoneCard