import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPostGallery = styled(motion.section)`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem; */

  display: flex;
  gap: clamp(0.2rem, 2vmin, 3vmin);
  flex-wrap: wrap;

  > article {
    flex: 1 1 350px;
  }
`;
