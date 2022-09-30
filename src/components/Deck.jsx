import { useContext } from "react";
import styled from "styled-components";

import StatesContext from "./providers/cardStatesProvider";

import FlashCard from "./FlashCard";

function Deck() {
    const { cards, setHeaderShadow, setFooterShadow } = useContext(StatesContext);
    function handleScroll(e) {
        if (e.currentTarget.scrollTop === 0) {
            setHeaderShadow(false);
            return;
        } else if (
            e.currentTarget.scrollTop + e.currentTarget.clientHeight ===
            e.currentTarget.scrollHeight
        ) {
            setFooterShadow(false);
            return;
        }
        setFooterShadow(true);
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

const Table = styled.section`
    width: 100vw;
    height: 100%;
    overflow-y: scroll;
`;
const Main = styled.ul`
    width: fit-content;
    margin: 0 auto;
`;
