import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});

//BQCwB5L_72VoSBrmUvkj3QhNK_Ybpd53xAHu6jH2mxSlDxYc9loT1DWYyjb1Qc-ozD69B70iVfDTAfCiGY3t2YXnnAuK7y9Z1mHMFIXoSgYIEPYuk2LwHtv26C6gqJ-f9rYUzyzdc7yHk7CAnYyl
