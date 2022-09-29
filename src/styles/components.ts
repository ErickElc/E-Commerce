import styled from 'styled-components';

export const HeaderLayout = styled.header`
    background-color: #001E6C;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 700px) {
        flex-flow: column;
    }
    
`
export const TitleHeader = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: white;
    @media (max-width: 450px) {
        font-size: 20px;
    }
`
export const SectionLayout = styled.section`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 100vw;
    background: #2980b9; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2980b9, #2c3e50); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2980b9, #2c3e50);
    padding: 10px;
`
export const BannerSection = styled.img`
    max-height: 400px;
    min-width: 98vw;
    background-size: cover;
    height: 300px;
    min-width: 750px;
    @media (max-width: 1350px) {
        min-width: 750px;
    }
    @media (max-width: 750px) {
        min-width: 450px;
    }
    @media (max-width: 550px) {
        min-width: 250px;
        height: 150px;
    }
`

export const ContainerProdutos = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`
export const ImgProdutos = styled.img`
    width: 150px;
    height: 150px;
`
export const ContainerLista = styled.div`

    max-width: 700px;
    display: flex;
    flex-flow: wrap row;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    @media (max-width : 435px)  {
        justify-content: center
    }
`
export const ListComponent = styled.li`
    margin: 30px;
`
export const ModalHeaderLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-flow: column wrap;
    background-color: #001E6C;
    width: 150px;
    position: absolute;
    top: 10px;
    padding: 10px;
    color: white;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 0px #676767; 
    margin-left: 80vw;
    margin-right: 30px;
    @media (max-width: 770px) {
        margin-right: 100px;
    }
`
export const SpanSection = styled.span`
    font-weight: bold;
    cursor: pointer;
    &:hover{
        color: orangered;
    }
    &:active{
        color: orange
    }
`
export const FormComponent = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    border-radius: 10px;
    padding: 50px;
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    margin-top: 30px;
    background-color: white;

`
export const ConteinerCadastroProduto = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #5800FF;

`
export const ImageProduto = styled.img`
    height: 400px;
    @media (max-width: 700px) {
        align-self: center;
        width: 250px;
        height: 350px
    }
`
export const ContainerProduto = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
`
export const ProdutoComponent = styled.div`
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    margin-top: 30px;
    padding: 50px;
    @media (max-width: 700px) {
        padding: 15px;
    }
`

export const FlexContainer = styled.div`
    max-width: 310px;
    display: flex;
    flex-flow: wrap column;
    @media (max-width: 700px) {
        max-width: 100%;
    }
`

export const ContainerCadastro = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #5800FF;
`

export const ContainerFormularioCadastro = styled.form`
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    padding: 40px;
    background-color: white;
    margin-bottom: 100px;
    border-radius: 10px;
    display: flex;
    flex-flow: column wrap;
    @media (max-width: 768px) {
        padding: 25px;
    }
`
export const TextLink = styled.h2`
    color: #0096FF;
    text-decoration: underline;
    text-align: start;
    margin-top: 10px;
`
export const SpanEntrega = styled.span`
    margin-left: 10px;
    margin-right: 10px;
    font-weight: bold;
    text-align: end;
    align-self: flex-end;
    font-size: 16px;
`
export const ContainerPrazos = styled.div`
    background-color: rgba(135, 135, 135,0.5);
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
` 
export const LayoutProduto = styled.div`
    display: flex;
    @media (max-width: 700px){
        flex-flow: column;
    }
`
export const SectionUl = styled.ul`
    @media (max-width: 700px) {
        display: none;
        
    }
`
export const SectionMenu = styled.section`
    @media (max-width: 700px) {
        justify-content: center;
        
    }
`
export const ContainerPopUp = styled.div`
    display: none;
    @media (max-width: 700px) {
        display: flex;
    }
`