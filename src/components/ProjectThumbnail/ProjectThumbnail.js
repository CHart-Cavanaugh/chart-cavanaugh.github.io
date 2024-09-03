import { useDispatch, useSelector } from "react-redux";
import { setSelection } from "../../app/slices/currentSelectionSlice";



function ProjectThumbnail(props) {

  let dispatch = useDispatch();

  return (

    <figure className="project-thumbnail" >
      <img className="thumbnail-image" src={props.myImage} onClick={(event) => {
        dispatch(setSelection(props.myOrder - 1));
      }} />
      <figcaption>{props.myOrder}</figcaption>
    </figure>

  );

}

export default ProjectThumbnail;