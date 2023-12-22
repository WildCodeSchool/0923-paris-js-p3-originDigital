import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import AsyncSelect from "react-select/async";
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

  const categoryOptions = [
    { label: "Animal", value: "Animal" },
    { label: "Architecture", value: "Architecture" },
    { label: "Art", value: "Art" },
    { label: "Business", value: "Business" },
    { label: "Food", value: "Food" },
    { label: "Nature", value: "Nature" },
    { label: "Technology", value: "Technology" },
    { label: "Other", value: "Other" },
  ];

  const tagOptions = [
    { label: "Shark", value: "Shark" },
    { label: "Dolphin", value: "Dolphin" },
    { label: "Whale", value: "Whale" },
    { label: "Octopus", value: "Octopus" },
    { label: "Crab", value: "Crab" },
    { label: "Lobster", value: "Lobster" },
  ];

  const loadCategoryOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = categoryOptions.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      callback(filteredOptions);
    }, 2000);
  };

  const loadTagOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = tagOptions.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      callback(filteredOptions);
    }, 2000);
  };

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "var(--black)",
    }),
    option: (styles, state) => {
      return {
        ...styles,
        backgroundColor: "var(--black)",
        color: "var(--white)",
        ...(state.isFocused
          ? { backgroundColor: "var(--orange)", color: "var(--black)" }
          : {}),
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: "var(--black)",
      };
    },
    singleValue: (styles) => ({
      ...styles,
      color: "var(--orange)",
    }),
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "var(--orange)",
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        color: "var(--white)",
        cursor: "pointer",
        ":hover": {
          color: "var(--black)",
        },
      };
    },
  };

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
          <div className="add_Category_Container">
            <AsyncSelect
              loadOptions={loadCategoryOptions}
              defaultOptions
              placeholder="Select Category"
              styles={colorStyles}
            />
          </div>
          <div className="add_Tags_Container">
            <AsyncSelect
              loadOptions={loadTagOptions}
              defaultOptions
              isMulti
              placeholder="Select Tags"
              styles={colorStyles}
            />
          </div>
          <div className="video_Description">
            <textarea
              className="description_Input"
              wrap
              rows={rows}
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
