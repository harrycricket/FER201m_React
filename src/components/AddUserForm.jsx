import { Box, Button, TextField } from "@mui/material";
import React, { useId, useState } from "react";
import { useDispatch } from "react-redux";
import userSlice from "../redux/userSlice";
const inputStyle = {
  input: {
    fontSize: "24px",
  },
  label: {
    fontSize: "24px",
  },
  ".MuiOutlinedInput-notchedOutline legend": {
    fontSize: "20px",
  },
};
export default function AddUserForm() {
  const id = useId();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userSlice.actions.addUser({ id: id, name: name, username: username })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 2,
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "5px 5px 10px rgba(28, 28, 28, 0.318)",
          gap: 1,
        }}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          label="Name"
          sx={inputStyle}
        />
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          label="Username"
          sx={inputStyle}
        />
        <Button sx={{ fontSize: "24px" }} type="submit" variant="contained">
          Add new user
        </Button>
      </Box>
    </form>
  );
}
