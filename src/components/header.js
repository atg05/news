import React ,{Component} from 'react';







class  Header extends React.Component{

    InputHandler(event) {
        console.log(event.target.value);

    }
    
    render(){
        return (
            <header onChange={(e)=>this.InputHandler(e)}>
                <div>Logo</div>
                <input/>
            </header>
    
    )}

}

export default Header;