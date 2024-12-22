import {
    Avatar,
    Divider,
    MenuItem,
    Typography,
  } from "@mui/material";
  
  import { History, Login } from "@mui/icons-material";
  import Heart from "icons/Heart";
  import FlexRow from "components/flex-box/flex-row";

export default function AfterUserLogged() {
  return (
    <>
      <FlexRow>
        <Avatar></Avatar>
        <Typography mx={2}>Hello Welcome</Typography>
      </FlexRow>
      

      <MenuItem>
        <FlexRow>
          <Heart></Heart>
          <Typography mx={2}>WishList</Typography>
        </FlexRow>
      </MenuItem>

      <MenuItem>
        <FlexRow>
          <History></History>
          <Typography mx={2}>History</Typography>
        </FlexRow>
      </MenuItem>
      <Divider></Divider>

      <MenuItem>
        <FlexRow>
          <Login></Login>
          <Typography mx={2}>Logout</Typography>
        </FlexRow>
      </MenuItem>
    </>
  );
}
