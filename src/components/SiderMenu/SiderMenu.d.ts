
import * as React from 'react';

export interface IgetIcon {
  icon: string;
}

interface Imenu {
  path: string
}

export interface IgetFlatMenuKeys {
  menu:Imenu[];
}

export interface IgetMenuMatchKeys {
  flatMenuKeys: string[];
  paths: string[];
}

export interface ISiderMenupRrops {
  menuData: any;
  location?: string;
  isMobile?: boolean;
  onCollapse?: () => void;
}

export default class SiderMenu extends React.PureComponent <ISiderMenupRrops, any> {

}
