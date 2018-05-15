import * as allActions from './action_types';

export function loadMainPanelComponent(component) {
    return (dispatch) => {
        dispatch({type: allActions.LOAD_MAIN_PANEL_COMPONENT, data: component})
    };
}