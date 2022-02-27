import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const Back = () => {
  let history = useNavigate();

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIosIcon style={{ fontSize: 12 }} />}
        onClick={() => history("/", { replace: true })}
        sx={{ mt: 3 }}>
        Back
      </Button>
    </>
  );
};

export default Back;
