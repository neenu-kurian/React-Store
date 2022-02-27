import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "75%",
  },
  grid: {
    [theme.breakpoints.down("sm")]: {
        width: "100%"
    },
  },
}));

export default useStyles;
