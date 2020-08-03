import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import React from "react";

interface Props {
  open: boolean;
  textEdit: string;
  textClose: string;
  titleModal: string;
  contentModal: string;
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
          <DialogContentText id="alert-dialog-slide-description">
            {props.contentModal}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={props.handleEdit}>
            {props.textEdit}
          </Button>
          <Button color="primary" onClick={props.handleClose}>
            {props.textClose}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalComponent;
