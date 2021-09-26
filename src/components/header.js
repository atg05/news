import React ,{ Component } from 'react';



class  Header extends Component{ 
    state ={
        keywords:'',
    }
    inputchangehandler=(event)=>{
        this.setState({
            keywords:event.target.value})

    }
    
    
    render(){
        
        return (
            <header >
            
                <div>Logo</div>
                <input onChange={this.inputchangehandler}/>
                <div>{this.state.keywords}</div>

            </header>
    
    )}

}

export default Header;