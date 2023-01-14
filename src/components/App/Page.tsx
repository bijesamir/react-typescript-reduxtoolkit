import React, { useEffect } from 'react';
interface Props {
  title: string;
  children: React.ReactNode;
}

/**
 * Render this as parent component of the page you want to render originally
 */
export default function Page(props: Props) {
  useEffect(() => {
    document.title = 'REACT ' + props.title;
  }, [props.title]);
  return <>{props.children}</>;
}
