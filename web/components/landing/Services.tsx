import Card from '@components/common/card';
import { SERVICES_LIST } from '@constants/dataMock';
import { motion } from 'framer-motion';
import { Fragment, PropsWithChildren } from 'react';

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
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const variantsUl = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-4">
        {SERVICES_LIST.map((item, index) => (
          <div key={index} className="my-4 mx-4 flex justify-center w-[100%]">
            <motion.ul className="container" variants={container} initial="hidden" animate="visible">
              <motion.li key={index} className="item" variants={variantsUl}>
                <Card title={item?.title} content={item?.Description} height={500} iconName={item?.icon} />
              </motion.li>
            </motion.ul>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
