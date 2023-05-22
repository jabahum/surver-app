import { Box, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import FullScreenLoader from '../../components/FullScreenLoader';
import Message from '../../components/Message';
import { useGetSurveysQuery } from '../../redux/survey/survey-api';
import SurveyItem from '../../components/survey/survey.component';


export default function HomePage() {


  const { isLoading, isError, error, data: surveys } = useGetSurveysQuery();

  useEffect(() => {
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: 'top-right',
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: 'top-right',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) {
    return <FullScreenLoader />;
  }


  return (
    <Container
    maxWidth={false}
    sx={{ backgroundColor: '#2363eb', height: '100vh' }}
  >
    {surveys?.length === 0 ? (
      <Box maxWidth='sm' sx={{ mx: 'auto', py: '5rem' }}>
        <Message type='info' title='Info'>
          No posts at the moment
        </Message>
      </Box>
    ) : (
      <Grid
        container
        rowGap={5}
        maxWidth='lg'
        sx={{
          margin: '0 auto',
          py: '5rem',
          gridAutoRows: 'max-content',
        }}
      >
        {surveys?.map((survey) => (
          <SurveyItem key={survey.id} survey={survey} />
        ))}
      </Grid>
    )}
  </Container>
  );
}