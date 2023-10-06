import { Reducer, useReducer } from "react";

interface StateField {
  value: string;
  error: boolean;
  success: boolean;
}

interface InitialState {
  username: StateField;
  password: StateField;
}

interface ActionField<T = InitialState> {
  value: string;
  name: keyof T;
}

interface ActionChange<T = ActionField> {
  type: "change";
  field: T;
}

interface DispatchEventOptions {
  type: "change";
  fieldName: string;
  fieldValue: string;
}

const initialState: InitialState = {
  username: {
    value: "",
    error: false,
    success: false,
  },
  password: {
    value: "",
    error: false,
    success: false,
  },
};

const reducer: Reducer<InitialState, ActionChange> = (state, action) => {
  switch (action.type) {
    case "change": {
      const { field } = action;

      const newState = {
        ...state,
        [field.name]: {
          ...state[field.name],
          value: field.value,
        },
      };

      return newState;
    }

    default:
      throw new Error("Invalid action type");
  }
};

export const useLoginFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchEvent = (options: DispatchEventOptions): void => {
    console.warn("dispatchEvent", options);

    dispatch({
      type: options.type,
      field: {
        name: options.fieldName as keyof InitialState,
        value: options.fieldValue,
      },
    });
  };

  return {
    state,
    dispatch,
    dispatchEvent,
  };
};
