import React, { useContext } from "react";
import Modal from "../../utilities/Modal";
import WrapperButton from "../../utilities/WrapperButton";
import ButtonClose from "../../utilities/ButtonClose";
import classes from "./PurchaseSuccess.module.css";
import { ColorModeContext } from "../../../context/ColorModeContext";
import { CartContext } from "../../../context/CartContext";

const PurchaseSuccess = ({ onClose }) => {
  const { isDarkMode } = useContext(ColorModeContext);
  const { itemsCart } = useContext(CartContext);

  const generateWhatsAppMessage = () => {
    const itemsInCartMessage = itemsCart.items.map(
      (item) => `${item.amount}x ${item.name}`
    );
    const message = `Olá, estou interessado nos seguintes produtos:\n${itemsInCartMessage.join(
      "\n"
    )}`;
    return encodeURIComponent(message);
  };

  return (
    <Modal onClose={onClose} isDarkMode={isDarkMode}>
      <div className={classes.modal}>
        <p className={classes.title}>Muito Bem!</p>
        <p>Estamos te redirecionando para o WhatsApp.</p>
        <WrapperButton className={classes.button}>
          <a
            href={`https://wa.me/11951694473/?text=${generateWhatsAppMessage()}`}
          >
            Clique aqui para confirmar
          </a>
        </WrapperButton>
      </div>
      <ButtonClose onClose={onClose} />
    </Modal>
  );
};

export default PurchaseSuccess;
