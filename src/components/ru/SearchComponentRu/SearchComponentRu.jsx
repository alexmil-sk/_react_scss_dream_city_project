import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import "./SearchComponentRu.scss";

function SearchComponentRu({titleQuery,	postIdQuery,checkboxLatest }) {

	const [searchTitleValue, setSearchTitleValue] = useState(titleQuery);
	const [searchPostIdValue, setSearchPostIdValue] = useState(postIdQuery);
	const [searchLatestChecked, setSearchLatestChecked] = useState(false);

	const [ _ , setSearchParams] = useSearchParams();


	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const queryTitle = form.search_title.value;
		const queryPostId = form.search_post_id.value;
		const isLatest = form.latest.checked;

		let params = { title: queryTitle };

		if (queryPostId) params = { ...params, postId: queryPostId };
		if (isLatest) params = { ...params, latest: true };

		setSearchParams(params);
	}

	function clearSearch(e) {
		e.preventDefault();
		setSearchTitleValue('');
		setSearchPostIdValue('');
		setSearchParams({});
	}


	useEffect(() => {
		setSearchTitleValue(titleQuery);
		setSearchPostIdValue(postIdQuery);
		setSearchLatestChecked(checkboxLatest);
	}, [])


	return (
		<div className="search">
			<div className="search__wrapper">
				<form autoComplete="off" onSubmit={handleSubmit} >
					<input
						type="number"
						name="search_post_id"
						value={searchPostIdValue}
						onChange={(e) => setSearchPostIdValue(e.target.value)}
						placeholder="post id"
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
					<label >
						<input
							type="checkbox"
							name="latest"
							onChange={() => setSearchLatestChecked(!searchLatestChecked)}
							checked={searchLatestChecked}
						/>
						Latest Posts ( id > 80 )
					</label>
				</form>
			</div>
		</div>
	)
}

export default SearchComponentRu;