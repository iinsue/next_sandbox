import PropTypes from "prop-types";

const FilesDragAndDrop = ({ onUpload }: any) => {
  return (
    <div className="files-drag-and-drop__area">
      Hey, drop me some files
      <span role="img" aria-label="emoji" className="area__icon">
        &#128526;
      </span>
    </div>
  );
};

export default FilesDragAndDrop;

FilesDragAndDrop.propTypes = {
  onUpload: PropTypes.func.isRequired,
};
