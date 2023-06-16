import { useTheme } from "@emotion/react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const styled = (theme) => {
  return {
    select: {},
  };
};

const button = {
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  fontSize: "20px",
  color: "black",
  marginTop: "20px",
  backgroundColor: "#61dafb",
};
export default function ContactUs() {
  const [selected, setSelected] = useState(0);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const theme = useTheme();
  const s = styled(theme);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
      }}
    >
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
          padding: "10px 20px",
          border: "1px solid " + theme.palette.brands.main,
        }}
      >
        <Typography color="text.brands" variant="h3">
          Contact us
        </Typography>
        <TextField
          id="name"
          name="name"
          label="Your Name"
          sx={s}
          variant="filled"
        />
        <TextField
          id="phone"
          name="phone"
          label="Your Phone"
          variant="filled"
        />
        <TextField id="email" name="email" label="Email" variant="filled" />
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            sx={s.select}
            value={selected}
            onChange={handleSelect}
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                style: {
                  maxHeight: "20rem",
                  width: 250,
                  fontSize: "2rem",
                },
              },
            }}
          >
            <MenuItem value="0" selected>
              <em>Choose your favourite nation</em>
            </MenuItem>
            <MenuItem value={1}>England</MenuItem>
            <MenuItem value={2}>France</MenuItem>
            <MenuItem value={3}>Spain</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <BorderColorIcon color="primary" />
          <TextField
            id="content"
            name="content"
            label="Your content"
            variant="filled"
            multiline
            rows={1}
            rowsMax={100}
            sx={{ flex: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <Button variant="outlined" sx={button}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
