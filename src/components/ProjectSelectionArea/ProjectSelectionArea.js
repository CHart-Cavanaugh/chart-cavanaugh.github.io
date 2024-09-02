import ProjectTypeTabs from "../ProjectTypeTabs/ProjectTypeTabs";
import ProjectTypeProjects from "../ProjectTypeProjects/ProjectTypeProjects";


function ProjectSelectionArea() {

  return (

    <div className="project-selection-area">
      <ProjectTypeTabs />
      <ProjectTypeProjects />
    </div>

  );

}

export default ProjectSelectionArea;