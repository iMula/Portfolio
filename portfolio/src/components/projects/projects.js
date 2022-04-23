import React from 'react';
import "./projects.css"
import Data from "../../projects.json"


export default function projects() {
  return (
      <section className='service-component-space'>
        <div className='heading'>
          <h1 className='heading'>Projects</h1>
          <p className='heading_p'>My Recent Projects</p>
        </div>
        <div
        className="container-portfolio-container">
          <div className="portfolio_item">
            {Data.map(post => {
              return(
                <div key={post.id} className='card'>
                  <h4>{ post.name }</h4>
                  <img src={post.image} alt="" />
                  <p>{post.skills}</p>
                  <h3>{post.date}</h3>
                </div>
              )
            })}
          </div>
        </div>
       
      </section>
   
  )
}

