import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
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
import ForgotPassword from "./pages/Forgot/ForgotPassword";
import UpdateShort from "./pages/Update/UpdateShort/UpdateShort";
import UpdateVideo from "./pages/Update/UpdateVideo/UpdateVideo";
import SearchResult from "./pages/SearchResult/SearchResult";
import App from "./App";
import useAuthContext from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useContext(useAuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);
  return children;
}

function PublicRoute({ children }) {
  const { user } = useContext(useAuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate(-2);
  }, [user]);
  return children;
}

function AdminRoute({ children }) {
  const { user } = useContext(useAuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && user.admin !== "1") {
      navigate("/");
    }
  }, [user]);
  return children;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />

      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path="/categories/:id" element={<Categories />} />
      <Route
        path="/settingscategories"
        element={
          <PrivateRoute>
            <SettingsCategories />
          </PrivateRoute>
        }
      />
      <Route path="/search/:searchTerm" element={<SearchResult />} />
      <Route path="/videos/:id" element={<Videos />} />
      <Route path="/shorts/:id" element={<Shorts />} />
      <Route
        path="/videos/:id/edit"
        element={
          <PrivateRoute>
            <UpdateVideo />
          </PrivateRoute>
        }
        loader={({ params }) => {
          return fetch(
            `${import.meta.env.VITE_BACKEND_URL}/videos/${params.id}`,
            {
              method: "GET",
              credentials: "include",
            }
          );
        }}
      />
      <Route
        path="/shorts/:id/edit"
        element={
          <PrivateRoute>
            <UpdateShort />
          </PrivateRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/forgotpassword"
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />

      <Route path="/usersprofile/:id" element={<UsersProfile />} />
      <Route
        path="/usersprofile/:id/subscriptions"
        element={
          <PrivateRoute>
            <Subscriptions />
          </PrivateRoute>
        }
      />
      <Route
        path="/upload"
        element={
          <PrivateRoute>
            <Upload />
          </PrivateRoute>
        }
      />
      <Route
        path="/upload/addvideos"
        element={
          <PrivateRoute>
            <Addvideos />
          </PrivateRoute>
        }
      />
      <Route
        path="/upload/addshorts"
        element={
          <PrivateRoute>
            <Addshorts />
          </PrivateRoute>
        }
      />

      <Route
        path="/adminreviews"
        element={
          <AdminRoute>
            <Adminreviews />
          </AdminRoute>
        }
      />

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
