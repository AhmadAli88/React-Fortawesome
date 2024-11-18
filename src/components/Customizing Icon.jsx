import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Customize = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} size="2x" color="blue" />
      <FontAwesomeIcon icon={faCoffee} size="4x" color="red" />
    </div>
  );
};

export default Customize;
