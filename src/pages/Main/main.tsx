import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core/";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../../components/Search/search";
import { GET_COUNTRIES } from "../../graphql/queries/get_countries";
import { getCountry } from "../../redux/store/countries/actions";
import { Country } from "../../redux/store/countries/types";
import { useStyles } from "./styles";

//definido o tipo do dado em erros
interface Errors {
  text: string;
}

interface ModalProps {
  value: boolean;
}

interface Name {
  value: string;
}

//definindo o componente como funcional
const Main = () => {
  //guardando os estilos do material-ui numa constante styles
  const styles = useStyles();
  //definindo dispatch
  const dispatch = useDispatch();
  //definindo estado para guardar os paises
  const [state, setState] = useState<Country[]>();
  //definindo estado para guardar um possivel erro
  const [errors, setErrors] = useState<Errors>();

  function handlerCountryItem(item: Country) {
    dispatch(getCountry(item));
  }

  //usando useEffect para trazer os dados assim que o componente foi montado
  useEffect(() => {
    GET_COUNTRIES.then((result) => setState(result.data.Country)).catch((err) =>
      setErrors(err)
    );
  }, [state]);

  console.log(state);
  return (
    <Box component="section" className={styles.container}>
      <Box component="header" className={styles.header}>
        Desafio Tecnico Softplan - Daniel Filgueira da Silva
      </Box>
      <Box component="section" className={styles.contentBox}>
        <Box component="header" className={styles.titleContentBox}>
          Paises
        </Box>
        {!errors ? (
          <>
            <Search
              onChange={() => {
                console.log("digitei");
              }}
              placeholder="Digite o nome do pais"
            />
            <Box component="section" className={styles.cards}>
              {state &&
                state.map((item) => (
                  <Card key={item._id} className={styles.card}>
                    <CardMedia
                      className={styles.flag}
                      component="img"
                      alt="Contemplative Reptile"
                      image={item.flag?.svgFile}
                      title="Contemplative Reptile"
                    />
                    <CardContent className={styles.infosCard}>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="span"
                      >
                        <span style={{ fontWeight: 900 }}>Nome: </span>
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="span"
                      >
                        <span style={{ fontWeight: 900 }}>Capital: </span>
                        {item.capital}
                      </Typography>
                    </CardContent>
                    <CardActions className={styles.buttonsCard}>
                      <Link
                        className={styles.button}
                        to="/details"
                        onClick={() => handlerCountryItem(item)}
                      >
                        Detalhes
                      </Link>
                    </CardActions>
                  </Card>
                ))}
            </Box>
          </>
        ) : (
          <Box component="p" className={styles.error}>
            <p>
              Desculpe, algo deu errado ao carregar os dados! Erro:{" "}
              {errors.text}
            </p>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Main;
