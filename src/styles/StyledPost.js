import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPost = styled(motion.article)`
  cursor: pointer;
  padding: 1rem;
  background-color: var(--secondary-bg);
  min-width: 350px;
  display: flex;
  flex-direction: column;

  transition: filter 0.2s ease;

  border: 1px solid var(--primary-active);
  border-bottom: 0;

  &:last-child {
    border: 1px solid var(--primary-active);
  }

  &:hover {
    filter: brightness(0.97);
  }

  .post-content {
    flex: 1;
    border-bottom: 1px solid var(--primary-active);
    padding-bottom: 2rem;
    margin-bottom: 1rem;
  }

  .post-content-details {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1.5rem 1fr;
    grid-template-areas: "img username" "img date";

    column-gap: 1rem;
  }

  .post-content-details_username {
    grid-area: username;
    text-transform: capitalize;
    padding: 4px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  .post-content-details_date {
    grid-area: date;
    font-size: 0.8rem;
    padding: 0 0 0 4px;
  }

  .post-content-details_img {
    grid-area: img;
    height: 100%;
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

  .comment-input {
    form {
      display: flex;
    }
    padding-bottom: 2px;
  }
`;
