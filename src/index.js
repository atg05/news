import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';


class App extends React.Component{

    state={
        news:JSON,
        filtered:JSON,
        
    }
    getKeywords=(event)=>{
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords)>-1;
        });
        this.setState({
            filtered:filtered
        });

        
    }

    render(){
        //using alias
        const {news,filtered}=this.state;
        
    
    return(
        
            <div>
                <Header keywords={this.getKeywords}/>  
                <NewsList news={filtered}/>                
            </div>
    )}
}

ReactDOM.render(<App/>,document.getElementById('root'));