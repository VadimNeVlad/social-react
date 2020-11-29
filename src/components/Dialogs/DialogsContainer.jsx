import React from 'react';
import { connect } from 'react-redux';
import { addMsgCreator, updateMsgCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogPage;

        const addMsg = () => {
          store.dispatch(addMsgCreator());
        };

        const updateNewMsg = (target) => {
          store.dispatch(updateMsgCreator(target));
        };

        return (
          <Dialogs
            addMsg={addMsg}
            updateNewMsg={updateNewMsg}
            dialogPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

const SuperDialogsContainer = connect();

export default DialogsContainer;
