import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publishRequest } from "../config";
//Redux
import { addProduct } from "../Redux/CartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 35px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
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
  font-size: 16px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 50%;
  justify-content: space-between;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 5px;
  cursor: pointer;
  width: 30px;
  // border-radius: 50%;
  &:hover {
    background-color: whitesmoke;
  }
`;
const Amount = styled.span`
  width: 50px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 15px;
  border: none;
  background-color: teal;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: orange;
  }
`;
const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  const getProductDetail = async () => {
    const res = await publishRequest.get(`/api/product/find/${productId}`);
    setProduct(res.data);
  };
  useEffect(() => {
    getProductDetail();
  }, [productId]);
  const handleQuantity = (name) => {
    if (name === "RemoveIcon") {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  useEffect(() => {
    console.log(size);
  }, [size]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((color) => (
                <FilterColor
                  key={color}
                  color={color}
                  onClick={() => setColor(color)}
                ></FilterColor>
              ))}
            </Filter>
            <Filter onChange={(e) => setSize(e.target.value)}>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size?.map((size) => (
                  <FilterSizeOption key={size}> {size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IconContainer onClick={() => handleQuantity("RemoveIcon")}>
                <RemoveIcon />
              </IconContainer>
              <Amount>{quantity}</Amount>
              <IconContainer onClick={handleQuantity}>
                <AddIcon />
              </IconContainer>
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
