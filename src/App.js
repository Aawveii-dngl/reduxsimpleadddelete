import './App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'

class App extends Component {
    render(){
      return (
        <div className="App">
          <button onClick = {this.props.onAgeUp}>Age up</button>
          <span>Age:{this.props.age}</span>
          <hr/>
          <button onClick = {this.props.onAgeDown}>Age down</button>
          <div>History</div>
          <div>
            <ul>
              {
                this.props.history.map(el=>(
                  <li key = {el.id} onClick = {()=>this.props.onDelItem(el.id)}>
                    {el.age}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state =>{
  return{
    age:state.age,
    history:state.history
  }
};
const mapDispatchToProps = dispatch =>{
  return{
    onAgeUp:() => dispatch({type:'AGE_UP',value:1}),
    onAgeDown:() => dispatch({type:'AGE_DOWN',value:1}),
    onDelItem:(id) =>dispatch({type:'DEL_ITEM',key:id})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
