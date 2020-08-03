import { Box, Button } from "@material-ui/core/";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

//definindo o componente como funcional
const Details = () => {
  //guardando os estilos do material-ui numa constante styles
  const styles = useStyles();

  const selector = useSelector(state: ApplicationState => state. );

  return (
    <Box component="section" className={styles.container}>
      <Box component="header" className={styles.header}>
        Desafio Tecnico Softplan - Daniel Filgueira da Silva
      </Box>
      <Box component="section" className={styles.contentBox}>
        <Box component="header" className={styles.titleContentBox}>
          <Link className={styles.link} to="/">
            <Button className={styles.button}>Voltar</Button>
          </Link>
          Detalhes
        </Box>

        <Box component="section" className={styles.cards}>
          <span className={styles.link}>Bandeira: {"Ola mundo\n"}</span>
          <span className={styles.link}>Nome: {"Ola mundo\n"}</span>
          <span className={styles.link}>Capital: {"Ola mundo\n"}</span>
          <span className={styles.link}>Area: {"Ola mundo\n"}</span>
          <span className={styles.link}>População: {"Ola mundo\n"}</span>
          <span className={styles.link}>Top-Level Domain: {"Ola mundo\n"}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
