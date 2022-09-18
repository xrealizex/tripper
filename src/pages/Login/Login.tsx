//- フレームワーク
import { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

//- 共通
import { auth, provider } from '../../firebase';
import RegisterImage from '../../../public/images/register.jpg';

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
  const dispatch = useDispatch();

  //- 関数定義
  const signInEmail = (): void => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push('../posts/TripList');
        console.log('success');
      })
      .catch((error) => {
        alert(`ログインに失敗しました。エラー内容${error}。`);
        console.log('error');
      });
  };

  const signInGoogle = (): void => {
    signInWithPopup(auth, provider)
      .then(() => {
        router.push('../posts/TripList');
        console.log('success');
      })
      .catch((error) => {
        alert(`ログインに失敗しました。エラー内容${error}。`);
        console.log('error');
      });
  };

  return (
    <div className={styles.root}>
      <Image
        src={RegisterImage}
        alt='RegisterImage'
        objectFit='cover'
        className={styles.register_image}
      />
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
            color='primary'
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
        </form>
      </div>
    </div>
  );
};
export default Login;
