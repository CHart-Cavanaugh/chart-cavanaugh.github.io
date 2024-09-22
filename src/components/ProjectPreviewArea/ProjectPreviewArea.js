import { useSelector } from 'react-redux';



function ProjectPreviewArea() {

  let currentSelection = useSelector((state) => state.currentSelection.value);
  let currentTab = useSelector((state) => state.currentTab.value);

  let artProjects = useSelector((state) => state.artProjects.value);
  let audioProjects = useSelector((state) => state.audioProjects.value);
  let websiteProjects = useSelector((state) => state.websiteProjects.value);
  let gameProjects = useSelector((state) => state.gameProjects.value);



  let getArtPreview = (artProjects, currentSelection) => {

    return (

      <img
        className="project-preview art-project-preview"
        src={artProjects[currentSelection]._projectPreview}
      />

    );

  }

  let getAudioPreview = (audioProjects, currentSelection) => {

    return (

      <audio
        className="project-preview audio-project-preview"
        src={audioProjects[currentSelection]._projectPreview}
        autoPlay
        controls
        controlsList='nodownload'
      >
      </audio >

    );

  }

  let getWebsitePreview = (websiteProjects, currentSelection) => {

    return (

      <figure
        className="project-preview website-project-preview"
      >
        <img
          alt="something"
          src={websiteProjects[currentSelection]._projectThumbnail}
        />
        <figcaption>
          <span>
            <b>{"Project Link: "}</b><br />
          </span>
          <a
            href={websiteProjects[currentSelection]._projectPreview}
            target='_blank'
          >
            {websiteProjects[currentSelection]._projectPreview.match(/[A-Z][a-z]+/g)}
          </a>
        </figcaption>
      </figure>

    );

  }

  let getGamePreview = (gameProjects, currentSelection) => {

    return (

      <figure
        className="project-preview website-project-preview"
      >
        <img

          alt="something"
          src={gameProjects[currentSelection]._projectThumbnail}
        />
        <figcaption>
          <span>
            <b>{"Project Link: "}</b><br />
          </span>
          <a
            href={gameProjects[currentSelection]._projectPreview}
            target='_blank'
          >
            {

              gameProjects[currentSelection]._projectPreview.match(/[0-9a-z]+[-]upload/g) ||
              gameProjects[currentSelection]._projectPreview.match(/[0-9a-z]+[-]demo/g)

            }
          </a>
        </figcaption>
      </figure>

    );

  }




  return (

    <div className="project-preview-area">
      {

        currentTab === 1 ? getArtPreview(artProjects, currentSelection) :
          currentTab === 2 ? getAudioPreview(audioProjects, currentSelection) :
            currentTab === 3 ? getWebsitePreview(websiteProjects, currentSelection) :
              currentTab === 4 ? getGamePreview(gameProjects, currentSelection) :
                ''

      }
    </div>

  );

}



export default ProjectPreviewArea;