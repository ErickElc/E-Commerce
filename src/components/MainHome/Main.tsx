import { useEffect, useState } from 'react';
import banner from '../../assets/img3.png';
import { BannerSection, SectionLayout } from '../../styles/components';

export default function MainHome(){
    const [data, setData] = useState< [] | null >(null);

    useEffect(()=>{
        
    },[]);



    return(
        <>
            <SectionLayout>
                <BannerSection src={banner} alt="bannerImagem"/>
            </SectionLayout>
            <nav>
                <h1 className='text-center font-bold text-3xl mt-4' style={{color: '#E8630A'}}>Melhores Ofertas!</h1>
                <div>
                    <ul>
                        <li>
                            <p>IMAGEM</p>
                            <h2>Title</h2>
                            <p>VALOR</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}