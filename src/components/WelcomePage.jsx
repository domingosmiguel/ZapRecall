import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
function WelcomePage() {
    return (
        <Home>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <Link to="/game">
                <button type="button" data-identifier="start-btn">
                    Initiate Recall!
                </button>
            </Link>
        </Home>
    );
}

export default WelcomePage;

const Home = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    background-color: var(--cor-fundo);

    img {
        width: 136px;
        height: 161px;
    }
    h1 {
        font-family: "Righteous", cursive;
        font-size: 36px;
        color: white;
    }
    button {
        width: 246px;
        height: 54px;
        padding: 16px 22px;
        border-radius: 5px;
        color: #d70900;
        border: 1px;
        font-size: 18px;
        cursor: pointer;
    }
    button:hover {
        background-color: #cea2a0;
    }
`;
