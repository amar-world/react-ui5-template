import Axios from "axios";
import { CONSTANTS } from "../common/config";
import { ACTION_TYPE } from "../actionType/ActionType";

export const getCommonDropdown = (data) => (dispatch) => {
    const url = CONSTANTS.URL + "common-dropdown";
    dispatch({
      type: ACTION_TYPE.COMMON.GET_COMMON_DROPDOWN,
      payload: [],
    });
   /*  Axios({
      url: url,
      method: "GET",
      dataType: "JSON",
      data: data,
    })
      .then((response) => {
        dispatch({
          type: ACTION_TYPE.HEADER.GET_NAVIGATION_LIST,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      }); */
};
  /* export const getSideNavigationData = (data) => (dispatch) => {
  
  const loginReturn = new Promise((resolve, reject) => {
    const url = CONSTANTS.URL + "login";
    Axios({
      url: url,
      method: "GET",
      dataType: "JSON",
      data: data,
    })
      .then((response) => {
        // console.log(response);
        dispatch({
          type: ACTION_TYPE.HEADER.GET_NAVIGATION_LIST,
          payload: response.data,
        });
        resolve({isSuccess:true});
      })
      .catch((error) => {
        reject({isSuccess:false});
        console.log(error);
      });
  });
  return loginReturn;
}; */