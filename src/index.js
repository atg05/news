import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';


const App =() =>{
    
    return(
        <div>
            <Header/>  
            <NewsList news={JSON}/>                
        </div>

    )
}

ReactDOM.render(<App/>,document.getElementById('root'));