import { BannerSection, ContainerProdutos, SectionLayout } from '../../styles/components';
import banner from '../../assets/img3.png';
import ListProducts from '../listProducts';
import { Link } from 'react-router-dom';
export default function MainHome(){
    return(
        <>
            <SectionLayout>
                <Link to='/produtos'>
                    <BannerSection src={banner} alt="bannerImagem"/>
                </Link>
            </SectionLayout>
            <nav>
                <h1 className='text-center font-bold text-3xl mt-4' style={{color: '#E8630A'}}>Melhores Ofertas!</h1>
                <ContainerProdutos className='mt-10'>
                    <ListProducts/>
                </ContainerProdutos>
            </nav>
        </>
    )
}