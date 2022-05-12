import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "transparent"};
  border: 0;
  border-radius: var(--primary-radius);
  padding: 1rem;
  font-weight: ${(props) => (props.$bold ? "bold" : "400")};
  color: ${(props) =>
    props.$bgColor ? "var(--secondary-bg)" : "var(--primary-text)"};

  a {
    text-decoration: none;
    color: var(--muted-text);
  }
  &:hover > a {
    color: inherit;
  }

  span {
    font-weight: bold;
    padding: 0 0.5ch;
  }
`;

export const StyledSubmit = styled(StyledButton)`
  --thick: 0.2rem;
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  border: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(var(--thick) / 2);
  span {
    height: var(--thick);
    width: 1rem;
    background-color: var(--primary-accent);

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: translateX(calc(var(--thick) * -1));
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
`;

export const StyledCommentButton = styled(StyledButton)`
  color: var(--primary-text);
  font-size: 0.9em;
  background-color: transparent;
  border: 0;
  font-weight: 400;
  padding: 0.4em;
  justify-content: start;

  &.active {
  }
`;
