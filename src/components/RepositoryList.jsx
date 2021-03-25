import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
	name: "Name of the repository",
	description: "Description of the repository",
	link: "https://github.com",
}

export function RepositoryList() {
	return (
		<section className="repository-list">
			<h1>Repository List</h1>

			<ul>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
			</ul>
		</section>
	);
}
