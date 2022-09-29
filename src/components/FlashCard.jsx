import { useContext } from "react";
import StatesContext from "../assets/providers/cardStatesProvider";
import styled, { keyframes } from "styled-components";

import Button from "./Button";
import SetIcon from "./SetIcon";

import { ArrowUndoOutline } from "react-ionicons";

import buttonsConfig from "../assets/data/buttonsConfig";
import setCardConfig from "../assets/functions/setCardConfig";

function FlashCard({ card: { id: id, question: question, answer: answer } }) {
    const { opened, flipped, handleCardClick } = useContext(StatesContext);

    const {
        containerHeight,
        containerEvents,
        coverDisplay,
        coverColor,
        coverDecoration,
        cardDisplay,
        iconDataIdentifier,
    } = setCardConfig(id, opened);

    return (
        <CardContainer
            data-identifier="flashcard"
            height={containerHeight}
            events={containerEvents}
        >
            <CardCover display={coverDisplay} color={coverColor} textDecoration={coverDecoration}>
                <h1 data-identifier="flashcard-index-item">Question {id + 1}</h1>
                <SetIcon
                    color={coverColor}
                    flipped={flipped[id]}
                    iconDataIdentifier={iconDataIdentifier}
                    cardId={id}
                />
            </CardCover>
            <Card display={cardDisplay}>
                <CardFront flipped={flipped[id]}>
                    {question}
                    <section data-identifier="flashcard-turn-btn">
                        <ArrowUndoOutline
                            height="25px"
                            width="25px"
                            style={{ transform: "rotate(90deg)" }}
                            onClick={() => handleCardClick(id)}
                        />
                    </section>
                </CardFront>
                <CardBack flipped={flipped[id]}>
                    <h1 data-identifier="flashcard-answer">{answer}</h1>
                    <span>
                        {buttonsConfig.map((buttonConfig, index) => {
                            return (
                                <Button
                                    key={index}
                                    btnNo={index}
                                    cardId={id}
                                    button={buttonConfig}
                                />
                            );
                        })}
                    </span>
                </CardBack>
            </Card>
        </CardContainer>
    );
}

export default FlashCard;

const CardContainer = styled.li`
    pointer-events: ${({ events }) => events};
    width: 300px;
    height: ${({ height }) => height};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0px;
    transition: height 0.4s ease-in-out;

    &:first-child {
        margin-top: 0;
    }
    div {
        width: 100%;
        padding: 18px 15px 6px;
        border-radius: 5px;
    }
    span {
        cursor: pointer;
    }
`;
const CardCover = styled.div`
    background-color: white;
    display: ${({ display }) => display};
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    color: ${({ color }) => color};
    text-decoration: ${({ textDecoration }) => textDecoration};
    box-shadow: 5px 5px 5px #e26060;
    height: 100%;

    h1,
    span {
        margin-bottom: 6px;
    }
`;
const Card = styled.section`
    width: 100%;
    min-height: 130px;
    display: ${({ display }) => display};
    transition: height 0.4s ease-in-out;
    position: relative;
    font-size: 18px;
    line-height: 22px;

    & > div {
        position: absolute;
        background-color: #ffffd4;
        backface-visibility: hidden;
        transition: transform 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        transform-style: preserve-3d;
        box-shadow: 5px 5px 5px #e26060;
        min-height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
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
    transform: ${({ flipped }) => (flipped ? "rotateX(-180deg)" : "rotateX(0)")};

    section {
        animation: ${FadeIn} 0.6s cubic-bezier(1, 0, 0.88, 1) both;
        align-self: end;
    }
`;

const CardBack = styled.div`
    transform: ${({ flipped }) => (flipped ? "rotateX(0)" : "rotateX(180deg)")};

    span {
        display: flex;
        justify-content: space-between;
    }
`;
