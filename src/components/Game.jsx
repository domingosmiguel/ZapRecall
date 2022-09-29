import styled from "styled-components";
import { useState } from "react";

import { StatesProvider } from "../assets/providers/cardStatesProvider";

import cards from "../assets/data/cards";

import Header from "./Header";
import Deck from "./Deck";
import Footer from "./Footer";

function Game() {
    const [opened, setOpened] = useState(cards.map((card) => card.opened));
    const [flipped, setFlipped] = useState(cards.map((card) => card.flipped));
    const [headerShadow, setHeaderShadow] = useState(false);
    const [answerOrder, setAnswerOrder] = useState([]);
    function handleCoverClick(cardId) {
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
        setOpened(opened.map((el, index) => (index === cardId ? color : opened[index])));
        setFlipped(flipped.map((el, index) => (index === cardId ? btnNo : flipped[index])));
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
                }}
            >
                <Deck />
                <Footer />
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
