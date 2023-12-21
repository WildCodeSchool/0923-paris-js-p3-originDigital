import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./Addvideos.css";
import useOverviewContext from "../../../context/Overviewcontext";
import Header from "../../../components/Header/Header";

function Addvideos() {
  const maxCharacters = 255;
  const { setVideoTitle, description, setDescription } = useOverviewContext();

  const handleVideoTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= maxCharacters) {
      setDescription(inputValue);
    }
  };

  // const isMobile = window.innerWidth < 1024;

  const [rows, setRows] = useState(window.innerWidth > 1024 ? 4 : 7);

  useEffect(() => {
    const handleResize = () => {
      setRows(window.innerWidth > 1024 ? 4 : 7);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="container_Body_Add_Video">
        <h1 className="upload_Main_Title_Video">Video upload settings</h1>
        <div className="grid_Container">
          <div className="add_An_Element_Container">
            <h2>Add a video</h2>
            <div className="plus_Icon_Container">
              <Icon
                type="button"
                icon="octicon:plus-16"
                color="#f3f3e6"
                width="65"
                height="65"
              />
            </div>
            <p className="element_Specs">
              (16:9 ratio, .mp4, max file size : ?)
            </p>
          </div>
          <div className="add_A_Thumbnail_Container">
            <h2>Add a thumbnail</h2>
            <div className="plus_Icon_Container">
              <Icon
                type="button"
                icon="octicon:plus-16"
                color="#f3f3e6"
                width="65"
                height="65"
              />
            </div>
          </div>
          <div className="add_A_Title_Container">
            <input
              className="title_Input"
              type="text"
              maxLength={255}
              placeholder="Add a video title"
              onChange={handleVideoTitleChange}
            />
          </div>
          <div className="video_Description">
            <textarea
              className="description_Input"
              wrap
              rows={rows}
              // rows={isMobile ? 7 : 4}
              maxLength={255}
              placeholder="Add video description"
              onChange={handleDescriptionChange}
            />
            <div className="text_Limit_Container">
              <div className="text_Limit">
                {maxCharacters - description.length}/255
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="upload_Btn">
          UPLOAD
        </button>
      </section>
    </>
  );
}

export default Addvideos;
