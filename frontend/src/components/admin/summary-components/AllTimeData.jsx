import styled from "styled-components";
import {useSelector} from "react-redux";

const AllTimeData = () => {

    const {items} = useSelector(state => state.products)

    return <Main>
        <h3>All time</h3>
        <Info>
            <Title>Users</Title>
            <Data>200</Data>
        </Info>
        <Info>
            <Title>Products</Title>
            <Data>{items.length}</Data>
        </Info>
        <Info>
            <Title>Orders</Title>
            <Data>200</Data>
        </Info>
        <Info>
            <Title>Earnings</Title>
            <Data>$20,000</Data>
        </Info>
    </Main>;
}

export default AllTimeData;

const Main = styled.div`
  background: rgb(48,51,78);
  color: rgba(234,234,255,0.87);
  padding: 1rem;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 1rem; 
`;

const Info = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0.3rem;
  border-radius: 3px; 
  background: rgba(38,198,249,0.12);
  &:nth-child(even){
    background: rgb(102,108,255,0.12);
  }
`;
const Title = styled.div`
  flex: 1;
`;
const Data = styled.div`
  flex: 1;
  font-weight:700;
`;
