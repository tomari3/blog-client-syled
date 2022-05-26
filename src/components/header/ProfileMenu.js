import React, { useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";
import { StyledButton } from "../../styles/StyledButton";
import { StyledProfileMenu } from "../../styles/StyledProfileMenu";

export const ProfileMenu = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const { setAuth } = useAuth();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    setAuth({});
  };
  return (
    <StyledProfileMenu className="ProfileMenu">
      <div
        onClick={() => setProfileMenu(!profileMenu)}
        className="profile-menu"
      >
        <div className="profile-menu_img">img</div>
        {profileMenu && (
          <section
            onClick={(e) => e.stopPropagation()}
            className="profile-menu_dropdown"
          >
            <div className="profile-menu_dropdown_info">
              <div className="profile-menu_dropdown_info_name">
                <StyledButton $bold>tom</StyledButton>
              </div>
            </div>
            <div className="profile-menu_dropdown_options">
              <div className="profile-menu_options_dropdown_settings">
                <StyledButton>settings</StyledButton>
                <StyledButton>settings</StyledButton>
                <StyledButton>settings</StyledButton>
              </div>
              <div className="profile-menu_options_dropdown_system">
                <StyledButton>system</StyledButton>
                <StyledButton>system</StyledButton>
              </div>
            </div>
          </section>
        )}
      </div>
    </StyledProfileMenu>
  );
};
