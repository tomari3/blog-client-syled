import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledForm = styled(motion.section)`
  --small: 0.8rem;
  --rem: 1rem;

  padding: 1rem;
  background-color: var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadowLight) 0px 4px 50px 0px;

  &.wide {
    width: 500px;
  }

  &.inline {
    --small: 0.6rem;
    --rem: 0.8rem;
    border-radius: 0;
    border-top: 1px solid var(--primaryDark);
    background-color: inherit;
    box-shadow: none;
    padding: 1rem 0 0 0;
    margin: 1rem 0 0 0;
    .form-field {
      textarea,
      input {
        border-radius: calc(var(--radiusBigger));
      }
    }
    .form-field-err {
      height: auto;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 0.8rem;
      width: min-content;
    }
  }

  &.sub {
    padding: 0;
    --small: 0.6rem;
    --rem: 0.5rem;
    background-color: inherit;
    box-shadow: none;
    font-size: 0.8rem;
    .form-field {
      textarea,
      input {
        border-radius: calc(var(--radiusHuge));
      }
    }
    .form-field-err {
      height: auto;
    }

    /* button {
      margin-top: 1rem;
      padding: 0.5rem 0.8rem;
      width: min-content;
    } */
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
    color: var(--error);
    height: 3ch;
    padding-left: 0.5rem;
  }

  .form-field {
    display: grid;

    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr auto;

    align-items: center;

    grid-template-areas: "label detail" "input input" "err err";
    width: 100%;
    position: relative;

    &.fake {
      cursor: pointer;

      * {
        pointer-events: none;
      }

      &:hover {
        .input {
          background-color: var(--primaryDarker);
        }
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

      box-shadow: var(--shadowDark) inset 0px 5px 15px;

      &.active {
        background-color: var(--accent);
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
      padding-left: 1rem;
      pointer-events: none;
      color: var(--textLighter);

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
      border: 1px solid var(--primaryDark);
      border-radius: var(--radius);
      resize: none;
      overflow: hidden;
      word-wrap: break-word;

      &:focus-visible {
        outline: 1px solid var(--primaryDark);
      }
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
        color: var(--textLighter);
        cursor: pointer;
      }
      article {
        top: 0;
        position: absolute;
        left: 1rem;
        font-size: 0.8rem;
        border: 1px solid black;
        border-radius: var(--radius);
        border-top-left-radius: 0;
        height: inherit;
        width: max-content;
        max-width: 10rem;
        padding: 5px;
        background-color: var(--primary);
        opacity: 0;
        pointer-events: none;
      }
    }

    .form-field-err {
      grid-area: err;
      font-size: 0.8em;
      color: var(--error);
      height: 3ch;
      padding-left: 0.5rem;
    }
  }
`;
