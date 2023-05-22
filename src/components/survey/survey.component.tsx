import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Survey } from "../../store/type";
import { FC, useEffect } from "react";

const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT;

interface ISurveyItemProps {
  survey: Survey;
}

const SurveyItem: FC<ISurveyItemProps> = ({ survey }) => {
  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345, overflow: "visible" }}>
          <CardMedia
            component="img"
            height="250"
            alt="green iguana"
            sx={{ p: "1rem 1rem 0" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#4d4d4d", fontWeight: "bold", height: "64px" }}
            >
              {survey.title.length > 50
                ? survey.title.substring(0, 50) + "..."
                : survey.title}
            </Typography>
            <Box display="flex" alignItems="center" sx={{ mt: "1rem" }}>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "#dad8d8",
                  p: "0.1rem 0.4rem",
                  borderRadius: 1,
                  mr: "1rem",
                }}
              >
                {survey.description}
              </Typography>
    
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SurveyItem;
