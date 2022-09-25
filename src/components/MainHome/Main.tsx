import { BannerSection, ContainerLista, ContainerProdutos, ImgProdutos, ListComponent, SectionLayout } from '../../styles/components';
import { useModalHeaderContext } from '../../context/ModalHeader/ModalHeader';
import ModalHeader from '../modalHeader/ModalHeader';
import cloud from '../../assets/icons/cloud.jpg';
import banner from '../../assets/img3.png';
export default function MainHome(){
    const {modalState} = useModalHeaderContext();
    return(
        <>
            <SectionLayout>
                {modalState.open === true ? <ModalHeader/> : ''}
                <BannerSection src={banner} alt="bannerImagem"/>
            </SectionLayout>
            <nav>
                <h1 className='text-center font-bold text-3xl mt-4' style={{color: '#E8630A'}}>Melhores Ofertas!</h1>
                <ContainerProdutos className='mt-10'>
                    <ContainerLista>
                        <ListComponent>
                            <ImgProdutos  src={cloud} alt='Cloud2' />
                            <h2>Title</h2>
                            <p className='font-bold text-orange-600'>R$: <span>300</span></p>
                        </ListComponent>
                        <ListComponent>
                            <ImgProdutos  src={cloud} alt='Cloud2' />
                            <h2>Title</h2>
                            <p className='font-bold text-orange-600'>R$ <span>300</span></p>
                        </ListComponent>
                        <ListComponent>
                            <ImgProdutos  src={cloud} alt='Cloud2' />
                            <h2>Title</h2>
                            <p className='font-bold text-orange-600'>R$ <span>300</span></p>
                        </ListComponent>
                        <ListComponent>
                            <ImgProdutos  src={cloud} alt='Cloud2' />
                            <h2>Title</h2>
                            <p className='font-bold text-orange-600'>R$ <span>300</span></p>
                        </ListComponent>
                        <ListComponent>
                            <ImgProdutos  src={cloud} alt='Cloud2' />
                            <h2>Title</h2>
                            <p className='font-bold text-orange-600'>R$ <span>300</span></p>
                        </ListComponent>
                    </ContainerLista>
                </ContainerProdutos>
            </nav>
        </>
    )
}