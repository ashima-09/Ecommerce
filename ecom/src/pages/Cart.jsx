import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import {mobile} from "../responsive"
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import {
    Remove,
    Add
} from "@material-ui/icons";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})};
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:  ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.div``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})};
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})};
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.div`
    font-weight: 200;

`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.div``;

const SummaryItemPrice = styled.div``;

const Button = styled.div`
    width: 100%;
    padding: 10px;
    background-color: black;  
    color: white;
    font-weight: 600; 
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                <TopButton type="filled">CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://publish.purewow.net/wp-content/uploads/sites/2/2022/05/cute-summer-dresses-heartloom-ruta-dress.png?fit=680%2C860"/>
                            <Details>
                                <ProductName><b>Product: </b> SUMMERY DRESS</ProductName>
                                <ProductId><b>ID: </b> 987654321</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size: </b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>3000 Rupees</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="data:image/jpeg;base64,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"/>
                            <Details>
                                <ProductName><b>Product: </b> BLAZER</ProductName>
                                <ProductId><b>ID: </b> 987654371</ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size: </b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>1130 Rupees</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>4130 Rupees</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping Charges</SummaryItemText>
                        <SummaryItemPrice>80 Rupees</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>-80 Rupees</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>4130 Rupees</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart