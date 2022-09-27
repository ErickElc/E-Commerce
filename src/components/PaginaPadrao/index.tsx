import Section from '../section/Section';
import Header from '../header/Header';
import {Outlet} from 'react-router-dom';

export default function PaginaPadrao ({children}: {children?: React.ReactNode}){
    return(
      <>
        <Header/>
        <Section/>
        <>
          <Outlet/>
          {children}
        </>
      </>
    )
}