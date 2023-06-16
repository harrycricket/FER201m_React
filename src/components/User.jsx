import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import userSlice from "../redux/userSlice";
import { useDispatch } from "react-redux";
export default function User({ user }) {
  const [updateUserName, setUpdateUserName] = useState();
  const dispatch = useDispatch();
  const handleUpdate = () => {
    if (updateUserName) {
      dispatch(
        userSlice.actions.updateUsername({
          ...user,
          username: updateUserName,
        })
      );
      setUpdateUserName("");
    }
  };
  return (
    <Grid2 container sx={{ padding: 1, width: "100%" }}>
      <Grid2 xs={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          sx={{ height: "100%" }}
        />
      </Grid2>
      <Grid2 xs={3}>
        <Typography variant="h5">{user.name}</Typography>
        <Typography>{user.username}</Typography>
      </Grid2>
      <Grid2 xs={6}>
        <TextField
          value={updateUserName}
          onChange={(e) => setUpdateUserName(e.target.value)}
          variant="filled"
          fullWidth
          label="Type new username "
        />
      </Grid2>
      <Grid2
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ height: "80%" }}
          onClick={handleUpdate}
        >
          Update
        </Button>
        <IconButton
          onClick={() => dispatch(userSlice.actions.deleteUser(user.id))}
        >
          <DeleteIcon />
        </IconButton>
      </Grid2>
    </Grid2>
  );
}
