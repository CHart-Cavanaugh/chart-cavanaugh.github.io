function AppSection(props) {

  return (

    <section id={props.id} class="app-section">
      <h2>{props.sectionName}</h2>
      <hr />
    </section>

  );

}

export default AppSection;