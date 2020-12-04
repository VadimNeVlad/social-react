const ADD_MSG = "SEND-MSG";
const UPDATE_MSG = "UPDATE-MSG";

const initialState = {
  msgData: [
    { id: 1, msg: "Hello!!!" },
    { id: 2, msg: "What are you doing?" },
    { id: 3, msg: "Im sleep" },
    { id: 4, msg: "Ok" },
  ],
  dialogData: [
    { id: 1, name: "Jake" },
    { id: 2, name: "Emma" },
    { id: 3, name: "Amanda" },
    { id: 4, name: "Tom" },
  ],
  newDialogMsg: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MSG:
      let count = state.msgData.length + 1;

      const newMsg = {
        id: count++,
        msg: state.newDialogMsg,
      };

      return {
        ...state,
        newDialogMsg: "",
        msgData: [...state.msgData, newMsg],
      };
    case UPDATE_MSG:
      return {
        ...state,
        newDialogMsg: action.value,
      };
    default:
      return state;
  }
};

export const addMsgCreator = () => ({ type: ADD_MSG });

export const updateMsgCreator = (text) => {
  return {
    type: UPDATE_MSG,
    value: text,
  };
};

export default dialogReducer;
