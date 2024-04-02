
'use client';

import React, { use, useState, useEffect } from 'react';
import * as styles from './index.css'
import InvitationCard from "@/components/InvitationCard";
import HamburgerButton from '@/containers/home/HamburgerButton';
import {userInfoStore} from "@/store/useUserInfo";
import { signupRequest } from '@/types/auth';
import { useParams } from 'next/navigation';
// import { axiosInstance } from '@/services';
// const userCode = userInfoStore((state) => state.userCode);

import { fetchInstance } from "@/services";




const Home = () => {
  const { userCode } = useParams() as { userCode:string }
  const setUserCode = userInfoStore((state) => state.setUserCode);

  useEffect(() => {
    if (userCode) {
      setUserCode(userCode);
    }
  }, [userCode, setUserCode]);

  // if (userCode == '') {
  //   return <div>Loading...</div>
  // }
  // const cookieStore = cookies();
  return (
    <>
      <main className={styles.homeWrapper}>
        <HamburgerButton />
        <div className={styles.invitationContainer}>
          {/*<InvitationCard info={info}/>*/}
          <InvitationCard />
        </div>
      </main>
    </>
  )
}

export default Home;

