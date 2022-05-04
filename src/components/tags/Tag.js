import { StyledTag } from "../../styles/StyledTag";

export const Tag = ({ tagData }) => {
  return (
    <StyledTag>
      <p>{tagData.name}</p>
    </StyledTag>
  );
};
