//- フレームワーク
import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//- 共通
import { auth } from '../../../firebase';
import { login } from '../../../userSlice';
import { Router } from '../../../router/router';

//- スタイル
import styles from './HomeLayout.module.scss';
import EntranceImage from '../../../../public/images/entrance.jpg';

//- MUI;
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const HomeLayout: NextPage = () => {
  //- フレームワーク
  const router = useRouter();
  const dispatch = useDispatch();

  //- 関数定義
  const onClickRegister = () => {
    router.push(Router.register.path);
  };
  const onClickLogin = () => {
    router.push(Router.login.path);
  };
  const onClickQuickStart = () => {
    router.push(Router.main.path);
  };

  //ログイン管理
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          }),
        );
      }
    });
  }, []);

  return (
    <div className={styles.root}>
      <Image
        src={EntranceImage}
        alt='EntranceImage'
        layout={'fill'}
        objectFit={'cover'}
        className={styles.home_image}
      />
      <header className={styles.header_container}>
        <div className={styles.logo}>Tripper</div>
        <Button variant='contained' onClick={onClickLogin} className={styles.login_button}>
          ログイン
        </Button>
      </header>

      <div className={styles.home_text}>
        <h1 className={styles.title}>旅を共有して、いろいろな旅を知ろう</h1>
      </div>
      <div className={styles.button_container}>
        <Button variant='contained' onClick={onClickRegister} className={styles.register_button}>
          メンバーになる
        </Button>
        <Button variant='contained' onClick={onClickQuickStart} className={styles.start_button}>
          いますぐはじめる
        </Button>
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {},
//   };
// };

export default HomeLayout;
