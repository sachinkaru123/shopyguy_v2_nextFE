import { WavingHandRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import FlexRow from "components/flex-box/flex-row";
import { link } from "fs";

export default function NonRegisteredUserCard() {
    return (
        <>
          <FlexRow>
            <WavingHandRounded />
      
            <Box mx={1} my={2}>
              <Typography variant="body2" color="initial">
                Hello, Welcome to Kithula.lk
              </Typography>
              <Typography variant="caption" color="initial">
                "Where Finest Goods Meet Convenience!"
              </Typography>
            </Box>
          </FlexRow>
      
          <Typography variant="body1" color="initial" mt={2}>
            Your next favorite find is just a click away. Create an account or log in
            now to:
          </Typography>
      
          {/* List of benefits */}
          <Box component="ul" mt={1} pl={2}>
            <Typography component="li" variant="body2" color="text.secondary">
              Unlock exclusive deals and discounts 🎁
            </Typography>
            <Typography component="li" variant="body2" color="text.secondary">
              Save your favorites and track your orders 📦
            </Typography>
            <Typography component="li" variant="body2" color="text.secondary">
              Enjoy a personalized shopping experience tailored to you ✨
            </Typography>
          </Box>
      
          {/* Action Buttons */}
          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mx: 1 }}
              onClick="#"
            >
             Login/Register
            </Button>
            
          </Box>
        </>
      );
      
}
