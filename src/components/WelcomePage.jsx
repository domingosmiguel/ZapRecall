import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/logo.png";
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
    position: absolute;
    background-color: var(--cor-fundo);

    img {
        width: 136px;
        height: 161px;
        margin-bottom: 20px;
    }
    h1 {
        color: white;
        font-family: "Righteous";
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        margin-bottom: 32px;
    }
    button {
        width: 246px;
        height: 54px;
        padding: 16px 22px;
        border-radius: 5px;
        color: #d70900;
        border: 1px;
        font-family: "Recursive";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid #d70900;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    }
    button:hover {
        background-color: #e3bbb9;
    }
`;
