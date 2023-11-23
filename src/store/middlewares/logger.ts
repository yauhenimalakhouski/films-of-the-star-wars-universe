import { Middleware, Dispatch, AnyAction } from "redux";

export const loggerMiddleware: Middleware =
  (state) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    // console.log(state.getState(), action.type);

    next(action);
  };
