
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";



const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width: 280px;
  height: 380px;
  background-color: #eafce8;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`

    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    margin-bottom : 20px;
`;

const Image = styled.img`

  width: 200px;
  height: 200px;
  margin-top:10px;
  z-index: 2;
  margin-left : 20%;


`;

const Title = styled.h2`
margin-top:5px;
  margin-left : 40%;
  font-weight: 200;
  font-weight : bold;
`;

const Price = styled.h2`
  font-weight: 200;
  margin-top:80%;
  margin-bottom : 10px;
`;

const AmountContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-size: 28px;
`;



const Product = ({ item }) => {
  return (

        <Container>
          <Title>{item.name}</Title>
          <Image src={item.img} />
              <Info>
              <Price>Rs.{item.price}/Kg</Price>
              <AmountContainer>
                <Add cursor="pointer"></Add>
                <Amount> 1 </Amount>
                <Remove cursor="pointer"></Remove>
              </AmountContainer>
              <Button>Add to cart</Button></Info>
        </Container>


  );
};

export default Product;
