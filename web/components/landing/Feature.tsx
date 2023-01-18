import { PropsWithChildren } from 'react';
import styles from './Component.module.css';

type ComponentPropsType = PropsWithChildren<{
  /**
   * Simple props description
   */
  simple: boolean;
}>;

/**
 * Component component
 * simple description to explain what is this component
 *
 * @param {ComponentPropsType} props
 * @returns
 */
const Component = ({ simple, children }: ComponentPropsType) => {
  return <div className={styles.Component}>{children}</div>;
};

export default Component;
