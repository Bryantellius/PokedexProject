import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const PokemonCard = ({ pokemon, id }) => {
  const history = useHistory();
  const {name, sprite } = pokemon;
  console.log(pokemon);
  return (
    <Grid item xs={4}>
      <Card onClick={() => history.push(`/${id}`)}>
        <CardMedia
          //   className={classes.cardMedia}
          image={sprite}
          style={{ width: "130px", height: "130px" }}
        />
        <CardContent>
          <Typography>
            {id} {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
