import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import { TransitionProps } from "@material-ui/core/transitions";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
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

//transicao no modal
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ModalComponent = (props: Props) => {
  
  const [dataCountry, setDataCountry] = useState<Country>({
    _id: 0,
    name: "",
    capital: "",
    area: "",
    population: "",
    flag: {
      svgFile: ""
    },
    topLevelDomains: "",
  } as Country);

  const styles = useStyles();

  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(getCountry(dataCountry));
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
            />
            <TextField id="standard-basic" label="Capital" name="capital" />
            <TextField id="standard-basic" label="Area" name="area" />
            <TextField
              id="standard-basic"
              label="Populacao"
              name="population"
            />
            <TextField
              id="standard-basic"
              label="Top-Level Domain"
              name="topLevelDomain"
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
