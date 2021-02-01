import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';

function WomanCard({ woman }) {
  console.log(woman);

  const [modalState, setModalState] = useState({
    visible: false,
    loading: false,
  });

  const showModal = () => {
    setModalState({
      ...modalState,
      visible: true,
    });
  };

  const handleOk = e => {
    console.log(e);

    setModalState({ ...modalState, loading: true });
    setTimeout(() => {
      setModalState({ loading: false, visible: false });
    }, 1000);
  };

  const handleSubmit = e => {
    console.log(e);
    setModalState({
      visible: false,
    });
  };

  return (
    <div>
      <Button type="primary" onClick={showModal} className="short-woman">
        <p>{woman.name}</p>
        <p>{woman.STEM}</p>
        <p>{woman.field}</p>
        <p>{woman.blurb}</p>
      </Button>
      <Modal
        visible={modalState.visible}
        title={woman.name}
        onOk={handleOk}
        onCancel={handleSubmit}
        centered
        footer={[
          <Button key="back" onClick={handleSubmit}>
            Reject
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={modalState.loading}
            onClick={handleOk}
          >
            Accept
          </Button>,
        ]}
      >
        <h3>STEM: {woman.STEM}</h3>
        <h3>Field: {woman.field}</h3>
        <p>Blurb: {woman.Blurb}</p>
        <p>Description: {woman.description}</p>
        <h6>Sources: </h6>
        {woman.sources.map(source => (
          <h6>{source}</h6>
        ))}
      </Modal>
    </div>
  );
}

export default WomanCard;
