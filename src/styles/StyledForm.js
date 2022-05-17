import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledForm = styled(motion.section)`
  --small: 0.8rem;
  --rem: 1rem;

  padding: 1rem;
  background-color: var(--secondary-bg);
  border-radius: 1rem;
  box-shadow: var(--drop-shadow) 0px 4px 50px 0px;

  &.wide {
    width: 500px;
  }

  &.inline {
    --small: 0.6rem;
    --rem: 0.8rem;

    border-radius: 0;
    border-top: 1px solid var(--primary-active);
    background-color: inherit;
    box-shadow: none;
    padding: 1rem 0 0 0;
    margin: 1rem 0 0 0;
    font-size: 0.8rem;
    .form-field {
      textarea,
      input {
        border-radius: 2rem;
      }
    }
    .form-field-err {
      height: auto;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    justify-content: space-evenly;
    gap: var(--rem);
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

    &.fake {
      cursor: pointer;

      * {
        pointer-events: none;
      }

      &:hover {
        filter: brightness(0.97);
      }
    }

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
          top: calc(var(--rem) * 1.2 + 1px);

          &.active {
            top: calc(var(--rem) / 2);
            left: 0;
            font-size: var(--small);
          }
        }
        &:focus + label {
          top: calc(var(--rem) / 2);
          left: 0;
          font-size: var(--small);
        }
      }

      grid-area: input;
      padding: calc(var(--rem) * 1.5) calc(var(--rem)) calc(var(--rem) / 2);
      border: 1px solid var(--primary-active);
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
