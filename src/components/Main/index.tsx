import * as React from "react";
import { useStyles } from "./styles";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core/";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="section" className={classes.container}>
        <Box component="header" className={classes.header}>
          Desafio Tecnico Softplan - Daniel Filgueira da Silva
        </Box>
        <Box component="section" className={classes.contentBox}>
          <Box component="header" className={classes.titleContentBox}>
            Países
          </Box>
          <Box component="section" className={classes.cards}>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome: China
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital: Pequim
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital:
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome: Brasil
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital: Brasilia
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital:
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital:
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital:
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital:
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital:
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea disableTouchRipple={true}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  width="200"
                  height="80"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.infosCard}>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Nome:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    component="span"
                  >
                    Capital:
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonsCard}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                    
                  >
                    Editar
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Detalhes
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Main;
