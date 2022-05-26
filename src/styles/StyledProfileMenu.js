import styled from "styled-components";

export const StyledProfileMenu = styled.article`
  --width: 200px;
  background-color: var(--primaryLighter);
  position: absolute;
  right: 100%;
  z-index: 1;
  width: var(--width);
  .profile-menu {
    position: relative;
  }
  .profile-menu_img {
    z-index: 2;
    user-select: none;
    cursor: pointer;
    --width: 48px;
    position: absolute;
    width: var(--width);
    left: calc(100% - var(--width) * 1.5);
    top: calc(var(--width) / 2 * -1);
    border-radius: 100%;
    border: 4px solid var(--primaryLighter);
    aspect-ratio: 1;
    background-color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-menu_dropdown {
    border: 1px solid var(--primaryDark);
    padding: var(--paddingSmaller) var(--padding);
    display: flex;
    flex-direction: column;

    & div:not(:last-child) {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        left: calc(var(--padding) * -1);
        width: calc(var(--width) - 1px);
        height: 1px;
        background-color: var(--primaryDark);
      }
    }
  }

  .profile-menu_dropdown_info {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  .profile-menu_dropdown_info_name {
  }
`;
