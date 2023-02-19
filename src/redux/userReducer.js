import { LOGIN, LOGOUT } from "./userActions"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// store에 저장될 회원정보의 초기값
const initialState = {
  id: null,
  username: null,
  email: null,
  firstName: null,
  lastName: null,
  gender: null,
  image: null,
  token: null,
};

// dispatch로 전달받은 action의 type에 따라 실행하는 reducer 함수
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...action.payload };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

// persistReducer의 첫번째 인자에 넣어줄 객체
const persistConfig = {
  key: "userInfo",
  storage,
}

export default persistReducer(persistConfig, userReducer);