import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "#000",
  },
  form: {
    '& > *': {
      margin: "12px",
    },
  },
});
