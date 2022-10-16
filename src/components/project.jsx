import React from "react"
import { ReactDOM } from "react"


export function Project() {
	return (
		<div className="project-container">
			<img 
				className="project-image"
				src={require("../images/bayes1.PNG")}
				alt="Project 1 Photo"/>
			<div className="project-text">
				<p className="project-title">Bayesian Data Analysis</p>
				<p className="project-description">A Nice project about bayesian data Analysis</p>
				<p className="project-date">2020-10-10</p>
			</div>
		</div>

	);
}

