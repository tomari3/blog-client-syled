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

    max-width: 350px;
  }

  .form-header {
    text-transform: capitalize;
    font-weight: bold;
  }

  .form-err {
    grid-area: err;
    font-size: 0.8em;
    color: var(--primary-err);
  }

  .form-field {
    display: grid;

    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr auto;

    align-items: center;

    row-gap: 0.5rem;

    grid-template-areas: "label detail" "input input" "err err";

    position: relative;
    label {
      grid-area: label;
      grid-row: 2;
      z-index: 1;
      padding-left: 1rem;
      pointer-events: none;

      transition: 0.5s all ease;

      &.active {
        position: absolute;
        top: 0.5rem;
        left: 0;
        font-size: 0.8rem;
      }
    }

    input,
    textarea {
      grid-area: input;
      padding: 1.5rem 1rem 0.5rem;
      border: 1px solid var(--primary-active);
      font-size: 1.2rem;
      border-radius: 0.5rem;
    }

    button {
    }

    .form-field-detail {
      grid-area: detail;
    }

    .form-field-err {
      grid-area: err;
      font-size: 0.8em;
      color: var(--primary-err);
      height: 3ch;
    }
  }
`;
