const Modal = ({ modalOpen, data }) => {
  return (
    <div
      className="modal-container"
      style={!modalOpen ? { display: "none" } : null}
    >
      <div className="modal">
        <button className="btn btn--close" onClick={() => handleModal()}>
          X
        </button>
        <div className="modal__body">
          <h1 className="modal__title">
            {data.author} {data.points}
          </h1>
          <h2 className="modal__subtitle">
            Having a website in 2021 is essential.
          </h2>
          <ul>
            <span>How I will help you :</span>
            <li>Discover together your goals through a strategy session</li>
            <li>Discuss about the possible solutions to implement</li>
            <li>A glorious online presence a.k.a. website</li>
          </ul>
        </div>
        <div className="modal__footer">
          <p>Wanna put your business out there ?</p>
          <button className="btn btn--main">{data.title}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
