import { Icon } from "@iconify/react";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import useOverview from "../../context/Overviewcontext";

function Navbar() {
  const Navigate = useNavigate();
  const { isAdmin } = useOverview();
  return (
    <main>
      <div className="containeur_Body_Navbar">
        <Icon
          icon="material-symbols:home"
          className="home_Navbar"
          color="var(--white)"
          width="33"
          height="37"
          onClick={() => {
            Navigate("/");
          }}
        />
        {!isAdmin ? (
          <>
            <div className="favorites_Navbar_bloc">
              <Icon
                icon="pepicons-pencil:star"
                className="star_Navbar"
                color="var(--white)"
                width="40"
                height="38"
                onClick={() => {
                  Navigate("/favorites");
                }}
              />
              <span className="text_Favorites_Navbar">Favorites</span>
            </div>
            <div className="upload_Navbar_bloc">
              <Icon
                icon="ph:plus-circle-light"
                className="upload_Navbar"
                color="var(--white)"
                width="44"
                height="44"
                onClick={() => {
                  Navigate("/upload");
                }}
              />
              <span className="text_Upload_Navbar">
                Add a new video or short
              </span>
            </div>
            <div className="subscription_Navbar_bloc">
              <Icon
                icon="material-symbols-light:subscriptions-rounded"
                className="subscribe_Navbar"
                color="var(--white)"
                width="37"
                height="37"
                onClick={() => {
                  Navigate("/usersprofile/1");
                }}
              />
              <span className="text_Subscription_Navbar">Subscriptions</span>
            </div>
            <div className="profil_Navbar_bloc">
              <Icon
                icon="ph:user-circle-thin"
                className="profil_Navbar"
                color="var(--white)"
                width="39"
                height="39"
                onClick={() => {
                  Navigate("/settingscategories/");
                }}
              />
              <span className="text_Profil_Navbar">Username</span>
            </div>
          </>
        ) : (
          <>
            <div className="admin_Navbar_bloc">
              <Icon
                icon="ph:user-circle-thin"
                className="img_Admin_Navbar"
                color="var(--white)"
                width="39"
                height="39"
              />
              <span className="text_Admin_Navbar">Admin</span>
            </div>
            <div className="category_Navbar_bloc">
              <Icon
                icon="iconamoon:category"
                className="category_Navbar"
                color="var(--white)"
                width="33"
                height="33"
                onClick={() => {
                  Navigate("/settingscategories/");
                }}
              />
              <span className="text_Category_Navbar">Categories</span>
            </div>
            <div className="review_Navbar_bloc">
              <Icon
                icon="grommet-icons:validate"
                className="reviewNavbar"
                color="var(--white)"
                width="33"
                height="33"
                onClick={() => {
                  Navigate("/adminreviews/");
                }}
              />
              <span className="text_Review_Navbar">Validate videos/shorts</span>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Navbar;
