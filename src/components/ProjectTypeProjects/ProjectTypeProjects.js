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
  let artProjects = useSelector((state) => state.artProjects.value);
  let dispatch = useDispatch();



  useEffect(() => {

    document.getElementsByClassName("project-thumbnail")[0].className = "project-thumbnail active-thumbnail";
    dispatch(setSelection(0));

  }, []);



  useEffect(() => {

    document.getElementsByClassName("active-thumbnail")[0].className = "project-thumbnail";
    document.getElementsByClassName("project-thumbnail")[currentSelection].className = "project-thumbnail active-thumbnail"

  }, [currentSelection])







  return (

    <div className="project-type-projects type-tab-1">
      <div className="projects-collection-area">
        {artProjects.map((thumbnail_image, index) => {

          return (

            <ProjectThumbnail
              key={`project-thumbnail-${index + 1}`}
              myImage={thumbnail_image}
              myOrder={index + 1}
            />

          );

        })}
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