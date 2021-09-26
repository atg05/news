import React ,{ Component } from 'react';
import JSON from '../db.json';


class  Header extends Component{ 
    state ={
        keywords:'',
    }
    inputchangehandler=(event)=>{
        this.setState({
            keywords:event.target.value})

    }
    
    
    render(){
        console.log(JSON);
        return (
            <header >
            
                <div>Logo</div>
                <input onChange={this.inputchangehandler}/>
                <div>{this.state.keywords}</div>

            </header>
    
    )}

}

export default Header;