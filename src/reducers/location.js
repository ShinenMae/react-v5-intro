export default function location(state = "Seattle, WA", action) {
    switch (action.type) {
      case "CHANGE_LOCATION":
        return action.payload;
      default:
        return state;
    
    {type: 'CHANGE_LOCATION'; 
    payload: 'Salt Lake City, UT'}
    }
  }  