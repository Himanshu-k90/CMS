import { FC, useState } from "react";

import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@cmsgov/design-system";
import { IoMdLogIn } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

import headerStyles from "./styles/index.module.css";
import allPurposeImage from "@/assets/all-purpose-banner-v3.jpg";

import { headerMenu } from "@/constants";

const Header: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className={headerStyles.header_container}>
      <img
        src={allPurposeImage}
        alt="All Purpose image"
        loading="lazy"
        width={1200}
        height={80}
        className={headerStyles.header_all_purpose_image}
      />

      <div className="ds-u-display--flex ds-u-flex-direction--column ds-u-fill--black ds-u-padding-x--3 ds-u-padding-y--4">
        <Button
          type="button"
          onClick={() => setToggleMenu((prev) => !prev)}
          style={{
            background: "transparent",
            borderColor: "#fff",
            marginLeft: "auto",
          }}
          className={headerStyles.mobile_menu_btn}
        >
          <GiHamburgerMenu fontSize={24} color="#fff" />
        </Button>

        <header className={!toggleMenu ? headerStyles.menu__container : ""}>
          <nav style={{ width: "100%" }}>
            <ul
              className={`ds-u-display--flex ${
                !toggleMenu
                  ? "ds-u-flex-direction--row"
                  : "ds-u-flex-direction-column"
              } ${headerStyles.header_nav_menu_container}`}
            >
              {headerMenu.map((li) => (
                <li key={li.title}>
                  <Link
                    to={li.link}
                    className="ds-u-font-size--base ds-u-color--white"
                  >
                    {li.title}
                  </Link>
                </li>
              ))}
              <li
                className={
                  toggleMenu ? `ds-u-margin-top--3` : "ds-u-margin-left--auto"
                }
              >
                <Link
                  to="/"
                  style={{
                    gap: "8px",
                  }}
                  className="ds-u-font-size--base ds-u-color--white ds-u-display--flex ds-u-align-items--center"
                >
                  <IoMdLogIn fontSize={24} /> Login
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{
                    gap: "8px",
                  }}
                  className="ds-u-font-size--base ds-u-color--white ds-u-display--flex ds-u-align-items--center"
                >
                  <MdAccountCircle fontSize={24} /> Register
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
