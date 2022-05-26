import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledProfilePage = styled(motion.main)`
  --pbg: var(--primary-bg);
  --sbg: var(--secondary-bg);
  --pac: var(--primary-accent);
  --pat: var(--primary-active);

  margin: auto auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "details suggestions";
  gap: 2rem;

  & > section {
    border: 1px solid var(--pat);
    background-color: var(--sbg);
  }

  .user {
    grid-area: details;
  }

  .user_details {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas: "image" "info";
  }

  .user_details_image-wrapper {
    grid-area: image;
    height: 150px;
    position: relative;
  }

  .user_details_image-wrapper_image {
    --width: 150px;
    position: absolute;
    bottom: calc(var(--width) * -1 / 3);
    left: calc(15% - (var(--width) / 2));
    background-color: var(--pac);
    aspect-ratio: 1;
    width: var(--width);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid var(--pbg);
  }

  .user_details_image-wrapper_actions {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
    gap: 0.5rem;
  }

  .user_details_info {
    grid-area: info;
    padding: 3rem 7.5% 2rem; // TODO refactor for responsiveness
  }
  .user_details_info_username {
    text-transform: capitalize;
  }
  .user_details_info_date {
    text-transform: capitalize;
  }
  .suggestions {
    grid-area: suggestions;
  }

  max-width: 1200px;
`;
