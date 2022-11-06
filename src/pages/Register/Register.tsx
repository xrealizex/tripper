//- フレームワーク
import { NextPage, GetStaticProps } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//- グローバルstate
import { updateUserProfile } from '../../userSlice';

//- 共通
import { auth, provider, storage } from '../../firebase';
import RegisterImage from '../../../public/images/register.jpg';
import { Router } from '../../router/router';

//- スタイル
import styles from './Register.module.scss';

//- MUI
import { Button, TextField, Typography, IconButton, Box } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';
import SendIcon from '@material-ui/icons/Send';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Register: NextPage = () => {
  //- state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatarImage, setAvatarImage] = useState<File | null>(null);

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

  const signUpEmail = async () => {
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
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          updateProfile(userCredential.user, {
            displayName: username,
            photoURL: url,
          });
        }
        dispatch(
          updateUserProfile({
            uid: userCredential.user.uid,
            displayName: username,
            photoUrl: url,
          }),
        );
        router.push(Router.main.path);
      })
      .catch((error: unknown) => {
        console.log(error);
        alert('メンバー登録に失敗しました。');
      });
  };

  const signInGoogle = (): void => {
    signInWithPopup(auth, provider)
      .then(() => {
        router.push('../Main/TripLists');
        console.log('success');
      })
      .catch((err: unknown) => {
        alert(`ログインに失敗しました。エラー内容${err}。`);
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
              <AccountCircleIcon
                fontSize='large'
                className={avatarImage ? styles.login_addIconLoaded : styles.login_addIcon}
              />
              <input
                type='file'
                onChange={onChangeImageHandler}
                className={styles.login_hiddenIcon}
              />
            </label>
          </IconButton>
          <div className={styles.add_image_text}>アイコン画像を設定してください</div>
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
            type='email'
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
            disabled={!username || !email || password.length < 6 || !avatarImage}
            color='primary'
            endIcon={<SendIcon />}
            onClick={signUpEmail}
            className={styles.start_button}
          >
            上記内容ではじめる
          </Button>
          <Button
            fullWidth
            variant='contained'
            color='default'
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

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Register;
