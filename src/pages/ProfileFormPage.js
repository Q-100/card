import { useState } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import { Box, Button, Container, Grid, Stack, Typography, TextField, Avatar, IconButton } from '@mui/material';
import Logo from '../components/Logo';

import { writeNewUser } from '../firebase/database';
import { getCoord, toBase64 } from '../util';

const profileItems = [
  {key: "firstName", label: "First Name", half: true, required: true},
  {key: "lastName", label: "Last Name", half: true, required: true},
  {key: "phone", label: "Office Phone Number"},
  {key: "mobile", label: "Mobile Phone Number", required: true},
  {key: "email", label: "Email", required: true},
  {key: "address1", label: "Address 1", required: true},
  {key: "address2", label: "Address 2"},
  {key: "jobTitle", label: "Job Title"},
  {key: "company", label: "Company", required: true},
  {key: "role", label: "Company Role", required: true},
  {key: "url", label: "URL"}
]

const snsItems = [
  {key: 'facebook', label: "Facebook URL"},
  {key: 'instagram', label: "Instagram URL"},
  {key: 'linkedin', label: "LinkedIn URL"},
  {key: 'twitter', label: "Twitter URL"},
  {key: 'youtube', label: "YouTube URL"},
  {key: 'tiktok', label: "TikTok URL"}
]

const TextForm = ({label, value, onChange, onClick, width}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onClick ? undefined : onChange(e.target.value)}
      onClick={onClick || undefined}
      sx={{my: 1, width: width || '100%'}}
    />
  )
}

const ProfileFormPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(profileItems.reduce((a, item) => ({ ...a, [item.key]: ""}), {}) );
  const [userId, setUserId] = useState();

  const isFilled = profileItems.reduce((a, item) => a && (!item.required || data[item.key] != ""), true);
  const custom = searchParams.get('custom');

  const profileUrl = `/profile/${userId}` + (custom ? `?custom=${custom}` : "")

  const setPhoto = async (v) => {
    toBase64(v).then((url) => {
      setData({...data, photo: url});
    })
  }

  const getAddress = () => {
    new window.daum.Postcode({
      oncomplete: (result) => {
        getCoord(result.address).then((coord) => {
          setData({
            ...data,
            address1: result.address,
            zonecode: result.zonecode,
            coord
          })
        })
      }
    }).open();
  }

  const submit = () => {
    writeNewUser({...data, custom}).then((_userId) => {
      setUserId(_userId);
    })
  }
  
  return (
    <Box whiteSpace="pre-line">
      <Container sx={{my: 10}} maxWidth="md">
        <Stack flexDirection="column" alignItems="center" justifyContent="center" my={2}>
          <Logo sx={{mb: 5}} />
          <Typography variant="h4" paragraph>Enter your information.</Typography>
          {/* <TextField
            value={userId}
            onChange={e => setUserId(e.target.value)}
            label="ID"
            placeholder="Enter ID for edit"
          />
          <Button>Load</Button> */}
          <label htmlFor="icon-button-file">
            <IconButton component="span">
              <Avatar sx={{width: 160, height: 160}} src={data.photo} />
            </IconButton>
          </label>
          <input 
            accept="image/*" 
            id="icon-button-file" 
            type="file" 
            style={{
              display: 'none',
            }}
            onChange={e => {
              setPhoto(e.target.files[0])
            }}
          />
        </Stack>
        <Grid container my={5} justifyContent="center" spacing={2}>
          {profileItems.map((item) => 
            <Grid
              item
              xs={12}
              sm={item.half ? 6 : 12}
              key={`input-form-${item.key}`}
            >
              <TextForm
                label={item.label}
                value={data[item.key]}
                onChange={(v) => setData({...data, [item.key]: v})}
                onClick={item.key == 'address1' && getAddress}
                width={item.width}
              />
            </Grid>
          )}
        </Grid>
        <Grid container my={5} justifyContent="center" spacing={2}>
          <Typography variant="h5">Personal SNS</Typography>
          {snsItems.map((item) => 
            <Grid
              item
              xs={12}
              key={`input-form-${item.key}`}
            >
              <TextForm
                label={item.label}
                value={data[item.key]}
                onChange={(v) => setData({...data, [item.key]: v})}
                width={item.width}
              />
            </Grid>
          )}
        </Grid>
        {Boolean(userId) ? (
          <Button
            component={RouterLink}
            to={profileUrl}
            variant="outlined"
            fullWidth
          >
            Check your profile
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            onClick={submit}
            disabled={!isFilled}
          >
            Submit
          </Button>
        )}
      </Container>
    </Box>
  );
}

export default ProfileFormPage;