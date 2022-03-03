// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Based on https://www.figma.com/file/sCAngiTf2mPOWPo9kcoEE7/SubQuery-Design-System?node-id=26%3A3

import * as React from 'react';
import clsx from 'clsx';

// antd
import { Button as Button_antd } from 'antd';

// styles
import styles from './styles/style.module.less';

type Props = {
  // antd props
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: string;
  icon?: React.ReactNode;
  loading?: boolean | { delay?: number };
  shape?: 'deafult' | 'circle' | 'round';
  size?: 'large' | 'middle' | 'small';
  target?: string;
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  onClick?: (event) => void;

  // sq props
  // colour?: 'primary' | 'neutral' | 'gradient';
  colour?: 'gradient';
  label?: string;
  filled?: boolean;
  outlined?: boolean;
  // it looks like antd considers ghost to mean outlined...

}

export const Button: React.FC<Props> = ({
  size = 'large',
  type = 'default',
  colour,
  label,
  disabled = false,
  // filled = true 
  outlined,
  ghost
}) => {
  return (
    <Button_antd
      // antd props
      type={type}
      size={size}
      shape='round'
      disabled={disabled}
      ghost = {ghost}

      // applying sq styles
      className={clsx(
        'test',
        styles[colour],
        outlined && styles.outlined,
        type === 'link' && styles.link,
        )}
    >
      {label}
    </Button_antd>
  );
};