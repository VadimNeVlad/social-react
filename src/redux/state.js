import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const store = {
  _state: {
    profilePage: {
      postData: [
        { msg: 'Hello!', likeCount: 25 },
        { msg: 'This is my first post', likeCount: 48 },
      ],
      newPostText: 'Type Message',
    },
    dialogPage: {
      msgData: [
        { id: 1, msg: 'Hello!!!' },
        { id: 2, msg: 'What are you doing?' },
        { id: 3, msg: 'Im sleep' },
        { id: 4, msg: 'Ok' },
      ],
      dialogData: [
        { id: 1, name: 'Jake' },
        { id: 2, name: 'Emma' },
        { id: 3, name: 'Amanda' },
        { id: 4, name: 'Tom' },
      ],
      newDialogMsg: '',
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
