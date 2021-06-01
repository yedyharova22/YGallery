import React, { useState, useEffect } from 'react';
import Photo from './Photos';
import { Link, animateScroll as scroll } from "react-scroll";

import './Style/Search.css';

const Search = () => {
	const [photos, setPhotos] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("curated");

	const API_KEY = "563492ad6f91700001000001866f41fac99041e58edf4e03b85a1493";

	useEffect(async () => {
		fetchItems();
	}, [query]);

	const fetchItems = async () => {
		const data = await fetch(query === "curated" ?
			"https://api.pexels.com/v1/curated?per_page=60" :
			`https://api.pexels.com/v1/search?query=${query}&size=medium&locale=uk-UA&per_page=60`, {
			headers: {
				'Authorization': API_KEY,
			}
		});
		const result = await data.json();
		setPhotos(result.photos);
	}

	const getValue = (event) => {
		setSearch(event.target.value);
	}

	const getSearch = (event) => {
		event.preventDefault();
		if (search !== "")
			setQuery(search);
		setSearch("");
	}

	return (
		<React.Fragment>
			<Link
				to="section1"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
				className="upbtn"
			>
				<i class="bi bi-chevron-double-up"></i>
			</Link>

			<div className="Search">
				<form onSubmit={getSearch} className="d-flex justify-content-center input-group mb-3">
					<input placeholder="ЗНАЙТИ..."
						className="form-control" type="text"
						value={search}
						onChange={getValue}
						style={{ maxWidth: "450px" }}
					/>
					<button className="btn btn-outline-secondary shadow-none" type="submit" >
						<i class="fa fa-search"></i>
					</button>
				</form>

				{query === "curated" ? <h4>Фотографії, модеровані командою <a href="https://www.pexels.com/" alt="" target="_blank" className="link">Pexels</a></h4> : <h4>Фотографії за запитом {query}:</h4>}
				<div className="photos">
					{photos.map(photo => (
						<Photo
							key={photo.id}
							photographer={"by " + photo.photographer.toUpperCase()}
							photographer_url={photo.photographer_url}
							img={photo.src.large2x}
							url={photo.url}
							width={photo.width}
							height={photo.height}
						/>
					))}
				</div>

			</div>

		</React.Fragment>
	);
}

export default Search;