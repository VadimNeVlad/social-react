const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const initialState = {
  postData: [
    { msg: "Hello!", likeCount: 25 },
    { msg: "This is my first post", likeCount: 48 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let count = state.postData.length + 1;

      let newPost = {
        id: count++,
        msg: state.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.value,
      };
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updatePostCreator = (text) => {
  return {
    type: UPDATE_POST,
    value: text,
  };
};

export default profileReducer;
