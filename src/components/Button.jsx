import styled from "styled-components";

function Button({ button: { color: color, text: text } }) {
    return <AnswerButton color={color}>{text}</AnswerButton>;
}
export default Button;

const AnswerButton = styled.button`
    background-color: ${({ color }) => color};
    width: 85px;
    height: 37px;
`;
