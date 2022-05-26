import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  gap: 2rem;
  background-color: var(--primaryLighter);
  /* border-bottom: 1px solid black; */
`;
