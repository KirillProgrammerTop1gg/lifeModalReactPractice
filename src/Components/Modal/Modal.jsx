import styled from "styled-components";
import React, {Component} from "react";
import OpenButton from "../OpenButton/OpenButton";
import Promotion from "../Promotion/Promotion";
import Notification from "../Notification/Notification";

const Section = styled.section``;
const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
`;
const ModalContainer = styled.section`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
`;
const Title = styled.h2``;
const CloseBut = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &::after{
        position: absolute;
        content: "";
        display: block;
        width: 20px;
        height: 3px;
        transform: rotate(45deg);
        background-color: black;
    }
    &::before{
        position: absolute;
        content: "";
        display: block;
        width: 20px;
        height: 3px;
        transform: rotate(-45deg);
        background-color: black;
    }
`;
const Input = styled.input`
    display: block;
    height: 30px;
    width: 100%;
    border-radius: 10px;
    padding: 5px;
    margin-top: 15px;
`;
const SendBut = styled.button`
    height: 30px;
    width: 150px;
    margin-top: 15px;
    border-radius: 10px;
`;

export default class Modal extends Component{
    state = {
        showModal: false,
        promotionTime: "00:00:00:00",
        promotionEnd: new Date(this.props.promotionEnd),
        acitveModal: true
    }
    componentDidMount(){
        this.getPromotionTime();
        this.setState({ showModal: localStorage.getItem('showModal') !== null && JSON.parse(localStorage.getItem('showModal')) ? JSON.parse(localStorage.getItem('showModal')) : false })
    }
    componentDidUpdate(){
        localStorage.setItem('showModal', JSON.stringify(this.state.showModal));
    }
    getPromotionTime(){
        const time = (this.state.promotionEnd.getTime() - new Date().getTime())/1000;
        const days = Math.floor(time/3600/24);
        const hours = Math.floor((time-days*86400)/3600);
        const mins = Math.floor((time-days*86400-hours*3600)/60);
        const secs = Math.floor(time-days*86400-hours*3600-mins*60);
        this.setState({promotionTime: `${days < 10 ? '0' : ''}${days}:${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`});
        time > 0 ? setTimeout(() => this.getPromotionTime(), 1000) : this.setState({acitveModal: false, promotionTime: "00:00:00:00"});
    }
    render (){
        return <>
            <Section>
                <Promotion time={this.state.promotionTime}/>
                <OpenButton acitveModal={this.state.acitveModal} openModal={() => this.setState({ showModal: true })} />
                {!(this.state.acitveModal) && <Notification text="!!!Увага ви вже приймаєте участь у цієї акції!!!"/>}
            </Section>
            {this.state.showModal && (document.addEventListener('keydown', (evt) => evt.key === 'Escape' ? this.setState({ showModal: false }) : null), <Backdrop>
                <ModalContainer>
                    <CloseBut onClick={() => this.setState({ showModal: false })}></CloseBut>
                    <Title>Залиште заявку</Title>
                    <form className="FormModal" onSubmit={(e) => (e.preventDefault(), e.target.closest('.FormModal').checkValidity() ? this.setState({ acitveModal: false, showModal: false }) : e.target.closest('.FormModal').reportValidity())}>
                        <Input type="text" placeholder="ФІО" required></Input>
                        <Input type="tel" placeholder="Телефон" required></Input>
                        <Input type="email" placeholder="Електрона адреса" required></Input>
                        <Input type="text" placeholder="Адреса" required></Input>
                        <SendBut>Залишити заявку</SendBut>
                    </form>
                </ModalContainer>
            </Backdrop>)}
        </>
    }
}