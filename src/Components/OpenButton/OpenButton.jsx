import styled from "styled-components";

const OpenBut = styled.button`
    margin: 20px auto 0;
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 10px;
`;

export default ({ acitveModal, openModal }) => <>
    <OpenBut disabled={!(acitveModal)} onClick={() => openModal()}>Залишити заявку</OpenBut>
</>