import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{

  // code here
  render(){
   const images=this.props;

    return(
      <div className="Container">
        {
          images.data.map(image=>(
            <img src={image.img} />
          ))
        }
      </div>
    )

  }
}