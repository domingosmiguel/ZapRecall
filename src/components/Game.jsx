import styled from "styled-components";
import Deck from "./Deck";
import Footer from "./Footer";

function Game() {
    return (
        <Body>
            <Deck />
            <Footer />
        </Body>
    );
}

export default Game;

const Body = styled.div`
    box-sizing: border-box;
    --cor-fundo: #fb6b6b;
    --cor-fundo-card: #ffffd4;
    --cor-nao-lembrei: #ff3030;
    --cor-quase-nao-lembrei: #ff922e;
    --cor-zap: #2fbe34;
    --preto: #333333;

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--preto);
    font-family: "Recursive", sans-serif;
    background-color: var(--cor-fundo);
    /* font-family: 'Righteous', cursive; */
`;
