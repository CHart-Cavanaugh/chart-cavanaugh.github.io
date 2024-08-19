import ProfileImage from './profile.png';



function Profile() {

  return (

    <div class="profile">
      <img class="profile-image" src={ProfileImage} alt="Profile Picture" />
      <div class="profile-bg">
        <div class="profile-strip" id="profile-strip-1"></div>
        <div class="profile-strip" id="profile-strip-2"></div>
        <div class="profile-strip" id="profile-strip-3"></div>
        <div class="profile-strip" id="profile-strip-4"></div>
        <div class="profile-strip" id="profile-strip-5"></div>
        <div class="profile-strip" id="profile-strip-6"></div>
        <div class="profile-strip" id="profile-strip-7"></div>
      </div>
    </div>

  );

}

export default Profile;