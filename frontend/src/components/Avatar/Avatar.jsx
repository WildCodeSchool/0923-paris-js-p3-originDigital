import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

export default function BackgroundLetterAvatars({ username }) {
  // console.log("this ", username);
  return (
    <Avatar
      sx={{ bgcolor: deepOrange[500] }}
      alt={`${username?.toUpperCase()}`}
      src="/broken-image.jpg"
    />
  );
}
