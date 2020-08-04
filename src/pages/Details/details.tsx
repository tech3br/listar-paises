import { Box, Button, CardMedia } from "@material-ui/core/";
import ModalComponent from "components/Modal/Modal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Country } from "redux/store/countries/types";
import { useStyles } from "./styles";

interface IDataCountries {
  countries: {
    data: Country;
  };
}

interface IModalProps {
  value: boolean;
}
//definindo o componente como funcional
const Details = () => {
  //guardando os estilos do material-ui numa constante styles
  const styles = useStyles();
  //definindo useSelector
  const [showModal, setShowModal] = useState<IModalProps>({ value: false });
  const [dataCountry, setDataCountry] = useState<Country>({
      _id: 0,
      name: "",
      capital: "",
      area: "",
      flag: {
        svgFile: "",
      },
      population: "",
      topLevelDomains: "",
    } as Country);

  const countryData = useSelector(
    (state: IDataCountries) => state.countries.data
  );

  function handleEdit(){
    setShowModal({value: true})
  }
  function handleClose(){
    setShowModal({value: false})
  }

  return (
    <Box component="section" className={styles.container}>
      <ModalComponent
        handleClose={handleClose}
        handleEdit={() => {}}
        textClose="Fechar"
        textEdit="Editar"
        titleModal="Altere as informações do pais:"
        open={showModal?.value}
      />
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
          <CardMedia
            className={styles.flag}
            component="img"
            alt="Contemplative Reptile"
            image={countryData.flag?.svgFile}
            title="Contemplative Reptile"
          />
          <span className={styles.link}>Nome: {countryData.name}</span>
          <span className={styles.link}>Capital: {countryData.capital}</span>
          <span className={styles.link}>Area: {countryData.area}</span>
          <span className={styles.link}>
            População: {countryData.population}
          </span>
          {/* <span className={styles.link}>
            Top-Level Domain: {countryData.topLevelDomains[0].name}
          </span> */}
          <Button onClick={handleEdit}>Editar</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
