import React, {Component} from 'react';
import {Text_CN,Text_EN,Full_EN,Full_CN} from './texts'

class Toggle extends Component{
  constructor(props){
    super(props)
    this.state={
      isCN:true
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    console.log('changing away from', this.state.isCN)
    this.setState(prevState=>({isCN:!prevState.isCN}))
  }

  formatList(passage){
    let splitted = passage.split(/\r?\n/);
    return(
      <ul>
        {splitted.map((d,i)=>(<li key={i}>{d}</li>))}
      </ul>
    )
  }


  render(){
    return(
      <div>
        <button onClick={this.handleClick}></button>
        {this.state.isCN? this.formatList(Full_CN):this.formatList(Full_EN) }
      </div>
    )
  }
}

export default Toggle;
//.split(/\r?\n/)
