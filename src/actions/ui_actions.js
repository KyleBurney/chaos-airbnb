import * as allActions from './action_types';

export function loadMainPanelComponent(component) {
    return (dispatch) => {
        dispatch(receiveMainPanelComponent(component))
    };
}
function receiveMainPanelComponent(data) {
    return {type: allActions.LOAD_MAIN_PANEL_COMPONENT, data: data};
}