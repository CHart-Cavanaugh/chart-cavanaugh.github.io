import profile from './profile.png';



function AppHeader() {

  return (

    <header class="app-header">
      <img class="profile" src={profile} alt="Profile Picture" />
      <h1>Christopher Hart-Cavanaugh</h1>
      <p>Artist | Musician | Game Developer | Projecteer</p>
    </header>

  );

}

export default AppHeader;