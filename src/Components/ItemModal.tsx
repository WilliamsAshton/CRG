import React from 'react';
import { Modal, Button } from '@mantine/core';
import styles from '../CSS/ItemModal.module.css';

interface ItemModalProps {
  show: boolean;
  onClose: () => void;
  item: any | null;
}

const ItemModal: React.FC<ItemModalProps> = ({ show, onClose, item }) => {
  return (
    <Modal opened={show} onClose={onClose} title="Item Details" centered>
      {item && (
        <div className={styles.modalContent}>
          <h2>{item.Title}</h2>
          <img src={`https://arthurfrost.qflo.co.za/${item.Image}`} alt={item.Title} className={styles.modalImage} />
          <p><strong>ID:</strong> {item.Id}</p>
          <p><strong>Category:</strong> {item.Category}</p>
        </div>
      )}
      <Button onClick={onClose} color="blue" fullWidth>Close</Button>
    </Modal>
  );
};

export default ItemModal;