// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';

// antd
import { Button as Button_antd } from 'antd';

type Props = {

}

// type Props = {
//   type?: 'primary' | 'secondary' | 'link';
//   size?: 'large' | 'medium' | 'small';
//   colorScheme?: 'gradient' | 'standard' | 'neutral';
//   label?: string;
//   leftItem?: React.ReactNode;
//   rightItem?: React.ReactNode;
//   onClick?: () => void;
//   href?: string;
//   className?: string;
//   disabled?: boolean;
//   loading?: boolean;
// } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button: React.VFC<Props> = ({
}) => {
  return (
    // <Button_antd type='primary' className={styles.button} />
    <Button_antd type='primary' shape='round' >Test</Button_antd>
  );
};