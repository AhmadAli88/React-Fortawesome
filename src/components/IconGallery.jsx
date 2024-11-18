import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBell, faHeart, faStar, faUser, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin, faFacebook, faInstagram, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons'; // Correctly importing brand icons

const IconGallery = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <h2>Solid Icons</h2>
      <div>
        <FontAwesomeIcon icon={faCoffee} size="3x" />
        <FontAwesomeIcon icon={faBell} size="3x" />
        <FontAwesomeIcon icon={faHeart} size="3x" />
        <FontAwesomeIcon icon={faStar} size="3x" />
        <FontAwesomeIcon icon={faUser} size="3x" />
        <FontAwesomeIcon icon={faHome} size="3x" />
        <FontAwesomeIcon icon={faSearch} size="3x" />
      </div>

      <h2>Brand Icons</h2>
      <div>
        <FontAwesomeIcon icon={faGithub} size="3x" />
        <FontAwesomeIcon icon={faTwitter} size="3x" />
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
        <FontAwesomeIcon icon={faFacebook} size="3x" />
        <FontAwesomeIcon icon={faInstagram} size="3x" />
        <FontAwesomeIcon icon={faYoutube} size="3x" />
        <FontAwesomeIcon icon={faGoogle} size="3x" />
      </div>
    </div>
  );
};

export default IconGallery;
