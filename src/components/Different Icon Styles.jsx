import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const DifferentStyles = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faBell} />
    </div>
  );
};

export default DifferentStyles;
