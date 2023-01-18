import Card from '@components/common/card';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import styles from './Component.module.css';

type ComponentPropsType = PropsWithChildren<{
  /**
   * Simple props description
   */
}>;

/**
 * Component component
 * simple description to explain what is this component
 *
 * @param {ComponentPropsType} props
 * @returns
 */
const Services = ({}: ComponentPropsType) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const feature = ['feature', 'feature', 'feature', 'feature', 'feature', 'feature'];
  return (
    <div>
      {feature.map((item, index) => (
        <div className="my-4 mx-4 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Card title={item} simple={false} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Services;
