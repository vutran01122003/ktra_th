import { getDataApi } from "../utils/fetchData";
import GLOBALTYPES from "./globalTypes";

export const getBikes = () => async (dispatch) => {
    try {
        const res = await getDataApi("/bikes");
        console.log(res.data);
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
