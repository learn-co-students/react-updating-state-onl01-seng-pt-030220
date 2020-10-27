// Code ClickityClick Component Here
import React from 'react'


export default class ClickityClick extends React.Component{


constructor(){

super()
this.state={

     hasBeenClicked : false,

     currentTheme: 'blue',
}
}

handleClick=()=>{

    this.setState({

        hasBeenClicked : true,
        currentTheme: 'blue',
    }, () => console.log(this.state.hasBeenClicked)) // prints false)
     

}





 render(){
     return(
         <div>
      <p>I have this state  {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
      <button  onClick={this.handleClick} >Click Me ! </button>
      </div>
      )
  }

}