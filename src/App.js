import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import AppSection from './components/AppSection/AppSection';
import NavBar from './components/NavBar/NavBar';



function App() {

  return (
    <div className="App">
      <AppHeader />
      <NavBar />
      <AppSection key={"Section 1"} id="intro-section" sectionName={"Introduction"} />
      <AppSection key={"Section 2"} id="projects-section" sectionName={"Projects"} />
      <AppSection key={"Section 3"} id="background-section" sectionName={"Background"} />
      <AppFooter />
    </div>
  );

}



export default App;