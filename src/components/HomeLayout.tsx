//lib
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
//styles
import styles from './HomeLayout.module.scss';
import EntranceImage from '../../public/images/entrance.jpg';
//MUI
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const HomeLayout: NextPage = () => {
  return (
    <div className={styles.root}>
      <Image src={EntranceImage} alt='EntranceImage' />
      <div className={styles.logo}>
        <h2>Tripper</h2>
      </div>
      <Button variant='contained' className={styles.login_button}>
        ログイン
      </Button>
      <div className={styles.home_text}>
        <h1>旅を共有して、いろいろな旅を知ろう</h1>
      </div>
      <TextField
        id='outlined-basic'
        label='メールアドレス'
        variant='outlined'
        className={styles.email_field}
      />
      <Button variant='contained' endIcon={<SendIcon />} className={styles.start_button}>
        いますぐはじめる
      </Button>
    </div>
  );
};
