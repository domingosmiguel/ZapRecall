import { useContext } from "react";
import styled from "styled-components";

import StatesContext from "../assets/providers/cardStatesProvider";

import FlashCard from "./FlashCard";

function Deck() {
    const { cards, setHeaderShadow } = useContext(StatesContext);
    function handleScroll(e) {
        if (e.currentTarget.scrollTop === 0) {
            setHeaderShadow(false);
            return;
        }
        setHeaderShadow(true);
    }
    return (
        <Table onScroll={handleScroll}>
            <Main>
                {cards.map((card) => (
                    <FlashCard key={card.id} card={card} />
                ))}
            </Main>
        </Table>
    );
}

export default Deck;

const Table = styled.div`
    width: min(100vw, 375px);
    height: 100%;
    overflow-y: scroll;
`;
const Main = styled.ul`
    height: fit-content;
    width: fit-content;
    margin: 0 auto;
`;
