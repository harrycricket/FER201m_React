import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export default function News() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        gap: 3,
      }}
    >
      <Grid2
        container
        width={"70%"}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid2 xs={3}>
          <img
            src="https://phantom-marca.unidadeditorial.es/7432b1264985d4dc9dded5d4713428b9/resize/660/f/webp/assets/multimedia/imagenes/2023/06/16/16868726141496.jpg"
            alt=""
            style={{ width: "90%" }}
          />
        </Grid2>
        <Grid2 xs={9}>
          <Typography variant="h5" color="text.secondary">
            Lionel Messi brushes off pitch invader, Al Nassr fan doing CR7
            celebrations
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        container
        width={"70%"}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid2 xs={3}>
          <img
            src="https://phantom-marca.unidadeditorial.es/b9218a5e7e4b8f8443f6a5427d7beed0/resize/660/f/webp/assets/multimedia/imagenes/2023/06/15/16868402335036.jpg"
            alt=""
            style={{ width: "90%" }}
          />
        </Grid2>
        <Grid2 xs={9}>
          <Typography variant="h5" color="text.secondary">
            Messi's stunning Miami homes: Two luxury flats in the Porsche Design
            Tower and the Regalia Tower
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        container
        width={"70%"}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid2 xs={3}>
          <img
            src="https://phantom-marca.unidadeditorial.es/820eb4ba6f1b7ef7b27493b5aaed4543/resize/660/f/webp/assets/multimedia/imagenes/2023/06/15/16868375665226.jpg"
            alt=""
            style={{ width: "90%" }}
          />
        </Grid2>
        <Grid2 xs={9}>
          <Typography variant="h5" color="text.secondary">
            Leo Messi bids farewell to the season with goal and win for
            Argentina against Australia
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}
