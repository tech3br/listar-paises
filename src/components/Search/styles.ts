import { makeStyles } from "@material-ui/core/styles";
import { cor } from "../../global/colors.json";

export const useStyles = makeStyles({
  search: {
    background: cor.branca,
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
