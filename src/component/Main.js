import React from 'react'
import { Row,Col } from 'react-bootstrap'
import BeforeCard from './BeforeCard'
import DoneCard from './DoneCard'
import DoingCard from './DoingCard'
import { useState,useEffect } from 'react'
const Main = () => {
   
    const [list,setList]=useState([])
    useEffect(() => {
      console.log('list',list)
      }, [list])
   
  return (
    <Row className='main_area'>
      <Col xs={4}><BeforeCard  list={list} setList={setList}/></Col>
      <Col xs={4}><DoingCard  list={list} setList={setList}/></Col>
      <Col xs={4}><DoneCard  list={list} setList={setList}/></Col>
    </Row>
  )
}

export default Main