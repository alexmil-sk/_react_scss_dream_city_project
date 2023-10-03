import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import "./SearchComponentRu.scss";

function SearchComponentRu({ titleQuery, objIdQuery, checkboxLatest }) {
	const [searchTitleValue, setSearchTitleValue] = useState(titleQuery);
	const [searchObjectIdValue, setSearchObjectIdValue] = useState(objIdQuery);
	const [searchLatestChecked, setSearchLatestChecked] = useState(false);

	const [_, setSearchParams] = useSearchParams();

	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;

		const queryTitle = form.search_title.value;
		const queryObjectId = form.search_object_id.value;
		const isLatest = form.latest.checked;

		let params = { title: queryTitle };

		if (queryObjectId) params = { ...params, objId: queryObjectId };
		if (isLatest) params = { ...params, latest: true };


		setSearchParams(params);
	}

	function clearSearch(e) {
		e.preventDefault();
		setSearchTitleValue("");
		setSearchObjectIdValue("");
		setSearchParams({});
	}

	useEffect(() => {
		setSearchTitleValue(titleQuery);
		setSearchObjectIdValue(objIdQuery);
		setSearchLatestChecked(checkboxLatest);
	}, []);

	return (
		<div className="search">
			<div className="search__wrapper">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<input
						type="number"
						name="search_object_id"
						value={searchObjectIdValue}
						min="1"
						onChange={(e) => setSearchObjectIdValue(e.target.value)}
						placeholder="object id"
					/>
					<input
						type="search"
						name="search_title"
						value={searchTitleValue}
						onChange={(e) => setSearchTitleValue(e.target.value)}
						placeholder="title"
					/>
					<input type="button" name="clear" value="clear" onClick={clearSearch} />
					<input type="submit" name="submit" value="search" />
					<label>
						<input
							type="checkbox"
							name="latest"
							onChange={() => setSearchLatestChecked(!searchLatestChecked)}
							checked={searchLatestChecked}
						/>
						Последние объекты ( id > 2 )
					</label>
				</form>
			</div>
		</div>
	);
}

export default SearchComponentRu;
