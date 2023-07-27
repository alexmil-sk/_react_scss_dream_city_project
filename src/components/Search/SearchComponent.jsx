import "./SearchComponent.scss";

function SearchComponent({
	handleSubmit,
	clearSearch,
	searchTitleValue,
	getSearchTitleValue,
	searchPostIdValue,
	getSearchPostIdValue,
	searchLatestChecked,
	setSearchLatestChecked
}) {

	return (
		<div className="search">
			<div className="search__wrapper">
				<form autoComplete="off" onSubmit={handleSubmit} >
					<input
						type="number"
						name="search_post_id"
						value={searchPostIdValue}
						onChange={getSearchPostIdValue}
						placeholder="post id"
					/>
					<input
						type="search"
						name="search_title"
						value={searchTitleValue}
						onChange={getSearchTitleValue}
						placeholder="title"
					/>
					<input type="button" name="clear" value="clear" onClick={clearSearch} />
					<input type="submit" name="submit" value="search" />
					<label >
						<input
							type="checkbox"
							name="latest"
							//onChange={getLatestPosts}
							onChange={() => setSearchLatestChecked(!searchLatestChecked)}
							checked={searchLatestChecked}
						/>
						Latest Posts ( > 80 )
					</label>
				</form>
			</div>
		</div>
	)
}

export default SearchComponent;