import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WhatshotIcon from "@mui/icons-material/Whatshot";
export default function AboutUs() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", padding: "50px 200px" }}
    >
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <GroupsIcon />
            <Typography>THE TEAM</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The team in soccer consists of eleven players on the field at one
              time, including a goalkeeper who is responsible for protecting the
              goal. Each player has a specific position and role to play within
              the team's strategy and tactics, such as forwards who are
              responsible for scoring goals, defenders who prevent the opposing
              team from scoring, and midfielders who link the defense and
              attack. A successful team in soccer requires strong communication,
              coordination, and teamwork among all players on the field.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <FmdGoodIcon />

            <Typography>Nation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In football, a nation typically refers to a national team
              consisting of players who represent a particular country in
              international competitions such as the World Cup or continental
              championships. These teams are often composed of the best players
              from that country's domestic leagues as well as other professional
              leagues around the world. National teams in football are usually
              managed by a head coach who is responsible for selecting the
              squad, implementing tactics and strategies, and motivating the
              players. The success of a national team in football depends on
              many factors such as the quality of the players, the team's style
              of play, and the strength of the opposition.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <WhatshotIcon />

            <Typography>Daily news</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Fernandez rose through the ranks at Valencia's youth academy and
              made his first-team debut last season, scoring two goals in six
              appearances. His impressive performances caught the attention of
              scouts from several top European clubs, but it was Manchester
              United who secured his signature.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
