import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const [recipies, setRecipies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("Banana");

    const getRecipe = async () => {
        const API_ID = process.env.REACT_APP_API_ID;
        const API_KEY = process.env.REACT_APP_API_KEY;
        const GET_LINK = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
        let response = await fetch(GET_LINK);
        response = await response.json();
        setRecipies(response.hits);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const isZero = (value) => {
        return value === 0 ? true : false;
    };

    useEffect(() => {
        getRecipe();
    }, [query]);

    return (
        <div className="App">
            <input
                className="search-input"
                type="text"
                value={search}
                onChange={handleSearch}
            />
            <button
                className="search-button"
                onClick={() => {
                    setQuery(search);
                    setSearch("");
                }}
            >
                Search
            </button>
            <div className="container">
                <div className="row">
                    {!isZero(recipies.length) &&
                        recipies.map((item) => (
                            <Recipe
                                key={item.recipe.label}
                                title={item.recipe.label}
                                calories={item.recipe.calories}
                                image={item.recipe.image}
                            />
                        ))}

                    {console.log(recipies)}
                    {isZero(recipies.length) && (
                        <h3 className="col-12">No results found</h3>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
