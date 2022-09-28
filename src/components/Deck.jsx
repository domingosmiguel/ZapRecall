import styled from "styled-components";
import smallLogo from "../assets/img/logo-pequeno.png";
import Cards from "../assets/data/Cards";
import FlashCard from "./FlashCard";

function Deck() {
    return (
        <TableContainer>
            <Header>
                <img src={smallLogo} alt="smallLogo" />
                <h1>ZapRecall</h1>
            </Header>
            <Table>
                <Main>
                    {Cards.map((card, index) => (
                        <FlashCard key={index} index={index} card={card} />
                    ))}
                </Main>
            </Table>
        </TableContainer>
    );
}

export default Deck;

const TableContainer = styled.div``;
const Header = styled.div`
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    background-color: var(--cor-fundo);

    img {
        width: 52px;
        height: 60px;
    }
`;
const Table = styled.div`
    max-height: 100%;
`;
const Main = styled.div`
    overflow-y: scroll;
    height: fit-content;
`;
