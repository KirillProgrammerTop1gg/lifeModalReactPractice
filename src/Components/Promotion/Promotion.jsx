import styled from "styled-components";
import MacBook from "../../imgs/macbook.png";

const Promotion = styled.div`
    display: flex;
    height: 200px;
    margin: 20px auto 0;
    width: 800px;
    background-color: #cccaca;
    border-radius: 10px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
`;
const ProductPhoto = styled.img`
    height: 100%;
`;
const ProductName = styled.h2`
    font-size: 28px;
`;
const ProductLabel = styled.p`
    font-size: 20px;
    margin-top: 10px;
`;
const ProductTimer = styled.h3`
    margin-top: 10px;
    font-size: 32px;
`;

export default ({ time }) => <>
    <Promotion style={{backgroundColor: time !== '00:00:00:00' ? '#cccaca' : '#f24b3f'}}>
        <ProductPhoto src={MacBook} />
        <div>
            <ProductName>Забирай MacBook за половину його вартості!</ProductName>
            <ProductLabel>{time !== '00:00:00:00' ? 'До кінця акції залишилось: ' : 'Акція закінчилась!'}</ProductLabel>
            <ProductTimer>{time}</ProductTimer>
        </div>
    </Promotion>
</>