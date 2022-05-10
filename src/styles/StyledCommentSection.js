import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCommentSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  --transition: all 0.1s ease;

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

  .comment-btn {
    display: flex;
    padding: 0.2rem 0.5rem;
    user-select: none;
    cursor: pointer;

    &.main {
      border-left: 4px solid var(--primary-accent);
    }
  }

  .comment-input {
    form {
      display: grid;
      grid-template-columns: 90% 10%;
      align-items: center;
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

    button {
      aspect-ratio: 1;
      width: 100%;
      background-color: transparent;
      border: 0;
      position: relative;
      cursor: pointer;
      &::after {
        --side: 3px;
        --size: 30%;
        content: "";
        position: absolute;
        width: var(--size);
        aspect-ratio: 1;
        border-width: var(--side) var(--side) 0 0;
        border-style: solid;
        border-color: var(--primary-accent);
        transform-origin: center;
        transform: rotate(45deg);
        top: calc(50% - (var(--size) / 2));
      }

      &::before {
        transition: var(--transition);
        --side: 3px;
        --size: 0%;
        content: "";
        position: absolute;
        width: var(--size);
        aspect-ratio: 1;
        border-width: var(--side) 0 0 0;
        border-style: solid;
        border-color: var(--primary-accent);
        transform-origin: center;
        top: calc(50%);
        right: 1px;
      }

      &:hover::before {
        --size: 50%;
      }
    }
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .comment {
    display: grid;
  }

  .comment-details {
    display: flex;
    flex-direction: column;
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
