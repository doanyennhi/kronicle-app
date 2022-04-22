import style from "./TopHeader.module.css";
import common from "../../styles/common.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "../../api/authentication";

const TopHeader = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  return (
    <div className={[style["top-header"], common["flex"]].join(" ")}>
      <div className={[style["top-header-left"], common["flex"]].join(" ")}>
        <Link to="/">
          <img
            alt="Kronicle logo"
            src={"../../media/icons/logo.png"}
            className={style["logo"]}
          />
        </Link>

        <SearchBar />
        <Link to="/listing">
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            className={style["icon"]}
          />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className={style["icon"]} />
        </Link>
      </div>

      <div className={[style["top-header-right"], common["flex"]].join(" ")}>
        {isLoggedIn ? (
          <>
            <Link to="/my-account" className={style["avatar"]}>
              <FontAwesomeIcon icon={faUserCircle} />
            </Link>
            <Link to="/" onClick={() => logout()}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <div className={style["vertical-line"]} />
            <Link to="/register" className={style["register"]}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
