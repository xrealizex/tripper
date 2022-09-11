//- フレームワーク
import { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//- グローバルstate
import { updateUserProfile } from '../../userSlice';

//- 共通
import { auth, provider, storage } from '../../firebase';
import RegisterImage from '../../../public/images/register.jpg';

//- スタイル
import styles from './Register.module.scss';

//- MUI
import { Avatar, Button, TextField, Grid, Typography, IconButton, Box } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Register: NextPage = () => {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const [isLogin, setIsLogin] = useState(true);

  //- フレームワーク
  const router = useRouter();
  const dispatch = useDispatch();

  //- 関数定義
  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files![0]) {
      setAvatarImage(e.target.files![0]);
      e.target.value = '';
    }
  };
  const signInEmail = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUpEmail = async () => {
    const authUser = await createUserWithEmailAndPassword(auth, email, password);
    let url = '';
    if (avatarImage) {
      const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const N = 16;
      const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join('');
      const fileName = randomChar + '_' + avatarImage.name;
      await uploadBytes(ref(storage, `avatars/${fileName}`), avatarImage);
      url = await getDownloadURL(ref(storage, `avatars/${fileName}`));
    }
    if (authUser.user) {
      await updateProfile(authUser.user, {
        displayName: username,
        photoURL: url,
      });
    }
    dispatch(
      updateUserProfile({
        displayName: username,
        photoUrl: url,
      }),
    );
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
          メンバー登録
        </Typography>
        <Box textAlign='center'>
          <IconButton className={styles.add_image_button}>
            <label>
              <AccountCircleIcon fontSize='large' />
              <input type='file' onChange={onChangeImageHandler} />
            </label>
          </IconButton>
        </Box>
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
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            startIcon={<CameraIcon />}
            className={styles.google_login_button}
            onClick={signInGoogle}
          >
            Googleでメンバーになる
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Register;