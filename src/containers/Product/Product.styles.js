import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    width: 290,
    margin: "0 2px 10px 0.5px",
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  menuitem: {
      backgroundColor: "transparent !important",
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  }
}));

export default useStyles;
