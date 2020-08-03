import { Box, CardMedia } from "@material-ui/core/";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Country } from "redux/store/countries/types";
import { useStyles } from "./styles";

interface IDataCountries {
  countries: {
    data: Country;
  };
}

//definindo o componente como funcional
const Details = () => {
  //guardando os estilos do material-ui numa constante styles
  const styles = useStyles();
  //definindo useSelector
  const countryData = useSelector(
    (state: IDataCountries) => state?.countries.data
    );
    
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [area, setArea] = useState("");
  const [population, setPopulation] = useState("");
  const [topleveldomain, setTopLevelDomain] = useState("");

  useEffect(() => {
    setName(countryData.name)
    setCapital(countryData.capital)
    setArea(countryData.area)
    setPopulation(countryData.population)
    setTopLevelDomain(countryData.topLevelDomains[0].name)
  }, []);

  return (
    <Box component="section" className={styles.container}>
      <Box component="header" className={styles.header}>
        Desafio Tecnico Softplan - Daniel Filgueira da Silva
      </Box>
      <Box component="section" className={styles.contentBox}>
        <Box component="header" className={styles.titleContentBox}>
          <Link className={styles.button} to="/">
            Voltar
          </Link>
          Detalhes
        </Box>

        <Box component="section" className={styles.cards}>
          {/* <span className={styles.link}>Bandeira: {countryData && countryData.flag.svgFile}</span> */}
          <CardMedia
            className={styles.flag}
            component="img"
            alt="Contemplative Reptile"
            image={countryData && countryData.flag.svgFile}
            title="Contemplative Reptile"
          />
          <span className={styles.link}>
            Nome: {name}
          </span>
          <span className={styles.link}>
            Capital: {capital}
          </span>
          <span className={styles.link}>
            Area: {area}
          </span>
          <span className={styles.link}>
            População: {population}
          </span>
          <span className={styles.link}>
            Top-Level Domain: {topleveldomain}
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
