import { Icon } from "@iconify/react";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import useOverview from "../../context/Overviewcontext";

function Navbar() {
  const Navigate = useNavigate();
  const { isAdmin } = useOverview();
  return (
    <main>
      <div className="bloc_Navbar">
        <Icon
          icon="material-symbols:home"
          className="homeNavbar"
          color="var(--white)"
          width="33"
          height="37"
          onClick={() => {
            Navigate("/");
          }}
        />
        {!isAdmin ? (
          <>
            <div className="favoritesNavbar_bloc">
              <Icon
                icon="pepicons-pencil:star"
                className="starNavbar"
                color="var(--white)"
                width="40"
                height="38"
                onClick={() => {
                  Navigate("/favorites");
                }}
              />
              <span className="textFavoritesNavbar">Favorites</span>
            </div>
            <div className="uploadNavbar_bloc">
              <Icon
                icon="ph:plus-circle-light"
                className="uploadNavbar"
                color="var(--white)"
                width="44"
                height="44"
                onClick={() => {
                  Navigate("/upload");
                }}
              />
              <span className="textUploadNavbar">Add a new video or short</span>
            </div>
            <div className="subscriptionNavbar_bloc">
              <Icon
                icon="material-symbols-light:subscriptions-rounded"
                className="subscribeNavbar"
                color="var(--white)"
                width="37"
                height="37"
                onClick={() => {
                  Navigate("/usersprofile/1");
                }}
              />
              <span className="textSubscriptionNavbar">Subscriptions</span>
            </div>
            <div className="profilNavbar_bloc">
              <Icon
                icon="ph:user-circle-thin"
                className="profilNavbar"
                color="var(--white)"
                width="39"
                height="39"
                onClick={() => {
                  Navigate("/settingscategories/");
                }}
              />
              <span className="textProfilNavbar">Username</span>
            </div>
          </>
        ) : (
          <>
            <div className="adminNavbar_bloc">
              <Icon
                icon="ph:user-circle-thin"
                className="imgAdminNavbar"
                color="var(--white)"
                width="39"
                height="39"
              />
              <span className="textAdminNavbar">Admin</span>
            </div>
            <div className="categoryNavbar_bloc">
              <Icon
                icon="iconamoon:category"
                className="categoryNavbar"
                color="var(--white)"
                width="33"
                height="33"
                onClick={() => {
                  Navigate("/settingscategories/");
                }}
              />
              <span className="textCategoryNavbar">Categories</span>
            </div>
            <div className="reviewNavbar_bloc">
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
              <span className="textReviewNavbar">Validate videos/shorts</span>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Navbar;
