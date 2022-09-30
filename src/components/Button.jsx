import { useContext } from "react";
import StatesContext from "./providers/cardStatesProvider";
import styled from "styled-components";

function Button({ btnNo, cardId, button: { color: color, text: text, identifier: identifier } }) {
    const { handleButtonClick } = useContext(StatesContext);

    return (
        <AnswerButton
            data-identifier={identifier}
            color={color}
            onClick={() => handleButtonClick(btnNo, cardId, color)}
        >
            {text}
        </AnswerButton>
    );
}
export default Button;

const AnswerButton = styled.button`
    background-color: ${({ color }) => color};
    width: 85px;
    height: 37px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    font-family: "Recursive";
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
