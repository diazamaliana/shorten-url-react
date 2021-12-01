export interface IMenu {
  title: string;
  path?: string;
  subMenu?: IMenu[];
}

export interface ISocial {
  name: string;
  src: string;
  path: string;
}
