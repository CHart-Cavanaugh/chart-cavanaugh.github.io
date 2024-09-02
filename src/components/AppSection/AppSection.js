import SectionText from "../SectionText/SectionText";
import ProjectsArea from "../ProjectsArea/ProjectsArea";


function AppSection(props) {

  return (

    <section id={props.id} class="app-section">
      <h2>{props.sectionName}</h2>
      <hr />
      {props.id === "projects-section" ? <ProjectsArea /> : <SectionText sectionText={props.sectionText} />}
      {/* <SectionText sectionText={props.sectionText} /> */}
    </section>

  );

}

export default AppSection;