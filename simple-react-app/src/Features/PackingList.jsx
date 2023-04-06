function Item({ name, isPacked }) {
	return (
		<li>
			{name} {isPacked && "YES"}
		</li>
	);
}

export default function PackingList() {
	return (
		<ul>
			<Item name="Box" isPacked={true} />
			<Item isPacked={false} name="Photo of Tam" />
			<Item isPacked={true} name="Helmet with a golden leaf" />
		</ul>
	);
}
