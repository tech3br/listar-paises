import { TextField } from "@material-ui/core";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core/";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

  // function filterByInput(event: ChangeEvent<HTMLInputElement>) {
  //   let inputValue = event.target.value;
  //   dispatch(filterByName({ name: inputValue }));
  // }

  //usando useEffect para trazer os dados assim que o componente foi montado
  useEffect(() => {
    GET_COUNTRIES.then((result) => setState(result.data.Country)).catch((err) =>
      setErrors(err)
    );
  }, [state]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Country[]>();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const [verdadeiro, setVerdadeiro] = useState(true);

  useEffect(() => {
    if (verdadeiro && state !== []) {
      setSearchResults(state);
      setVerdadeiro(false);
    } else {
      const results =
        state &&
        state
          .map((item) => item)
          .filter(({ name }) => name.toLowerCase().includes(searchTerm));

      setSearchResults(results);
    }
  }, [searchTerm, state, verdadeiro]);

  console.log(state)

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
            <TextField
              id="standard-basic"
              label="Pesquisar"
              name="area"
              value={searchTerm}
              onChange={handleChange}
              type="text"
              placeholder="Busque pelo nome do pais"
            />
            <Box component="section" className={styles.cards}>
              {searchResults &&
                searchResults.map((item) => (
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
