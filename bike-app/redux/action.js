import { getDataApi, postDataApi } from "../utils/fetchData";
import GLOBALTYPES from "./globalTypes";

export const getBikes = () => async (dispatch) => {
    try {
        const res = await getDataApi("/bikes");
        dispatch({
            type: GLOBALTYPES.BIKE.GET_BIKES,
            payload: {
                bikes: res.data
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const addBike = (data) => async (dispatch) => {
    try {
        const res = await postDataApi("/bikes", data);

        dispatch({
            type: GLOBALTYPES.BIKE.ADD_BIKE,
            payload: {
                bike: res.data
            }
        });
    } catch (error) {
        console.log(error);
    }
};
