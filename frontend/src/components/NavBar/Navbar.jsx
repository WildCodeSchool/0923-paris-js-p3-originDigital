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
          color="var(--white)"
          width="33"
          height="37"
          onClick={() => {
            Navigate("/");
          }}
        />
        {!isAdmin ? (
          <>
            <Icon
              icon="pepicons-pencil:star"
              color="var(--white)"
              width="40"
              height="38"
              onClick={() => {
                Navigate("/favorites");
              }}
            />
            <Icon
              icon="ph:plus-circle-light"
              color="var(--white)"
              width="44"
              height="44"
              onClick={() => {
                Navigate("/upload");
              }}
            />
            <Icon
              icon="material-symbols-light:subscriptions-rounded"
              color="var(--white)"
              width="37"
              height="37"
              onClick={() => {
                Navigate("/usersprofile/1");
              }}
            />
            <Icon
              icon="ph:user-circle-thin"
              color="var(--white)"
              width="39"
              height="39"
              onClick={() => {
                Navigate("/signup");
              }}
            />
          </>
        ) : (
          <>
            <Icon
              icon="iconamoon:category"
              color="var(--white)"
              width="33"
              height="33"
              onClick={() => {
                Navigate("/settingscategories");
              }}
            />
            <Icon
              icon="grommet-icons:validate"
              color="var(--white)"
              width="33"
              height="33"
              onClick={() => {
                Navigate("/adminreviews");
              }}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default Navbar;
