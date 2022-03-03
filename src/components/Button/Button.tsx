// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Based on https://www.figma.com/file/sCAngiTf2mPOWPo9kcoEE7/SubQuery-Design-System?node-id=26%3A3

import * as React from 'react';
// import clsx from 'clsx';
import cx from "classnames";

// antd
import { Button as Button_antd } from 'antd';
import { NativeButtonProps } from "antd/lib/button/button.d";

// styles
import styles from './styles/style.module.less';

// export interface IProps extends NativeButtonProps {
//   radius?: boolean;
// }

// not extending NativeButtonProps yet as it is easier to see all the props in one place to decide how we will use them...

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
  // colour?: 'gradient';
  gradient?: boolean;
  label?: string;
  outlined?: boolean;
  // it looks like antd considers ghost to mean outlined...

  // should we do our own icons?
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  // >>> ANTD PROPS
  disabled = false,
  size = 'large',
  type = 'default',
  icon,

  // >>> SQ PROPS
  outlined = false,
  gradient = false,
  label,
  leftIcon,
  rightIcon
}) => {
  return (
    <Button_antd
      // antd props
      type={type}
      size={size}
      shape='round'
      disabled={disabled}

      className={cx(
        // >>> ADDING subquery styles
        gradient && styles.gradient,
        outlined && styles.outlined,

        // >>> MODIFYING existing antd styles
        type === 'link' && styles.link,
        type === 'text' && styles.text,
        type === 'default' && styles.default
        )}
    >
      {leftIcon}{label}{rightIcon}
    </Button_antd>
  );
};