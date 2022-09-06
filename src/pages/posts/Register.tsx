import { NextPage } from 'next';
import React, { useState } from 'react';
import styles from './Register.module.scss';
import Image from 'next/image';
import RegisterImage from '../../../public/images/register.jpg';
import HowToRegIcon from '@mui/icons-material/HowToReg';
// import { useDispatch } from 'react-redux';
// import { updateUserProfile } from '../features/userSlice';
import { auth, provider, storage } from '../../firebase';

//Firebase ver9 compliant
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//Firebase ver9 compliant
import {
  signInWithPopup,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  makeStyles,
  Modal,
  IconButton,
  Box,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CameraIcon from '@material-ui/icons/Camera';
import EmailIcon from '@material-ui/icons/Email';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Register: NextPage = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [resetEmail, setResetEmail] = useState('');

  // const sendResetEmail = async (e: React.MouseEvent<HTMLElement>) => {
  //   //Firebase ver9 compliant
  //   await sendPasswordResetEmail(auth, resetEmail)
  //     .then(() => {
  //       setOpenModal(false);
  //       setResetEmail("");
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //       setResetEmail("");
  //     });
  // };

  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setAvatarImage(e.target.files![0]);
      e.target.value = '';
    }
  };
  // const signInEmail = async () => {
  //   //Firebase ver9 compliant
  //   await signInWithEmailAndPassword(auth, email, password);
  // };

  const signUpEmail = async () => {
    //Firebase ver9 compliant
    const authUser = await createUserWithEmailAndPassword(auth, email, password);
    let url = '';
    if (avatarImage) {
      const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const N = 16;
      const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join('');
      const fileName = randomChar + '_' + avatarImage.name;
      //Firebase ver9 compliant
      await uploadBytes(ref(storage, `avatars/${fileName}`), avatarImage);
      url = await getDownloadURL(ref(storage, `avatars/${fileName}`));
    }
    //Firebase ver9 compliant
    if (authUser.user) {
      await updateProfile(authUser.user, {
        displayName: username,
        photoURL: url,
      });
    }

    // dispatch(
    //   updateUserProfile({
    //     displayName: username,
    //     photoUrl: url,
    //   })
    // );
  };
  const signInGoogle = async () => {
    //Firebase ver9 compliant
    await signInWithPopup(auth, provider).catch((err) => alert(err.message));
  };
  return (
    <div className={styles.root}>
      <Image src={RegisterImage} alt='RegisterImage' className={styles.register_image} />
      <HowToRegIcon fontSize='large' color='primary' className={styles.avatar_icon} />
      <Typography component='h1' variant='h5' className={styles.title}>
        メンバー登録
      </Typography>
      <form noValidate>
        <TextField
          variant='outlined'
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
        <Box textAlign='center'>
          <IconButton className={styles.add_image_button}>
            <label>
              <AccountCircleIcon
                fontSize='large'
                className={avatarImage ? styles.login_addIconLoaded : styles.login_addIcon}
              />
              <input
                className={styles.login_hiddenIcon}
                type='file'
                onChange={onChangeImageHandler}
              />
            </label>
          </IconButton>
        </Box>

        <TextField
          variant='outlined'
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
          variant='outlined'
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
          disabled={
            isLogin
              ? !email || password.length < 6
              : !username || !email || password.length < 6 || !avatarImage
          }
          fullWidth
          variant='contained'
          color='primary'
          startIcon={<EmailIcon />}
          //   onClick={
          //     isLogin
          //       ? async () => {
          //           try {
          //             await signInEmail();
          //           } catch (err: any) {
          //             alert(err.message);
          //           }
          //         }
          //       : async () => {
          //           try {
          //             await signUpEmail();
          //           } catch (err: any) {
          //             alert(err.message);
          //           }
          //         }
          //   }
        >
          メンバー登録
        </Button>
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
  );
};
export default Register;
