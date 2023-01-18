import { PropsWithChildren } from 'react';
import styles from '@styles/index.module.css';

type ComponentPropsType = PropsWithChildren<{
  /**
   * Simple props description
   */
  simple: boolean;
  title: string;
  content: string;
  backgroundColor: string;
}>;

/**
 * Component component
 * simple description to explain what is this component
 *
 * @param {ComponentPropsType} props
 * @returns
 */
const Card = ({ title = 'test', content = 'test comntent', backgroundColor = 'cyan-light' }: ComponentPropsType) => {
  return (
    <div>
      <a href="#" className={`${styles.card} bg-cyan-light w-full h-[480px]`}>
        <h5 className="mb-2 text-5xl font-bold">{title}</h5>
        <p className="font-normal ">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </a>
    </div>
  );
};

export default Card;
