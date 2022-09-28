import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

function FlashCard({ index, card: { Question: Question, Answer: Answer } }) {
    const [flipped, setFlipped] = useState(false);
    const [open, setOpen] = useState(false);

    function handleContainerClick() {
        setOpen(!open);
    }
    function handleCardClick() {
        setFlipped(!flipped);
    }
    const buttonsConfig = [
        { color: "--cor-nao-lembrei", text: "Não lembrei" },
        { color: "--cor-quase-nao-lembrei", text: "Quase não lembrei" },
        { color: "--cor-zap", text: "Zap!" },
    ];
    return (
        <CardContainer onClick={handleContainerClick} open={open}>
            <h1>Question {index}</h1>
            <Card flipped={flipped} onClick={handleCardClick} open={open}>
                <CardFront>
                    {Question}
                    <div>
                        {buttonsConfig.map((buttonConfig, index) => {
                            return <Button key={index} button={buttonConfig} />;
                        })}
                    </div>
                </CardFront>
                <CardBack>{Answer}</CardBack>
            </Card>
        </CardContainer>
    );
}

export default FlashCard;

const CardContainer = styled.li`
    pointer-events: ${({ open }) => (open ? "none" : "auto")};
    width: 300px;
    height: ${({ open }) => (open ? "110px" : "50px")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    margin: 10px 0px;
    padding: 10px;
    transition: height 0.8s;
    cursor: pointer;
    font-family: "Recursive", cursive;
    h1 {
        display: ${({ open }) => (open ? "none" : "block")};
    }
`;
const Card = styled.div`
    display: ${({ open }) => (open ? "" : "none")};
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;
`;
const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
const CardFront = styled.div`
    width: 280px;
    height: 110px;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        animation: ${FadeIn} 0.8s cubic-bezier(1, 0, 0.93, 0) both;
        display: flex;
        justify-content: space-around;
    }
`;

const CardBack = styled.div`
    width: 280px;
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
`;
