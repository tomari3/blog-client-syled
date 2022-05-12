import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledForm = styled(motion.form)`
  padding: 1rem;
  background-color: var(--secondary-bg);
  border-radius: 10px;
  box-shadow: var(--drop-shadow) 0px 4px 50px 0px;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  .form-field {
    display: grid;

    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr auto;

    row-gap: 0.5rem;

    grid-template-areas: "label detail" "input input" "err err";

    label {
      grid-area: label;
    }

    input,
    textarea {
      grid-area: input;
      padding: 0.5rem;
    }

    .form-field-detail {
      grid-area: detail;
    }

    .form-field-err {
      grid-area: err;
      font-size: 0.8em;
      color: var(--primary-err);
    }
  }
`;
