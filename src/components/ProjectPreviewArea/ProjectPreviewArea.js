import { useSelector } from 'react-redux';



function ProjectPreviewArea() {

  let currentSelection = useSelector((state) => state.currentSelection.value);
  let artProjects = useSelector((state) => state.artProjects.value);

  return (

    <div className="project-preview-area">
      <img className="art-project-preview" src={artProjects[currentSelection]} />
    </div>

  );

}



export default ProjectPreviewArea;