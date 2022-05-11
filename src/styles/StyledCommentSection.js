import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCommentSection = styled(motion.section)`
  --transition: all 0.1s ease;
  background-color: var(--secondary-bg);

  flex: 1;
  min-width: 350px;
  padding: 1rem;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  z-index: 10;

  .sub {
    font-size: 0.8rem;
  }

  .like-btn {
    display: flex;
    padding: 0.2rem 0.5rem;
    user-select: none;
    cursor: pointer;

    span {
      --color: red;
      box-sizing: border-box;
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      border: 1px solid var(--color);

      &.active {
        background-color: var(--color);
      }
    }
  }

  .comment-input {
    form {
      display: flex;
      gap: 1em;
      align-items: center;
      width: 95%;
    }

    textarea {
      transition: var(--transition);
      font-size: 0.8rem;
      resize: none;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary-input);
      border: 0;
      border-radius: 0.5rem;
      padding: 0.2rem 0.5rem;

      &:focus-visible {
        outline: 1px solid var(--primary-active);
      }
    }
  }

  .comments {
    padding: 1rem;
    background-color: var(--primary-bg);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .comment {
    display: flex;
    flex-direction: column;
  }

  .comment-details {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .comment-details_user {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    > * {
      cursor: pointer;
    }
  }

  .comment-details_user_img {
    height: 2rem;
    aspect-ratio: 1;
    background-color: var(--primary-accent);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .comment-details_user_name {
    font-size: 1rem;
  }

  .comment-details_user_date {
    opacity: 0.6;
  }

  .comment-details_content {
    padding: 0.5rem 0 0.5rem 0.5rem;
  }

  .comment-interact {
    display: flex;
    flex-direction: column;
  }

  .comment-interact_btn {
    display: flex;
    justify-content: space-between;
  }
`;
