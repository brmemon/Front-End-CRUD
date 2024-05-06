import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
const Navbar = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 330,
    bgcolor: "background.paper",
    border: "2px solid #1976d2",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

const logOut = () => {
  sessionStorage.clear("id")
  dispatch(authActions?.logOut());
}

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block", fontSize: "30px" },
            }}>
            Todo
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "block" } }}>
            <div>
              <Button onClick={handleOpen} style={{ color: "#1976d2", backgroundColor:"white" }}>
                Log Out
              </Button>
              <Modal open={open} onClose={handleClose}>
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography sx={{ mt: 2, textAlign: "center" }}>
                      Are you sure you want to Log Out ?
                    </Typography>
                    <div className="yes_no_button">
                      <Button
                        className="logout_button_YesNo"
                        variant="contained"
                        onClick={handleClose}>
                        No
                      </Button>
                      <Button
                        className="logout_button_YesNo"
                        variant="contained"
                        onClick={logOut}
                        >
                        Yes
                      </Button>
                    </div>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
