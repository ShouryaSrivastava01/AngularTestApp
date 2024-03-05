import { createReducer, on} from "@ngrx/store";
import { removeError, showError } from "./alert.action";

const message = null
export const alertMessage = createReducer(
    message,
    on(showError, (state,action)=> state = action.message),
    on(removeError, (state)=> state = null)

)