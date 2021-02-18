import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import {
  Grid,
  CircularProgress,
  Toolbar,
  AppBar,
  TextField,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));

const Pokedex = () => {
  const classes = useStyles();
  const history = useHistory();

  const [pokemonData, setPokemonData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
      .then((response) => response.json())
      .then(({ results }) => {
        console.log(results);
        setPokemonData(results);
      });
  }, []);

  // const handleSearchChange = (e) => {
  //   setFilter(e.target.value);
  // };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              // onChange={handleSearchChange}
              label="Pokemon"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData.length > 0 ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {pokemonData.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} id={index+1}/>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
