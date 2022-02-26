import { ImportantDevices } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    width: 380,
    margin: "0 2px 10px 0.5px",
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  menuitem: {
      backgroundColor: "transparent !important"
  }
}));

export default useStyles;
