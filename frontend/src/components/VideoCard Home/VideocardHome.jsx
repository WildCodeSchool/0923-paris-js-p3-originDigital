import "./VideocardHome.css";
import Avatar from "@mui/material/Avatar";

function VideocardHome({ title, user, thumbnailUrl }) {
  return (
    <div className="video_Card_Home">
      <img
        className="video_Thumbnail_Home"
        alt="video thumbnail"
        src={thumbnailUrl}
      />
      <div className="video_Data_Home">
        <div className="data_Container_Home">
          <div className="avatar_Container">
            <Avatar
              className="avatar"
              sx={{ width: 40, height: 40 }}
              src="https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="channel_Details">
            <h3 className="video_Title">{title}</h3>
            <p className="creator_Username">{user}</p>
            <p>200views</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideocardHome;
