import { makeStyles } from "@material-ui/core/styles";
import { cor } from "../../global/colors.json";

export const useStyles = makeStyles({
  container: {
    background: cor.branca,
    color: "white",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    background: cor.tom5,
    color: "white",
    width: "100vw",
    height: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  contentBox: {
    background: cor.tom3,
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "10px",
  },

  titleContentBox: {
    background: cor.tom5,
    width: "100%",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  cards: {
    background: cor.branca,
    width: "100%",
    height: "100%",
    margin: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },

  card: {
    maxWidth: 200,
    maxHeight: 240,
    margin: "20px",
  },

  infosCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "flex-start",
  },

  buttonsCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    height: "40px",
  }
});
