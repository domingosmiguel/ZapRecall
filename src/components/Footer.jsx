import { useContext, useState } from "react";
import styled from "styled-components";
import StatesContext from "../assets/providers/cardStatesProvider";
import SetIcon from "./SetIcon";

function Footer() {
    const { opened, answerOrder } = useContext(StatesContext);

    const colors = ["var(--cor-nao-lembrei)", "var(--cor-quase-nao-lembrei)", "var(--cor-zap)"];
    return (
        <ScoreBar progress={answerOrder.length}>
            <Progress data-identifier="flashcard-counter">
                {answerOrder.length}/{opened.length} COMPLETED
            </Progress>
            <Icons>
                {answerOrder.map((state, index) => {
                    switch (state) {
                        case 0:
                        case 1:
                        case 2:
                            return <SetIcon key={index} color={colors[state]} flipped={state} />;
                        default:
                            break;
                    }
                })}
            </Icons>
        </ScoreBar>
    );
}

export default Footer;

const ScoreBar = styled.section`
    background-color: white;
    width: 100%;
    min-height: var(--footer-height);
    padding: ${({ progress }) => (progress > 0 ? "48px" : "26px")} 20px 18px;
    font-size: 18px;
    color: var(--preto);
    text-align: center;
    display: flex;
    flex-direction: column;
`;
const Progress = styled.div`
    line-height: 22px;
    margin-bottom: 6px;
`;
const Icons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
`;
