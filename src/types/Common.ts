export type PageProps<p> = {
  withMenu: boolean;
  pageHookProps?: p;
};

export type ChildProps = {
  children: React.ReactElement[] | React.ReactElement | boolean;
  id: string;
};

export type ValueOf<T> = T[keyof T];
