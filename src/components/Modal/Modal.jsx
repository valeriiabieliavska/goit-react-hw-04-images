import { useEffect } from 'react';

export const Modal = ({ url, onClose }) => {
const onEscape = event => {
if (event.code === 'Escape') {
onClose();
}
};

useEffect(() => {
window.addEventListener('keydown', onEscape);
return () => {
window.removeEventListener('keydown', onEscape);
};
}, [onEscape]);

const handleModalClose = event => {
if (event.currentTarget === event.target) {
onClose();
}
};
  
  return (
<div className="Overlay" onClick={handleModalClose}>
<div className="Modal">
<img src={url} alt="IMG" />
</div>
</div>
);
}


