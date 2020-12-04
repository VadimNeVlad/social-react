import React from "react";
import { connect } from "react-redux";
import { addMsgCreator, updateMsgCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMsg: () => {
      dispatch(addMsgCreator());
    },
    updateNewMsg: (target) => {
      dispatch(updateMsgCreator(target));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
