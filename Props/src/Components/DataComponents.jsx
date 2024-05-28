import React from 'react'
import elephant from "../images/elephant.jpeg";
import App from '../App'
import AppClass from '../AppClass';

    let imageData = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]


function DataComponent() {
  return (
    <div>
        <h1>Kalvium Gallery</h1>
      <App data={imageData}/>
      <AppClass data={imageData}/>
    </div>
  )
}

export default DataComponent