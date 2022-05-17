import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCommentSection = styled(motion.section)`
  font-size: 0.8rem;
  padding: 1rem 0;
  transition: filter 0.2s ease;
  border-top: 1px solid var(--primary-active);
  margin-top: 1rem;
  .comments {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .comment {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "side content" "side interaction";
    gap: 0.5rem;
    .comment-side {
      grid-area: side;

      .comment-side_line {
      }
      .comment-side_img {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-accent);
        height: 2rem;
        aspect-ratio: 1;
        border-radius: 100%;
        grid-area: img;
      }
    }
    .comment-content {
      background-color: var(--primary-active);
      padding: 0.5rem 2rem 0.5rem 0.5rem;
      border-radius: var(--primary-radius);
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      .comment-content_name {
        text-transform: capitalize;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    .comment-interaction {
      font-size: 0.9em;
      grid-area: interaction;
      display: flex;
      gap: 0.5rem;
      color: var(--muted-text);

      .b {
        font-weight: bold;
        text-transform: capitalize;

        &:hover {
          text-decoration: underline;
        }
      }
      .w {
      }
    }
  }
`;
