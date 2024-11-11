import GLOBALTYPES from "./globalTypes";

const initialState = {
    bikeList: []
};

const todoReducer = function (state = initialState, action) {
    switch (action.type) {
        case GLOBALTYPES.BIKE.GET_BIKES: {
            return {
                ...state,
                bikeList: [...action.payload.bikes]
            };
        }
        case GLOBALTYPES.BIKE.ADD_BIKE: {
            return {
                ...state,
                bikeList: [...action.payload.bikes, action.payload.bike]
            };
        }
        default:
            return state;
    }
};

export default todoReducer;
