import { Fragment, PropsWithChildren } from 'react';
import Header from './Header';

type LayoutPropsType = PropsWithChildren<{
  /**
   * Simple props description
   */
}>;

/**
 * Layout Layout
 * simple description to explain what is this Layout
 *
 * @param {LayoutPropsType} props
 * @returns
 */
const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Fragment>
      <Header />
      {/* <Sidebar menuActive={activeMenu} /> */}
      <div>{children}</div>
    </Fragment>
  );
};

export default Layout;
