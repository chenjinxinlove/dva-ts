/**
 * 统一声明自定义类型
 */

declare module '*.less';
declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

declare module 'enquire-js';
declare module 'react-document-title';
declare module 'prop-types';
declare module 'tui-editor';

declare module 'dva/router';
declare module 'dva/fetch';
declare module 'dva/dynamic';
declare module 'qs';
declare module 'codemirror';

declare module 'classnames' {
  export default function classNames(...args: any[]): any;
}

declare module 'path-to-regexp' {
  export default function pathToRegxp(path: string | RegExp): RegExp;
}

declare module 'dva-loading' {
  export default function createLoading(): any;
}

declare module 'redux-logger' {
  export function createLogger(): any;
}
