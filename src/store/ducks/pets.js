/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'pets/ADD_REQUEST',
  ADD_SUCCESS: 'pets/ADD_SUCCESS',
  ADD_FAILURE: 'pets/ADD_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
};

export default function pets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Action
 */
export const Creators = {
  addPetRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addPetSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addPetFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
