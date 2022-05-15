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
  border-radius: var(--primary-radius);
  padding: 1rem;
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
