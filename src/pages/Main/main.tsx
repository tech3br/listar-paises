import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core/";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalComponent from "../../components/Modal/Modal";
import { GET_COUNTRIES } from "../../graphql/queries/get_countries";
import { Country } from "../../redux/store/countries/types";
import { useStyles } from "./styles";

//definido o tipo do dado em erros
interface Errors {
  text: string;
}

interface Variables {
  first: number;
  offset: number;
  limit: number;
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
  //definindo um dispatch para editar um pais
  //definindo estado para guardar os paises
  const [state, setState] = useState<Country[]>();
  //definindo estado para guardar um possivel erro
  const [errors, setErrors] = useState<Errors>();
  //definindo o total
  // const [total, setTotal] = useState<>();
  const [isOpen, setIsOpen] = useState<ModalProps>({ value: false });
  const [name, setName] = useState<Name>({ value: "ola" });

  // dispatch(
  //   getCountry({})
  // );

  function handleClose() {
    setIsOpen({ value: false });
  }

  function handleOpen() {
    setIsOpen({ value: true });
    setName({ value: "ola mundo" });
  }

  function handleEdit() {
    return setIsOpen({ value: true });
  }

  //usando useEffect para trazer os dados assim que o componente foi montado
  useEffect(() => {
    GET_COUNTRIES.then((result) => setState(result.data.Country)).catch((err) =>
      setErrors(err)
    );
    console.log(state);
  }, []);

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
          <Box component="section" className={styles.cards}>
            {state &&
              state.map((item) => (
                <>
                  <Card key={item?._id} className={styles.card}>
                    <CardMedia
                      className={styles.flag}
                      component="img"
                      alt="Contemplative Reptile"
                      image={item?.flag.svgFile}
                      title="Contemplative Reptile"
                    />
                    <CardContent className={styles.infosCard}>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="span"
                      >
                        <span style={{ fontWeight: 900 }}>Nome: </span>
                        {item?.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="span"
                      >
                        <span style={{ fontWeight: 900 }}>Capital: </span>
                        {item?.capital}
                      </Typography>
                    </CardContent>
                    <CardActions className={styles.buttonsCard}>
                      <Link className={styles.link} to="/details">
                        <Button className={styles.button}>Editar</Button>
                      </Link>
                      <Button className={styles.button} onClick={handleOpen}>
                        Detalhes
                      </Button>
                    </CardActions>
                  </Card>
                </>
              ))}
          </Box>
        ) : (
          <Box component="p" className={styles.error}>
            <p>
              Desculpe, algo deu errado ao carregar os dados! Erro:{" "}
              {errors.text}
            </p>
          </Box>
        )}
      </Box>
      {isOpen.value === true ? (
        <ModalComponent
          open={isOpen.value}
          textEdit={"editar"}
          textClose={"fechar"}
          handleClose={handleClose}
          handleEdit={handleEdit}
          titleModal={name.value}
          contentModal={"teste"}
        />
      ) : null}
    </Box>
  );
};

export default Main;
