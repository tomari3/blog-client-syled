import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPost = styled(motion.article)`
  padding: 1rem;
  background-color: var(--secondary-bg);
  border-radius: 10px;
  box-shadow: var(--drop-shadow) 0px 4px 50px 0px;

  min-width: 350px;

  display: flex;
  flex-direction: column;

  .post-content {
    flex: 1;
    background-color: var(--secondary-bg);
  }

  .post-content-details {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas: "img username" "img date";

    column-gap: 0.5rem;
  }

  .post-content-details_username {
    grid-area: username;
  }

  .post-content-details_date {
    grid-area: date;
  }

  .post-content-details_img {
    grid-area: img;
    height: 3rem;
    aspect-ratio: 1;
    background-color: var(--primary-accent);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-content_tags {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0;
  }

  .post-content_header {
    font-size: 2rem;
    font-weight: bold;
  }

  .post-interactions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .interaction-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    button {
      transition: all 0.3s ease;
      border-radius: 100%;
      padding: 5px;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      svg,
      polygon {
        transform: translate(0px, 1px);
        height: 3ch;

        &.Like {
          transform: translate(0px, 2px);
        }
      }
    }

    &:hover {
      button {
        color: var(--primary-accent);

        &.svg {
          background-color: rgba(var(--accent-custom), 0.2);
          svg path,
          polygon {
            stroke: var(--primary-accent);
          }
        }
      }
    }
  }

  .post-comments-modal {
    overflow-y: scroll;

    .post-content {
      padding: 1rem;
    }
  }
`;
