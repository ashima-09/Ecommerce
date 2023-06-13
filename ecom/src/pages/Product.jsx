import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {
    Remove,
    Add
} from "@material-ui/icons";
import { mobile } from '../responsive';

const Container = styled.div``;  

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})};
`;  

const ImgContainer = styled.div`
    flex: 1;
`;  

const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})};
`;  

const Title = styled.h1`
    font-weight: 200;
`;  

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})};
`;  

const Desc = styled.p`
    margin: 20px 0px;
`; 

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;   

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`;

const Filter = styled.div`
    display: flex;;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color:white; 
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Img src="data:image/jpeg;base64,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"/>

            </ImgContainer>
            <InfoContainer>
                <Title>Denim pants</Title>
                <Desc>Ultra good quality</Desc>
                <Price>2000 Rupees</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="darkblue"></FilterColor>
                        <FilterColor color="gray"></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product