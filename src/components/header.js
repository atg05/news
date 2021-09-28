import React ,{useState} from 'react';



const Header = (props) =>{

    let [count,setCount] = useState(0);
    return(
        <header>
            <div className="logo">Logo</div>
            <input onChange={props.keywords}  />
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Add One</button>
            <button onClick={()=>setCount(0)}>RESET</button>
            <button onClick={()=>setCount(count-1)}>Minus One</button>
            
        </header>
    )
}

export default Header;