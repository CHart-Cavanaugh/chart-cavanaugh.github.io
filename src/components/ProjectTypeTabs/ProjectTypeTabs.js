import { useDispatch } from "react-redux";
import { setTab } from "../../app/slices/currentTabSlice";
import { setSelection } from "../../app/slices/currentSelectionSlice";


function ProjectTypeTabs(props) {

  let dispatch = useDispatch();



  return (

    <div className="project-type-tabs">
      <h3
        className="project-type-label tab-type-1"
        onClick={(event) => {

          document.getElementsByClassName("project-type-label")[0].className = "project-type-label tab-type-1";
          document.getElementsByClassName("project-type-label")[1].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[2].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[3].className = "project-type-label tab-type-0";

          document.getElementsByClassName("project-type-projects")[0].className = "project-type-projects type-tab-1";



          dispatch(setSelection(0));
          dispatch(setTab(1));

        }}
      >
        Art
      </h3>
      <h3
        className="project-type-label tab-type-0"
        onClick={() => {

          document.getElementsByClassName("project-type-label")[0].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[1].className = "project-type-label tab-type-2";
          document.getElementsByClassName("project-type-label")[2].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[3].className = "project-type-label tab-type-0";

          document.getElementsByClassName("project-type-projects")[0].className = "project-type-projects type-tab-2";



          dispatch(setSelection(0));
          dispatch(setTab(2));

        }}
      >
        Audio
      </h3>
      <h3
        className="project-type-label tab-type-0"
        onClick={() => {

          document.getElementsByClassName("project-type-label")[0].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[1].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[2].className = "project-type-label tab-type-3";
          document.getElementsByClassName("project-type-label")[3].className = "project-type-label tab-type-0";

          document.getElementsByClassName("project-type-projects")[0].className = "project-type-projects type-tab-3";



          dispatch(setSelection(0));
          dispatch(setTab(3));

        }}
      >
        {window.innerWidth < 768 ? "Sites" : "Websites"}
      </h3>
      <h3
        className="project-type-label tab-type-0"
        onClick={() => {

          document.getElementsByClassName("project-type-label")[0].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[1].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[2].className = "project-type-label tab-type-0";
          document.getElementsByClassName("project-type-label")[3].className = "project-type-label tab-type-4";

          document.getElementsByClassName("project-type-projects")[0].className = "project-type-projects type-tab-4";



          dispatch(setSelection(0));
          dispatch(setTab(4));

        }}
      >
        Games
      </h3>
    </div>

  );

}

export default ProjectTypeTabs;