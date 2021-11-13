import { Action } from "../actions";
import { ActionType } from "../action-type";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  if (action.type === ActionType.SEARCH_REPOSITORIES_SUCCESS) {
    // 100% certainty that 'action' satsifies the
    // SearchRepositoriesSuccessAction interface
    // typeof action.payload === Array<string> = true
  }
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // 100% certainty that 'action' is SearchRepositoriesSuccessAction
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
