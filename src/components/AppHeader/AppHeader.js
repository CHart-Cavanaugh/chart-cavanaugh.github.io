import Profile from '../Profile/Profile'



function AppHeader() {

  return (

    <header class="app-header">
      <Profile />
      <h1>
        <span>Christopher</span>
        {

          window.innerWidth < 768 ?

            <br /> :
            " "

        }
        <span>Hart-Cavanaugh</span>
      </h1>
      <p>Artist | Musician | Developer | Projecteer</p>
      <p><i className="fa fa-envelope"></i> : christopher.hartcava@gmail.com</p>
    </header>

  );

}



export default AppHeader;