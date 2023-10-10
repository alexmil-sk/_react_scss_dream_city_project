/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import "./SearchComponentRu.scss";

function SearchComponentRu({ titleQuery, objLocationQuery }) {
	const [searchTitleValue, setSearchTitleValue] = useState(titleQuery);
	const [searchLocationValue, setSearchLocationValue] = useState(objLocationQuery);

	const [, setSearchParams] = useSearchParams();

	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;

		const queryTitle = form.search_title.value;
		const objLocationQuery = form.search_location.value;

		let params = { title: queryTitle };

		if (objLocationQuery) params = { ...params, location: objLocationQuery };

		setSearchParams(params);
	}

	function clearSearch(e) {
		e.preventDefault();
		setSearchTitleValue("");
		setSearchLocationValue("");
		setSearchParams({});
	}

	useEffect(() => {
		setSearchTitleValue(titleQuery);
		setSearchLocationValue(objLocationQuery);
	}, [objLocationQuery, titleQuery]);

	return (
		<div className="search">
			<div className="search__wrapper">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<input
						type="search"
						name="search_title"
						value={searchTitleValue}
						onChange={(e) => setSearchTitleValue(e.target.value)}
						placeholder="название"
					/>
					<input
						type="search"
						name="search_location"
						value={searchLocationValue}
						min="1"
						onChange={(e) => setSearchLocationValue(e.target.value)}
						placeholder="локация"
					/>
					<div className="btn-block">
						<input type="button" name="clear" value="очистить" onClick={clearSearch} />
						<input type="submit" name="submit" value="поиск" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchComponentRu;
