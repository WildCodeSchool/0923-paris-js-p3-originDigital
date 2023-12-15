import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Categories from "./pages/Categories/Categories";
import SettingsCategories from "./pages/SettingsCategories/SettingsCategories";
import Videos from "./pages/Videos/Videos";
import Shorts from "./pages/Shorts/Shorts";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import UsersProfile from "./pages/UsersProfile/UsersProfile";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Upload from "./pages/Upload/Upload";
import Addvideos from "./pages/Upload/Addvideos/Addvideos";
import Addshorts from "./pages/Upload/Addshorts/Addshorts";
import Adminreviews from "./pages/Adminreviews/Adminreviews";
import NotFound from "./pages/NotFound/NotFound";
import App from "./App";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/categories/:id" element={<Categories />} />
      <Route path="/settingscategories" element={<SettingsCategories />} />
      <Route path="/videos/:id" element={<Videos />} />
      <Route path="/shorts/:id" element={<Shorts />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usersprofile/:id" element={<UsersProfile />} />
      <Route
        path="/usersprofile/:id/subscriptions"
        element={<Subscriptions />}
      />
      <Route path="/upload" element={<Upload />} />
      <Route path="/upload/addvideos" element={<Addvideos />} />
      <Route path="/upload/addshorts" element={<Addshorts />} />
      <Route path="/adminreviews" element={<Adminreviews />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
