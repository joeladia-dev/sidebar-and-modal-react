import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content 😍</h3>
        <p>
          I'm baby subway tile DSA austin chia hashtag quinoa pabst meh
          vexillologist bespoke narwhal franzen cold-pressed lumbersexual cloud
          bread. Biodiesel polaroid sartorial yuccie. Slow-carb raclette fixie
          skateboard kinfolk single-origin coffee. Fam venmo DIY copper mug
          narwhal. Copper mug blue bottle jianbing praxis semiotics.
          Cold-pressed small batch sartorial meh normcore franzen mixtape
          poutine freegan gluten-free 8-bit. Whatever blog roof party keffiyeh.
          Enamel pin ennui intelligentsia portland. Chambray vexillologist
          try-hard stumptown distillery .
        </p>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
