import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;


//add a timer here for the offers going on until their validity
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over Rs.699</Container>;
};



export default Announcement;