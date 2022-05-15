import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledForm = styled(motion.section)`
  padding: 1rem;
  background-color: var(--secondary-bg);
  border-radius: 1rem;
  box-shadow: var(--drop-shadow) 0px 4px 50px 0px;

  form {
    display: flex;
    flex-direction: column;
    width: clamp(300px, 30vw, 400px);
  }

  .row {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
  }

  .form-header {
    text-transform: capitalize;
    font-weight: bold;
  }

  .form-err {
    font-size: 0.8em;
    color: var(--primary-err);
    height: 3ch;
    padding-left: 0.5rem;
  }

  .form-field {
    display: grid;

    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr auto;

    align-items: center;

    grid-template-areas: "label detail" "input input" "err err";

    position: relative;

    .checkbox-wrapper {
      --circle-size: 200%;
      --toggle-size: 2rem;
      --times: 2;

      grid-area: input;
      background-color: grey;
      border-radius: 1rem;
      height: var(--toggle-size);
      width: calc(var(--toggle-size) * var(--times));
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "off on";

      justify-content: center;
      align-items: center;
      align-content: center;
      justify-items: center;

      box-shadow: var(--drop-shadow-strong) inset 0px 5px 15px;

      &.active {
        background-color: var(--primary-accent);
      }

      + label {
        padding: 0;
      }

      span {
        height: var(--circle-size);
        aspect-ratio: 1;
        background-color: white;
        border-radius: 100%;
        pointer-events: none;
        transition: 0.3s all ease;
        grid-area: off;
      }
      input {
        height: calc(var(--circle-size) * var(--times));
        aspect-ratio: 1;
        opacity: 0;
        grid-area: off;
        transform: translateX(calc(var(--times) * 1rem / 2));

        cursor: pointer;

        &:checked + span {
          transform: translateX(calc(var(--times) * 1rem));
          scale: 1;
        }
      }
    }

    label {
      grid-area: label;
      z-index: 1;
      padding-left: 1rem;
      pointer-events: none;
      color: var(--muted-text);

      transition: 0.3s all ease;
    }

    input,
    textarea {
      &:not([type="checkbox"]) {
        + label {
          grid-row: 2;
          position: absolute;
          top: calc(1.2rem + 1px);

          &.active {
            top: 0.5rem;
            left: 0;
            font-size: 0.8rem;
          }
        }
        &:focus + label {
          top: 0.5rem;
          left: 0;
          font-size: 0.8rem;
        }
      }

      grid-area: input;
      padding: 1.5rem 1rem 0.5rem;
      border: 1px solid var(--primary-active);
      font-size: 1.2rem;
      border-radius: var(--primary-radius);
      resize: none;
    }

    .form-field-detail {
      grid-area: detail;
      position: relative;
      padding: 2px 4px;
      z-index: 10;
      &:hover > article {
        opacity: 1;
        pointer-events: all;
      }

      span {
        color: var(--muted-text);
        cursor: pointer;
      }
      article {
        top: 0;
        position: absolute;
        left: 1rem;
        font-size: 0.8rem;
        border: 1px solid black;
        border-radius: var(--primary-radius);
        border-top-left-radius: 0;
        height: inherit;
        width: max-content;
        max-width: 10rem;
        padding: 5px;
        background-color: var(--primary-bg);
        opacity: 0;
        pointer-events: none;
      }
    }

    .form-field-err {
      grid-area: err;
      font-size: 0.8em;
      color: var(--primary-err);
      height: 3ch;
      padding-left: 0.5rem;
    }
  }
`;
