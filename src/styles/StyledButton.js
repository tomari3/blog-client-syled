import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSubmit = styled(StyledButton)`
  cursor: pointer;
  --thick: 0.2rem;
  height: 100%;
  background-color: transparent;
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
  background-color: transparent;
  border: 0;
  padding: 0.4em;
  justify-content: start;

  &.active {
  }
`;
