import styled from "styled-components";
import { useState } from "react";

import { StatesProvider } from "./providers/cardStatesProvider";

import cards from "./data/cards";

import Header from "./Header";
import Deck from "./Deck";
import Footer from "./Footer";

function Game() {
    const [opened, setOpened] = useState(cards.map((card) => card.opened));
    const [flipped, setFlipped] = useState(cards.map((card) => card.flipped));
    const [answerOrder, setAnswerOrder] = useState([]);
    const [headerShadow, setHeaderShadow] = useState(false);
    const [footerShadow, setFooterShadow] = useState(true);

    function handleCoverClick(cardId) {
        const otherCardOpened = opened.includes(true);
        if (otherCardOpened) {
            const otherCardFlipped = flipped[opened.indexOf(true)];
            if (!otherCardFlipped) {
                setOpened(
                    opened.map((openedIndex, index) =>
                        index === cardId || openedIndex === true ? !openedIndex : openedIndex
                    )
                );
            }
            return;
        }
        setOpened(
            opened.map((openedIndex, index) => (index === cardId ? !openedIndex : openedIndex))
        );
    }
    function handleCardClick(cardId) {
        setFlipped(
            flipped.map((flippedIndex, index) => (index === cardId ? !flippedIndex : flippedIndex))
        );
    }
    function handleButtonClick(btnNo, cardId, color) {
        const newOpened = [];
        const newFlipped = [];
        for (let i = 0; i < cards.length; i++) {
            if (i === cardId) {
                newOpened.push(color);
                newFlipped.push(btnNo);
                continue;
            }
            newOpened.push(opened[i]);
            newFlipped.push(flipped[i]);
        }
        setOpened(newOpened);
        setFlipped(newFlipped);
        setAnswerOrder([...answerOrder, btnNo]);
    }
    return (
        <Body>
            <Header headerShadow={headerShadow} />
            <StatesProvider
                value={{
                    cards,
                    opened,
                    flipped,
                    answerOrder,
                    handleButtonClick,
                    handleCardClick,
                    handleCoverClick,
                    setHeaderShadow,
                    setFooterShadow,
                }}
            >
                <Deck />
                <Footer footerShadow={footerShadow} />
            </StatesProvider>
        </Body>
    );
}

export default Game;

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--preto);
    font-family: "Recursive", sans-serif;
    background-color: var(--cor-fundo);
`;
