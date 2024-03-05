import { createAction, props } from "@ngrx/store";
import { create } from "domain";

export const showError = createAction(
    '[alert] showError',
    props<{message : string}>()
)

export const removeError = createAction(
    '[alert] removeError'
)