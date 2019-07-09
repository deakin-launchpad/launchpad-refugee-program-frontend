import React, { useContext, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Face, Star, Done, Search, ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/loginContext";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [redirectOnLogout, setRedirectOnLogout] = useState(false);

  const [
    loginStatus,
    setAccessToken,
    developerMode,
    setTriggerDeveloperMode,
    setLoginStatus
  ] = useContext(LoginContext);

  function logoutUser() {
    window.localStorage.clear();
    setLoginStatus(false);
    setTriggerDeveloperMode(false);
    setRedirectOnLogout(true);
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <Face />
          </ListItemIcon>
          <Link to="/user/profile">
            <ListItemText primary="My Profile" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Link to="/user/appliedJobs">
            <ListItemText primary="Applied" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Link to="/user/searchSetting">
              <Search />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Search Setting" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToApp onClick={() => logoutUser()} />
          </ListItemIcon>
          <ListItemText onClick={() => logoutUser()} primary="Log Out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
