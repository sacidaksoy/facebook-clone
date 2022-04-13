import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import "./Header.css";
import { useStateValue } from './StateProvider';
function Header() {
  const [{user}] = useStateValue()

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
          alt="facebook__logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
      </div>

      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
        <ExpandMoreIcon />
      </IconButton>
    </div>
  );
}

export default Header;
