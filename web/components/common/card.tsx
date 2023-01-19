import { PropsWithChildren } from 'react';
import styles from '@styles/index.module.css';
import Image from 'next/image';

type ComponentPropsType = PropsWithChildren<{
  title: string;
  content: string;
  className?: string;
  height?: number;
  iconName?: string;
}>;

/**
 * Component component
 * simple description to explain what is this component
 *
 * @param {ComponentPropsType} props
 * @returns
 */
const Card = ({ title = 'test', content = 'test content', height, iconName }: ComponentPropsType) => {
  return (
    <div className={`${styles.card} bg-blue-lavender h-[450px]`}>
      <div>
        <h5 className="mb-2 text-5xl font-bold text-cyan">{title}</h5>
        <p className="text-xl text-blue-yonder mt-10">{content}</p>
      </div>
      <div className=" mt-6 flex justify-end">
        <Image src={`/icon/${iconName}`} alt={'icon image'} width={130} height={130} />
      </div>
    </div>
  );
};

export default Card;
