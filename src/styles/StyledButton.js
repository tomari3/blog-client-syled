import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$color ? "var(--accent)" : "transparent"};
  border: 0;
  border-radius: ${(props) =>
    props.$round ? "var(--radius)" : "var(--radiusSmaller)"};
  padding: ${({ padding }) => handlePadding(padding)};
  font-size: ${({ size }) => size};
  font-weight: ${(props) => (props.$bold ? "bold" : "400")};
  color: ${(props) => (props.$color ? "var(--primaryLighter)" : "var(--text)")};
  color: ${(props) => (props.$muted ? "var(--textLight)" : "")};

  &:hover > a {
    color: inherit;
  }

  span {
    font-weight: bold;
    padding: 0 0.5ch;
  }
`;

const handlePadding = (color) => {
  switch (color) {
    case "smaller":
      return "var(--paddingSmaller)";
    case "small":
      return "var(--paddingSmall)";
    case "reg":
      return "var(--padding)";
    case "big":
      return "var(--paddingBig)";
    case "bigger":
      return "var(--paddingBigger)";
    default:
      return "0";
  }
};
