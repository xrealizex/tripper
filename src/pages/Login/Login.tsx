//- フレームワーク
import { NextPage } from 'next';
import React, { useState } from 'react';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

//- 共通
import { auth, provider } from '../../firebase';
import { Router } from '../router/router';
// import RegisterImage from '../../../public/images/register.jpg';

//- スタイル
import styles from './Login.module.scss';

//- MUI
import { Button, TextField, Typography, IconButton, Box } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';
import SendIcon from '@material-ui/icons/Send';

const Login: NextPage = () => {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  //- フレームワーク
  const router = useRouter();

  //- 関数定義
  const signInEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await router.push(Router.main.path);
      alert('ログインしました');
    } catch (error: unknown) {
      console.log(error);
      alert('ログインに失敗しました');
    }
  };

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      await router.push(Router.main.path);
      alert('ログインしました');
    } catch (error: unknown) {
      console.log(error);
      alert('ログインに失敗しました');
    }
  };

  const backButton = () => {
    router.push(Router.logout.path);
  };

  return (
    <div className={styles.root}>
      <div className={styles.input_area}>
        <Typography component='h1' variant='h5' className={styles.title}>
          ユーザー情報入力
        </Typography>
        <form noValidate>
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            value={username}
            className={styles.username_area}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            className={styles.email_area}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            className={styles.password_area}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            variant='contained'
            color='inherit'
            endIcon={<SendIcon />}
            onClick={signInEmail}
            className={styles.start_button}
          >
            ログイン
          </Button>
          <Button
            fullWidth
            variant='contained'
            color='default'
            startIcon={<CameraIcon />}
            className={styles.google_login_button}
            onClick={signInGoogle}
          >
            Googleでログイン
          </Button>
          <button onClick={backButton} className={styles.back_button}>
            戻る
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
