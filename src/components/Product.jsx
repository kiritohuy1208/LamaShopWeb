import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Infor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  //background-color: #f5fbfd;
  // opacity: 0;
  background-color: whitesmoke;
  &:hover ${Infor} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const InfoPro = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
const ProductName = styled.span``;
const Price = styled.span`
  font-weight: bold;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;

    transform: scale(1.1);
  }
`;
const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <InfoPro>
        <ProductName>{product.title}</ProductName>
        <Price>{"$" + product.price}</Price>
      </InfoPro>

      <Infor>
        <Icon>
          <AddShoppingCartIcon />
        </Icon>
        <Icon>
          <Link style={{ color: "black" }} to={`/product/${product._id}`}>
            <SearchIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Infor>
    </Container>
  );
};

export default Product;
