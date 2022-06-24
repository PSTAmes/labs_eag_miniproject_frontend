import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Carts = styled.div``;

const CartDetails = styled.div`
  flex: 2;
  flex-direction: row;
`;
const Image = styled.img`
  width: 150px;
  height:150px;
  padding-right: 100px;
  
`;

const Details = styled.div`
  padding-top: 20px;
  padding-left:50px ;
  display: flex;
  flex-direction: column;
`;

const CartAmount = styled.span``;

const CartId = styled.span``;

const CartTotal = styled.span``;

const CartDiscount = styled.span``;

const CartDate = styled.span``;


const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Cart = styled.div`
  display: flex;
  padding-left: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: left;
  ${mobile({ flexDirection: "column" })}
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const CartsList = () => {
    return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Carts>
            <CartDetails>
                <Cart>
                    <Image src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" />
                    <Details>
                    <CartId>
                        <b>ID :</b> C0001
                    </CartId>
                    <CartTotal>
                        <b>Total :</b> Rs.2500
                    </CartTotal>
                    <CartDiscount>
                        <b>Discount :</b> Rs.250
                    </CartDiscount>
                    <CartAmount>
                        <b>Amount :</b> Rs.2250
                    </CartAmount>
                    <CartDate>
                        <b>Date :</b> 10/05/2022
                    </CartDate>
                    </Details>
                </Cart>
                <Hr/>
                <Cart>
                    <Image src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" />
                    <Details>
                    <CartId>
                        <b>ID :</b> C0002
                    </CartId>
                    <CartTotal>
                        <b>Total :</b> Rs.3000
                    </CartTotal>
                    <CartDiscount>
                        <b>Discount :</b> Rs.1000
                    </CartDiscount>
                    <CartAmount>
                        <b>Amount :</b> Rs.2000
                    </CartAmount>
                    <CartDate>
                        <b>Date :</b> 18/05/2022
                    </CartDate>
                    </Details>
                </Cart>
            </CartDetails>
          </Carts>
        </Wrapper>
        <Hr />
        <Footer />
      </Container>
    );
  };
  
  export default CartsList;
  