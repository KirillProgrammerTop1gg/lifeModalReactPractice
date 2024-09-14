import styled from "styled-components";

const Notficiation = styled.p`
    padding: 10px;
    border-radius: 10px;
    background-color: #eb4034;
    color: #fff;
    width: 480px;
    margin: 30px auto 0;
    font-size: 28px;
`;

export default ({text}) => <>
    <Notficiation>{text}</Notficiation>
</>