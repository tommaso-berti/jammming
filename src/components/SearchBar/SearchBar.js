import React, {useState} from 'react';
import styles from './SearchBar.module.css'
import SearchResults from "../SearchResults/SearchResults.js";
import {searchTrack} from "../../api/spotify";

function SearchBar(props) {

    const [searchString, setSearchString] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const tracks = await searchTrack(searchString);
        console.log(tracks);
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
                        onChange={(event) => setSearchString(event.target.value)}
                    />
                    <input type="submit" value="Search" className={styles.submit} />
                </form>
            </div>
        </>
    )
}

export default SearchBar;