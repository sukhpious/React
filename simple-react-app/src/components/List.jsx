import { people } from "../data";
import { getImageUrl } from "../utils/utils";

export default function List() {
	return (
		<ul>
			{people.map((person) => {
				return (
					<li key={person.id}>
						<h1>Scientists</h1>
						<img src={getImageUrl(person)} alt={person.name} />
						<p>
							<b>{person.name}:</b>
							{" " + person.profession + " "}
							known for {person.accomplishment}
						</p>
					</li>
				);
			})}
		</ul>
	);
}
