import React from "react"
import { ReactDOM } from "react"
import "../stylesheets/projects.css"

export function Project({ title, img, desc, date, isImportant, update_link }) {
	return (
		<div className="project-container">
			<img 
				className="project-image"
				src={require(`../images/${img}.PNG`)}
				alt="Project 1 Photo"/>
			<div className="project-text">
				<p className="project-title">{title}</p> 
				<p className="project-description">{desc}</p>
				<p className="project-date" onClick={update_link}>{date}</p>
				<a href="https://github.com/LaurinBrechter" className={isImportant ? "important-link": "unimportant-link"}>Nice</a>
			</div>
		</div>
	);
}


// 
// A Nice project about bayesian data Analysis
// 2020-10-10