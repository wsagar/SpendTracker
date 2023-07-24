import { Actions } from "./action";
export const Action = {
  BUSY: "busy",
  SUCCESS: "success",
  ERROR: "error",
  NONE: "none",
};
const initilaState = {
  user: null,
  trades: [],
  actions: {
    user: Action.NONE,
    trades: Action.NONE,
  },
};

export const reducer = (state = initilaState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        actions: {
          ...state.actions,
          user: Action.BUSY,
        },
      };
    case Actions.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        actions: {
          ...state.actions,
          user: Action.SUCCESS,
        },
      };
    }
    case Actions.LOGIN_ERROR: {
      return {
        ...state,
        actions: {
          ...state.actions,
          user: Action.ERROR,
        },
      };
    }
  }
};
