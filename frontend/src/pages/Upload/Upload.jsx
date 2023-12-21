import { Icon } from "@iconify/react";
import "./Upload.css";
import Header from "../../components/Header/Header";

function Upload() {
  return (
    <>
      <Header />
      <section className="container_Body">
        <h1 className="upload_Main_Title">What do you want to upload?</h1>
        <div className="short_Or_Video_Container">
          <div className="add_A_Short_Container">
            <div className="add_A_Short">
              <h2>Add a short</h2>
            </div>
            <div className="plus_Icon_Container">
              <Icon
                id="icon_search"
                type="button"
                icon="octicon:plus-16"
                color="#f3f3e6"
                width="65"
                height="65"
              />
            </div>
          </div>
          <div className="add_A_Video_Container">
            <div className="add_A_Video">
              <h2>Add a video</h2>
            </div>
            <div className="plus_Icon_Container">
              <Icon
                id="icon_search"
                type="button"
                icon="octicon:plus-16"
                color="#f3f3e6"
                width="65"
                height="65"
              />
            </div>
          </div>
        </div>
        <button type="button" className="next_btn">
          NEXT
        </button>
      </section>
    </>
  );
}

export default Upload;
