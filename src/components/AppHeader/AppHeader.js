import Profile from '../Profile/Profile'
import NavBar from '../NavBar/NavBar'



function AppHeader() {

  return (

    <header class="app-header">
      <Profile />
      <h1>
        <span>Christopher</span>
        {window.innerWidth < 768 ? <br /> : " "}
        <span>Hart-Cavanaugh</span>
      </h1>
      <p>Artist | Musician | Developer | Projecteer</p>
    </header>

  );

}

export default AppHeader;