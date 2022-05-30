/** @jsxImportSource @emotion/react */
import { UseUserModal } from "../../context/modalContext";

import { card, title, button } from "./style";

const Alert = () => {
  const { modalActive, setModalActive } = UseUserModal();

  return (
    <button type="button" css={card(modalActive)}>
      <p css={title}>
        <span>To be</span>
        <span>Announced</span>
      </p>
      <div
        css={button}
        onClick={() => {
          setModalActive(false);
        }}
      >
        X
      </div>
    </button>
  );
};

export default Alert;
