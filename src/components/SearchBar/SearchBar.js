import React, {useState} from 'react';
import styles from './SearchBar.module.css'
import SearchResults from "../SearchResults/SearchResults.js";

function SearchBar(props) {

    const [searchString, setSearchString] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('search executed')
    }

    return (
        <>
            <div className='search-bar'>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="search-box" className={styles.srOnly}>Search</label>
                    <input
                        type="text"
                        value={searchString}
                        name="search-box"
                        id="search-box"
                        placeholder="Search song, artist, album..."
                        className={styles.searchBox}
                        autoComplete='off'
                    />
                    <input type="submit" value="Search" className={styles.submit} />
                </form>
            </div>
        </>
    )
}

export default SearchBar;