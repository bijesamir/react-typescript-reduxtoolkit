import { PageProps } from './Common';

export interface RouteItem {
  path: string;
  title: string;
  component: React.FC<PageProps<null>>;
}
