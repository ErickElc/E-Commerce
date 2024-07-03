import Section from '../section/Section';
import Header from '../header/Header';
import {Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../auth/auth';
import { getUserLocalStorage } from '../../auth/util';
import { IToken } from '../../interfaces/interfaces';

export default function PaginaPadrao ({children}: {children?: React.ReactNode}){
  const [userAuthenticate, setUserAuthenticate] = useState<boolean>(false);
  const user: IToken | null = getUserLocalStorage();
  const providerUtils = useAuthContext();
  useEffect(() => {
    providerUtils
      .verifyUser()
      .then((res) => {
        setUserAuthenticate(res)
      })
      .catch((err) => setUserAuthenticate(err));
    
  }, [userAuthenticate, providerUtils]);

    return (
      <>
        <Header />
        <Section user={user} userAuthenticate={userAuthenticate} />
        <>
          <Outlet />
          {children}
        </>
      </>
    );
}