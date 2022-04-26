import React from "react";
import "./projects.css";
import Data from "../../projects.json";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function projects() {
  return (
    <section className="service-component-space"  id="projects ">
      <div className="heading">
        <h1 className="heading">Projects</h1>
        <p className="heading_p">My Recent Projects</p>
      </div>
      <div className="portfolio-container">
        <div className="portfolio_item">
          {Data.map((post) => {
            return (
              <div key={post.id} className="card">
                <h4 className="port-name">{post.name}</h4>
                <img src={post.image} alt="" />
                <p className="port-skill">{post.skills}</p>
                <h3 className="port-date">{post.date}</h3>
                <div className="btn-group">
             <a href={post.link} target="_blank">
               <button className="btn">Link</button>
             </a>
             <a href={post.github} target="_blank">
               <button className="btn">Github</button>
             </a>
             </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
