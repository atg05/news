import React from "react";

const newslist=(props)=>{

    const news=props.news.map((item)=>(
        <div key={item.id} className="news_item">
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
        ))

        return(
            
            <>
                {news}
            </>
        )

}

export default newslist;