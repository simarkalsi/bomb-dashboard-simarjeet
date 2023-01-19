import React from 'react'
import './dashboard.css'
import Summary from './components/summary/Summary'
import Box1 from './components/box1/Box1'
import BOX2 from './components/box2/Box2'
import BOX3 from './components/box3/Box3'

export default function Dashboard() {
  return (
    <>

    <div className='main' style={{background:'radial-gradient(circle, rgba(37,150,190,1) 0%, rgb(12, 16, 29) 55%)'}}>
        <div className='mainChild1' style={{margin: '0px 150px' , padding:'20px'}}>
            <Summary/>
            <Box1/>
            <BOX2/>
            <BOX3/>
        </div>
    </div>
    </>
  )
}
