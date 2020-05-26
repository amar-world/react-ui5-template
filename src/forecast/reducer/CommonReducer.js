import { cloneDeep } from 'lodash';
import { ACTION_TYPE } from '../actionType/ActionType';
let initialState = {
  statusList: [
    { key: "NEW", value: "New" },
    { key: "INPROGRESS", value: "In Progress" },
    { key: "COMPLETED", value: "Completed" },
    { key: "INTESTING", value: "In Testing" }
  ],
  priorityList: [
    { key: "LOW", value: "Low" },
    { key: "HIGH", value: "High" },
    { key: "INVALID", value: "Invalid" },
    { key: "MEDIUM", value: "Medium" }],
  ProjectTypeList: [
    { key: "IN", value: "Internal" },
    { key: "EX", value: "External" }
  ]
}
export const CommonReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case ACTION_TYPE.COMMON.GET_NAVIGATION_LIST: {
      newState = cloneDeep(state);
      return newState;
    }
    /*     case ActionType.GET_ADMIN_USER_DATA:{
            newState = cloneDeep(state);
            newState.adminUser = action.payload;
            return newState;
        }
        case ActionType.GET_DASHBOARD_DATA: {
            newState = cloneDeep(state);
            newState.taskList = action.payload;
            return newState;
        }
        case ActionType.SET_LOGOUT_TIME: {
            newState = cloneDeep(state);
            newState.logoutTimeRemaning = action.payload;
            return newState;
        } */
    default: {
      return newState;
    }
  }
}
const navigationListData = () => {
  const treeData = [
    {
      title: "Project1",
      groupId: "PROJECT",
      key: "0-1",
      children: [
        {
          title: "Sprint1",
          groupId: "SPRINT",
          key: "0-0-1",
          children: [
            {
              title: "Story1",
              groupId: "STORY",
              key: "0-0-0-1",
            },
            {
              title: "story2",
              groupId: "STORY",
              key: "0-0-0-2",
            },
            {
              title: "story3",
              groupId: "STORY",
              key: "0-0-0-3",
            },
          ],
        },
        {
          title: "Sprint2",
          groupId: "SPRINT",
          key: "0-0-2",
          children: [
            {
              title: "Story1",
              groupId: "STORY",
              key: "0-0-0-21",
            },
            {
              title: "story2",
              groupId: "STORY",
              key: "0-0-0-22",
            },
            {
              title: "story3",
              groupId: "STORY",
              key: "0-0-0-23",
            },
          ],
        },
        {
          title: "Sprint3",
          groupId: "SPRINT",
          key: "0-0-3",
          children: [
            {
              title: "Story1",
              groupId: "STORY",
              key: "0-0-0-31",
            },
            {
              title: "story2",
              groupId: "STORY",
              key: "0-0-0-32",
            },
            {
              title: "story3",
              groupId: "STORY",
              key: "0-0-0-33",
            },
          ],
        }
      ],
    },
    {
      title: "Project2",
      groupId: "PROJECT",
      key: "0-2",
      children: []
    },
  ];
  return treeData;
}