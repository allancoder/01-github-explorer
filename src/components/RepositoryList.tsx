import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
	name: string;
	description: string;
	html_url: string;
}

import Logo from '../assets/images/logo_github.png';

export function RepositoryList() {
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const [organization, setOrganization] = useState('');

	// useEffect(() => {
	// 	fetch(`https://api.github.com/orgs/${organization}/repos`)
	// 		.then(response => response.json())
	// 		.then(data => setRepositories(data));
	// }, []);

	function findOranization(event: any) {
		fetch(`https://api.github.com/orgs/${organization}/repos`)
			.then(response => response.json())
			.then(data => setRepositories(data));
		event.preventDefault();
	}

	return (
		<section className="repository-list">
			<div className="brand">
				<img src={Logo} alt="logo do github" width="64"/>
				<h1>Github Explorer</h1>
			</div>

			<form className="form">
				<h2>Find an organization's repositories</h2>
				<div className="search">
					<input type="text" value={organization} onChange={(event) => setOrganization(event.target.value)} placeholder="Type an organization's name, Ex: google" />
					<button type="submit" onClick={findOranization}>Search</button>
				</div>
			</form>

			{
				organization ?
				<ul>
					{repositories.map(repository => {
						return <RepositoryItem key={repository.name} repository={repository}/>
					})}
				</ul>
				:
				<div className="not-found">
					<h2>Nothing found</h2>
				</div>
			}
		</section>
	);
}
