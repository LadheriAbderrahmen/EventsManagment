const initialState = {
  Events:[]
};

const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AddEvent':
      return {
        ...state,
        Events: [...state.Events, ...action.data]
      };
      case 'EditEvent':
        return{
          ...state,
          Events: state.Events.map((ev)=> ev.EventId === action.data.EventId ? {...ev , ...action.data} : ev
        )
        }
    case 'DeleteEvent':
      return{
        ...state,
        Events: state.Events.filter(e => e.EventId !== action.Id)
      }
    default:
      return state;
  }
};

export default EventsReducer;
