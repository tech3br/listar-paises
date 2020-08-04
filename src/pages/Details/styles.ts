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
    borderRadius: "10px",
    marginTop: "10px",
  },  

  titleContentBox: {
    background: cor.tom5,
    width: "100%",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  cards: {
    width: "100%",
    height: "100%",
    background: cor.branca,
    margin: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "center",
  },

  link: {
    fontWeight: 900,
    color: "#000",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    lineBreak: "loose",
    wordBreak: "break-word",    
    textDecoration: "none",
  },

  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#5F6FDC",
    height: "40px",    
    textDecoration: "none",
    color: "#ffffff",
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
