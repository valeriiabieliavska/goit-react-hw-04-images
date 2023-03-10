import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { webformatURL, tags, largeImageURL } = image;

  const handleToggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={handleToggleModal}
        />
      </li>
      {isModalOpen && <Modal url={largeImageURL} onClose={handleToggleModal} />}
    </>
  );
};


ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};


