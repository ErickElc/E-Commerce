import styled from 'styled-components';

export const HeaderLayout = styled.header`
    background-color: #001E6C;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const SectionLayout = styled.section`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    background: #2980b9; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2980b9, #2c3e50); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2980b9, #2c3e50);
    padding: 10px;
`
export const BannerSection = styled.img`
    max-height: 400px;
    min-width: 100vw;
    background-size: cover;
    min-width: 1150px;
    @media (max-width: 1350px) {
        min-width: 750px;
    }
    @media (max-width: 750px) {
        min-width: 450px;
    }
    @media (max-width: 550px) {
        min-width: 250px;
    }
`