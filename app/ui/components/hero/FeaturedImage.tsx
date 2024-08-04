'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SoSweetMockup from '@/public/assets/images/SoSweet_Mockup.png';
import SoSweetMockupDark from '@/public/assets/images/SoSweet_Mockup_Dark.png';
import SSPhone1 from '@/public/assets/images/sosweet_layers/phone_1.png';
import SSPhone2 from '@/public/assets/images/sosweet_layers/phone_2.png';
import SSPhoneBack from '@/public/assets/images/sosweet_layers/phone_back.png';
import SSShadowDark from '@/public/assets/images/sosweet_layers/shadows_dark.png';
import SSShadowLight from '@/public/assets/images/sosweet_layers/shadows_light.png';
import styles from './featured.module.css';

function FeaturedImage() {
  return (
    <div className={` ${styles.right_column} ${styles.sosweet} `}>
      <motion.div
        className={`${styles.sosweet_mockup}`}
        initial={{ x: -35, y: 93, rotate: -25 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ ease: 'easeInOut' }}
        whileHover={{ x: -35, y: 93, rotate: -25 }}
      >
        <Image src={SSPhoneBack} alt="" priority={true} />
      </motion.div>
      <motion.div
        className={`${styles.sosweet_mockup}`}
        initial={{ x: 28, y: 72, rotate: 20 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ ease: 'easeInOut' }}
        whileHover={{ x: 28, y: 72, rotate: 20 }}
      >
        <Image src={SSPhone2} alt="" priority={true} />
      </motion.div>
      <motion.div
        className={`${styles.sosweet_mockup}`}
        initial={{ x: -25, y: 15, rotate: -8 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ ease: 'easeInOut' }}
        whileHover={{ x: -25, y: 15, rotate: -8 }}
      >
        <Image src={SSPhone1} alt="" priority={true} />
      </motion.div>
      <Image
        src={SSShadowLight}
        alt=""
        priority={true}
        className={`${styles.sosweet_mockup} ${styles.imgLight}`}
      />
      <Image
        src={SSShadowDark}
        alt=""
        priority={true}
        className={`${styles.sosweet_mockup} ${styles.imgDark}`}
      />
      {/* <Image
        src={SoSweetMockupDark}
        alt=""
        priority={true}
        className={`${styles.sosweet_mockup} ${styles.imgDark}`}
      />
      <Image
        src={SoSweetMockupDark}
        alt=""
        priority={true}
        className={`${styles.sosweet_mockup} ${styles.imgDark}`}
      /> */}
      <svg
        width="650"
        height="443"
        className={styles.sosweet_bg}
        viewBox="0 0 650 443"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <ellipse
          cx="69.6033"
          cy="74.6112"
          rx="69.6033"
          ry="74.6112"
          className={styles.sosweet_ellipse}
        />
        <path
          d="M465.367 442.5C400.302 442.5 352.107 365.564 352.107 328.066C352.107 258.242 424.4 203.934 487.657 203.934C561.156 203.934 572 255.656 572 293.154C572 330.652 538.263 442.5 465.367 442.5Z"
          mask="url(#pattern-mask)"
          className={styles.sosweet_pattern}
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="0.0545719"
            height="0.0503006"
          >
            <use
              xlinkHref="#image0_185_645"
              transform="scale(0.00454766 0.00419172)"
            />
          </pattern>
          <mask id="pattern-mask" x="0" y="0" width="1" height="1">
            <rect
              x="350"
              y="200"
              width="220"
              height="245"
              fill="url(#pattern0)"
            />
          </mask>
          <image
            id="image0_185_645"
            width="12"
            height="12"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA4SURBVHgB7cwxEQAwCATBQzm4QgQaEiskOIAuRb75ZueExla4CWiCtfAOz/v68SO4NsEVZ4IrfgCccWkURPNAMQAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </div>
  );
}

export default FeaturedImage;
