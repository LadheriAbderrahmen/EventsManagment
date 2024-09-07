import { combineReducers } from 'redux';
import EventsReducer from './CreateEvenet/reducer';
import SideBarReducer from './SideBar/reducer';

const rootReducer = combineReducers({
    EventsReducer,
    SideBarReducer
});

export default rootReducer;
