import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import styles from './HomeLayout.module.scss';
import { TextField } from '@mui/material';
import EntranceImage from '../../public/images/entrance.jpg';

export const HomeLayout: NextPage = () => {
  return (
    <div className={styles.root}>
      <Image src={EntranceImage} alt='EntranceImage' />
      <TextField
        id='outlined-basic'
        label='メールアドレス'
        variant='outlined'
        className={styles.email_field}
      />
    </div>
  );
};
