import { Divider, Stack } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getListUserSelector } from "../redux/userSlice";
import User from "../component/User";

export default function ListUser() {
  const users = useSelector(getListUserSelector);
  return (
    <Stack
      sx={{
        backgroundColor: "white",
        width: "100%",
        boxShadow: "5px 5px 10px #3434342e",
        borderRadius: "10px",
      }}
    >
      {users?.length !== 0
        ? users.map((user, i) => {
            return (
              <Fragment key={user.id}>
                {i === 0 ? (
                  <Fragment key={user.id}>
                    <User key={user.id} user={user} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <Divider />
                    <User key={user.id} user={user} />
                  </Fragment>
                )}
              </Fragment>
            );
          })
        : ""}
    </Stack>
  );
}
