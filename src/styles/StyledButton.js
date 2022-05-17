import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$color ? "var(--primary-accent)" : "transparent"};
  border: 0;
  border-radius: ${(props) =>
    props.$round ? "calc(var(--primary-radius)*3)" : "var(--primary-radius)"};
  padding: ${(props) => (props.$padding ? "inherit" : "1rem")};
  font-size: ${(props) => (props.$small ? "0.8em" : "inherit")};
  font-weight: ${(props) => (props.$bold ? "bold" : "400")};
  color: ${(props) =>
    props.$color ? "var(--secondary-bg)" : "var(--primary-text)"};

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
