import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import { TransitionProps } from "@material-ui/core/transitions";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "redux/store/countries/actions";
import { Country } from "redux/store/countries/types";
import { useStyles } from "./styles";

interface Props {
  open: boolean;
  textEdit: string;
  textClose: string;
  titleModal: string;
  handleClose(): void;
  handleEdit(): void;
}

interface IMessageSucessProps {
  value: string;
}

interface IDataCountries {
  countries: {
    data: Country;
  };
}

interface ICountryData {
  topLevelDomains: {
    name: string;
  }[];
}

interface IValueDataCountry {
  _id: number;
  name: string;
  capital: string;
  area: string;
  population: string;
  svgFile: string;
  topLevelDomains: string;
}

interface IFlag {
  _id: number;
  name: string;
  capital: string;
  area: string;
  population: string;
  flag?: {
    _id?: string;
    emoji?: string;
    emojiUnicode?: string;
    svgFile?: string;
  };
  topLevelDomains: [
    {
      name: string;
    }
  ];
}

//transicao no modal
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ModalComponent = (props: Props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [messageSucess, setMessageSucess] = useState<IMessageSucessProps>();

  const countryData = useSelector(
    (state: IDataCountries) => state.countries.data
  );

  const [dataCountry, setDataCountry] = useState<IValueDataCountry>({
    _id: countryData._id,
    name: countryData.name,
    capital: countryData.capital,
    area: countryData.area,
    population: countryData.population,
    svgFile: countryData.flag?.svgFile,
    topLevelDomains: countryData.topLevelDomains[0].name,
  } as IValueDataCountry);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const dataCountries: Country = {
      _id: dataCountry._id,
      name: dataCountry.name,
      capital: dataCountry.capital,
      area: dataCountry.area,
      population: dataCountry.population,
      flag: {
        svgFile: dataCountry.svgFile,
      },
      topLevelDomains: [
        {
          name: dataCountry.topLevelDomains,
        },
      ],
    } as Country;
    localStorage.setItem(String(dataCountries._id), JSON.stringify(dataCountries))
    dispatch(getCountry(dataCountries));
    setMessageSucess({ value: "Dados Alterados!" });
    props.handleClose()
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDataCountry({ ...dataCountry, [name]: value });
  }


  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {props.titleModal}
        </DialogTitle>
        <DialogContent>
          {messageSucess?.value}
          <form
            onSubmit={handleSubmit}
            className={styles.form}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Nome"
              name="name"
              onChange={handleInputChange}
              value={dataCountry.name}
            />
            <TextField
              id="standard-basic"
              label="Capital"
              name="capital"
              onChange={handleInputChange}
              value={dataCountry.capital}
            />
            <TextField
              id="standard-basic"
              label="Area"
              name="area"
              onChange={handleInputChange}
              value={dataCountry.area}
            />
            <TextField
              id="standard-basic"
              label="Populacao"
              name="population"
              onChange={handleInputChange}
              value={dataCountry.population}
            />
            <TextField
              id="standard-basic"
              label="Top-Level Domain"
              name="topLevelDomains"
              onChange={handleInputChange}
              value={dataCountry.topLevelDomains}
            />
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={props.handleEdit}
                type="submit"
              >
                {props.textEdit}
              </Button>
              <Button color="primary" onClick={props.handleClose}>
                {props.textClose}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalComponent;
