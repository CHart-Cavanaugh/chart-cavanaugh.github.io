import ProjectThumbnail from "../ProjectThumbnail/ProjectThumbnail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelection } from "../../app/slices/currentSelectionSlice";



// let ThumbnailImages = [
//   ThumbnailImage1,
//   ThumbnailImage2,
//   ThumbnailImage3,
//   ThumbnailImage4,
// ];



function ProjectTypeProjects() {

  let currentSelection = useSelector((state) => state.currentSelection.value);
  let currentTab = useSelector((state) => state.currentTab.value);

  let artProjects = useSelector((state) => state.artProjects.value);
  let audioProjects = useSelector((state) => state.audioProjects.value);
  let websiteProjects = useSelector((state) => state.websiteProjects.value);
  let gameProjects = useSelector((state) => state.gameProjects.value);

  let dispatch = useDispatch();


  let getProjectThumbnails = (projects) => {

    return projects.map(getProjectThumbnail);

  };

  let getProjectThumbnail = (someProject, index) => {

    return (

      <ProjectThumbnail
        key={`project-thumbnail-${index + 1}`}
        myImage={someProject._projectThumbnail}
        myOrder={index + 1}
      />

    );

  };



  useEffect(() => {

    dispatch(setSelection(0));

  }, []);



  useEffect(() => {

    let previous_active = document.getElementsByClassName("active-thumbnail")[0]
    let new_active = document.getElementsByClassName("project-thumbnail")[currentSelection]



    if (previous_active && new_active) {

      previous_active.className = "project-thumbnail";
      new_active.className = "project-thumbnail active-thumbnail"

    }

  }, [currentSelection])



  useEffect(() => {

    let new_active = document.getElementsByClassName("project-thumbnail")[0];



    if (new_active) {


      new_active.className = "project-thumbnail active-thumbnail";

    }

  }, [currentTab])



  return (

    <div className="project-type-projects type-tab-1">
      <div className="projects-collection-area">
        {

          currentTab === 1 ? getProjectThumbnails(artProjects) :
            currentTab === 2 ? getProjectThumbnails(audioProjects) :
              currentTab === 3 ? getProjectThumbnails(websiteProjects) :
                currentTab === 4 ? getProjectThumbnails(gameProjects) :
                  ''

        }
      </div>
    </div>

  );

}



// for (let i = 0; i < 2; i++) {

//   ThumbnailImages = [
//     ...ThumbnailImages,
//     ...ThumbnailImages,
//   ]

// }




export default ProjectTypeProjects;