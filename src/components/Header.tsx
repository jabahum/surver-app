import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { LoadingButton as _LoadingButton } from '@mui/lab';
import { useAppSelector } from '../store';

const LoadingButton = styled(_LoadingButton)`
  padding: 0.4rem;
  color: #222;
  font-weight: 500;
  border: 2px solid #222;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userState.user);

  const [logoutUser, { isLoading, isSuccess, error, isError }] =
    useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      window.location.href = '/auth/login';
    }

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

  const onLogoutHandler = async () => {
    logoutUser();
  };

  return (
    <>
      <AppBar position='static' sx={{ backgroundColor: '#fff' }}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography
              variant='h6'
              onClick={() => navigate('/')}
              sx={{ cursor: 'pointer', color: '#222', fontWeight: 700 }}
            >
              CodevoWeb
            </Typography>
            <Box display='flex' sx={{ ml: 'auto' }}>
              {!user && (
                <>
                  <LoadingButton
                    sx={{ mr: 2 }}
                    onClick={() => navigate('/auth/signup')}
                  >
                    SignUp
                  </LoadingButton>
                  <LoadingButton onClick={() => navigate('/auth/login')}>
                    Login
                  </LoadingButton>
                </>
              )}
              {user && (
                <LoadingButton onClick={onLogoutHandler} loading={isLoading}>
                  Logout
                </LoadingButton>
              )}
            
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
function useLogoutUserMutation(): [any, { isLoading: any; isSuccess: any; error: any; isError: any; }] {
  throw new Error('Function not implemented.');
}

