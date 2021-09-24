import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const App =() =>{
    const item="Avinash";
    return(
        <div>
            <Header/>           
                 
        </div>

    )
}

ReactDOM.render(<App/>,document.getElementById('root'));