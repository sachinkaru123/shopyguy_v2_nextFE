import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENT
import PersonOutline from "@mui/icons-material/PersonOutline";
// CUSTOM ICON COMPONENT
import ShoppingBagOutlined from "icons/ShoppingBagOutlined";
// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Icon,
  MenuItem,
  Typography,
} from "@mui/material";

import NonRegisteredUserCard from "./login-button-components/non-registerd";
import AfterUserLogged from "./login-button-components/after-logged";

// ==============================================================
interface Props {
  toggleDialog: () => void;
  toggleSidenav: () => void;
}
// ==============================================================

export default function LoginCartButtons({
  toggleDialog,
  toggleSidenav,
}: Props) {
  const { state } = useCart();

  const ICON_COLOR = { color: "grey.600" };

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "grey.600",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "grey.400",
    },
  }));

  return (
    <div>
      <BootstrapTooltip
        title={
          <>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                {/* if user not registered */}
                {/* <NonRegisteredUserCard /> */}

                {/* user after logged */}
                <AfterUserLogged/>
              </CardContent>
            </Card>
          </>
        }
      >
        <IconButton>
          <PersonOutline sx={ICON_COLOR} />
        </IconButton>
      </BootstrapTooltip>

      <Badge badgeContent={state.cart.length} color="primary">
        <IconButton onClick={toggleSidenav}>
          <ShoppingBagOutlined sx={ICON_COLOR} />
        </IconButton>
      </Badge>
    </div>
  );
}
