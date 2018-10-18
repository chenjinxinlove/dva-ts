import { Reducer } from 'redux';

export type GlobalModelState = {
  collapsed: boolean;
};

export type GlobalModal = {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
  };
  reducers: {
    changeLayoutCollapsed: Reducer<any>;
  };
};

const globalModel: GlobalModal = {
  namespace: 'global',

  state: {
    collapsed: false
  },

  effects: {
  },

  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    }
  }
};

export default globalModel;
