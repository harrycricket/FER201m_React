import { useParams } from "react-router-dom";
import "./detail.css";
import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import OndemandVideoTwoToneIcon from "@mui/icons-material/OndemandVideoTwoTone";
import { BASE_URL } from "../../constant";
import ModelVideoPlayer from "../../components/model-video-player/ModelVideoPlayer";

export default function Detail() {
  const [open, setOpen] = useState();
  const [player, setPlayer] = useState();
  const userName = useParams();
  const theme = useTheme();
  console.log(theme);

  useEffect(() => {
    getPlayer();
  }, []);
  const getPlayer = async () => {
    try {
      console.log();
      const response = await fetch(BASE_URL + "/a/" + userName.id);
      const player = await response.json();
      console.log(player);

      setPlayer(player);
    } catch (e) {
      console.log(e);
    }
  };
  let cost = player?.cost?.toLocaleString();
  return (
    <div className="container">
      {player && (
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            width: "50%",
            position: "relative",
            padding: 2,
          }}
        >
          <div className="badge">{player.name}</div>
          <Box>
            <img src={player.img} alt="" style={{ width: "100%" }} />
          </Box>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper2,
              padding: 2,
              position: "relative",
            }}
          >
            <Typography variant="h4" color="text.brands">
              {player.club}
            </Typography>
            <Typography variant="h3" color="text.primary">
              Market value: € {cost}
            </Typography>

            <Box sx={{ padding: 2 }}>
              <Typography variant="p" color="text.p">
                {player.info}
              </Typography>
            </Box>
            <IconButton
              color="error"
              sx={{ position: "absolute", top: 0, right: 1 }}
              onClick={() => setOpen(true)}
            >
              <OndemandVideoTwoToneIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <ModelVideoPlayer open={open} setOpen={setOpen} player={player} />
          </Box>
        </Box>
      )}
    </div>
  );
}
