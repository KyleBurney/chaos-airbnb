import initialState from './initial_state';
import * as allActions from '../actions/action_types';

export default function ui(state = initialState.ui, action) {
    switch (action.type) {
        case allActions.LOAD_MAIN_PANEL_COMPONENT:
            return Object.assign({}, state, { ...state, mainPanelComponent: action.data });
        default:
            return state;
    }
}