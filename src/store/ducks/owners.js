/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'owners/ADD_REQUEST',
  ADD_SUCCESS: 'owners/ADD_SUCCESS',
  ADD_FAILURE: 'owners/ADD_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
};

export default function owners(state = INITIAL_STATE, action) {
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
  addOwnerRequest: owner => ({
    type: Types.ADD_REQUEST,
    payload: { owner },
  }),

  addOwnerSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addOwnerFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
