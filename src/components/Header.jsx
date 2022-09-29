import styled from "styled-components";
import smallLogo from "../assets/img/logo-pequeno.png";

function Header({ headerShadow }) {
    return (
        <StyledHeader shadow={headerShadow}>
            <img src={smallLogo} alt="smallLogo" />
            <h1>ZapRecall</h1>
        </StyledHeader>
    );
}

export default Header;

const StyledHeader = styled.div`
    width: 100%;
    height: var(--header-height);
    color: white;
    font-family: "Righteous", cursive;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.012em;
    box-shadow: ${({ shadow }) => (shadow ? "0 5px 5px #33333330" : "")};
    z-index: 2;

    z-index: img {
        margin-right: 25px;
        width: 52px;
        height: 60px;
    }
`;
