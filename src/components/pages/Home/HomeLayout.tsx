//- フレームワーク
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';

//- スタイル
import styles from './HomeLayout.module.scss';
import EntranceImage from '../../../../public/images/entrance.jpg';

//- MUI
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const HomeLayout: NextPage = () => {
  //- フレームワーク
  const router = useRouter();
  //- 関数定義
  const handleClick = () => {
    router.push('../Register/Register');
  };

  return (
    <div className={styles.root}>
      <Image src={EntranceImage} alt='EntranceImage' className={styles.home_image} />
      <div className={styles.logo}>Tripper</div>
      <Button variant='contained' size='medium' className={styles.login_button}>
        ログイン
      </Button>
      <div className={styles.home_text}>
        <h1>旅を共有して、いろいろな旅を知ろう</h1>
      </div>
      <Button
        variant='contained'
        endIcon={<SendIcon />}
        size='large'
        onClick={handleClick}
        className={styles.register_button}
      >
        メンバーになってはじめる
      </Button>
      <Button variant='contained' endIcon={<SendIcon />} className={styles.start_button}>
        いますぐはじめる
      </Button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default HomeLayout;
