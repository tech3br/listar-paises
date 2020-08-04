import { makeStyles } from "@material-ui/core/styles";
import { cor } from "../../global/colors.json";

export const useStyles = makeStyles({
  container: {
    background: cor.branca,
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    background: cor.tom5,
    color: "white",
    width: "100%",
    height: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  contentBox: {
    background: cor.cinza,
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "10px",
    marginTop: "10px",    },

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
    margin: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    height: "auto",
    marginTop: "20px",
    marginRight: "20px",
    boxShadow: "1px 1px 4px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "232px",
  },

  infosCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  buttonsCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#5F6FDC",
    width: "200px",
    height: "40px",
    textTransform: "none",
    '&:hover': {
      background: "#000",
      color: "#fff"
    },
    textDecoration: "none", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },

  link: {
    textDecoration: "none",    
  },

  error: {
    color: "black",
    fontSize: "18px",
  },

  flag: {
    width: "240px",
    height: "140px",    
  }
});
