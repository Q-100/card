import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Stack,
  Container,
  Divider,
  Typography,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import {
  Phone as PhoneInTalkOutlinedIcon,
  PhoneIphone as PhoneIphoneIcon,
  EmailOutlined as EmailOutlinedIcon,
  MapOutlined as MapOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  Link as LinkIcon,
  ContentCopy as ContentCopyIcon,
  Check as CheckIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";
import Logo from "../components/Logo";
import Scheduler from "../components/Scheduler";
import _ from "lodash";
import moment from "moment";

import { getUser, addSchedule } from "../firebase/database";
import { logProfileView } from "../firebase/analytics";
import { getVcard, isNumeric } from "../util";

const icons = {
  work: <PhoneInTalkOutlinedIcon />,
  mobile: <PhoneIphoneIcon />,
  email: <EmailOutlinedIcon />,
  address: <MapOutlinedIcon />,
  url: <HomeOutlinedIcon />,
  link: <LinkIcon />,
};

const href_prefix = {
  work: "tel:",
  mobile: "tel:",
  email: "mailto:",
  url: "",
  link: "",
};

const hangulregex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;

const ProfileItem = ({ name, value }) => {
  const href = name == "address" ? "#address" : href_prefix[name] + value;
  let displayValue = value;
  if (isNumeric(value)) {
    if (value.length == 11)
      displayValue = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(
        7,
        11
      )}`;
    if (value.length == 10)
      displayValue = `${value.slice(0, 2)}-${value.slice(2, 6)}-${value.slice(
        6,
        10
      )}`;
  }
  return (
    <Stack flexDirection="row" alignItems="center" my={1}>
      <Stack
        mr={4}
        justifyContent="center"
        alignItems="center"
        sx={{ width: 38, height: 38, borderRadius: 38, bgcolor: "#ccc" }}
      >
        {icons[name]}
      </Stack>
      <Typography
        component="a"
        href={href}
        align="left"
        sx={{ maxWidth: "80%", lineBreak: "anywhere", fontWeight: "bold" }}
      >
        {displayValue}
      </Typography>
    </Stack>
  );
};

const ProfilePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { profileId } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [played, setPlayed] = useState(false);
  const [vcard, setVcard] = useState("");
  const [profile, setProfile] = useState({});

  const newSchedule = (schedule) => {
    addSchedule(profileId, schedule).then(() => {
      getUser(profileId).then((data) => {
        setProfile(data);
      });
    });
  };

  useEffect(() => {
    getUser(profileId)
      .then((data) => {
        setProfile(data);
        setLoaded(true);
        const card = getVcard(data, window.location.href);
        var blob = new Blob([card], { type: "text/x-vcard" });
        setVcard(window.URL.createObjectURL(blob));
        if (data.custom) {
          setSearchParams({ custom: data.custom });
        }
        logProfileView(profileId);
      })
      .catch((err) => {
        console.log(err);
        alert("존재하지 않는 페이지입니다.");
        navigate(`/`);
      });
  }, []);

  const nameIsHangul =
    profile.firstName &&
    profile.lastName &&
    hangulregex.test(profile.firstName) &&
    hangulregex.test(profile.lastName);

  if (!loaded) return <></>;
  if (loaded && !played && profile.video) {
    return (
      <Box height="100vw" width="100vh">
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setPlayed(true)}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <source src={profile.video} type="video/mp4" />
        </video>
      </Box>
    );
  }

  return (
    <Box>
      <Container maxWidth="sm">
        <Stack mt={2} mb={5} alignItems="center">
          <Avatar sx={{ mb: 4, width: 160, height: 160 }} src={profile.photo} />
          {nameIsHangul ? (
            <Typography variant="h3" paragraph>
              {profile.lastName}
              {profile.firstName}
            </Typography>
          ) : (
            <Typography variant="h3" paragraph>
              {profile.firstName} {profile.lastName}
            </Typography>
          )}
          <Typography variant="h5" paragraph>
            {profile.role} / {profile.company}
          </Typography>
          <Typography variant="h5" paragraph>
            {profile.jobTitle}{" "}
          </Typography>
          <Button
            component={Link}
            variant="contained"
            href={vcard}
            download="contact.vcf"
          >
            연락처 저장
          </Button>
        </Stack>
        <Divider />
        <Stack mt={3}>
          {profile.phone && <ProfileItem name="work" value={profile.phone} />}
          <ProfileItem name="mobile" value={profile.mobile} />
          <ProfileItem name="email" value={profile.email} />
          {profile.address1 && (
            <ProfileItem
              name="address"
              value={`${profile.address1}${
                profile.address2 ? ", " + profile.address2 : ""
              }`}
            />
          )}
          {profile.url && <ProfileItem name="url" value={profile.url} />}
          {/* <ProfileItem name="link" value={window.location.href} /> */}
        </Stack>
        <Stack
          my={2}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          {profile.facebook && (
            <Link component={IconButton} href={profile.facebook}>
              <FacebookIcon
                sx={{ color: "primary.main", fontSize: 40, mx: 1 }}
              />
            </Link>
          )}
          {profile.linkedin && (
            <Link component={IconButton} href={profile.linkedin}>
              <LinkedInIcon
                sx={{ color: "primary.main", fontSize: 40, mx: 1 }}
              />
            </Link>
          )}
          {profile.instagram && (
            <Link component={IconButton} href={profile.instagram}>
              <InstagramIcon
                sx={{ color: "primary.main", fontSize: 40, mx: 1 }}
              />
            </Link>
          )}
          {profile.youtube && (
            <Link component={IconButton} href={profile.youtube}>
              <YouTubeIcon
                sx={{ color: "primary.main", fontSize: 40, mx: 1 }}
              />
            </Link>
          )}
          {profile.twitter && (
            <Link component={IconButton} href={profile.twitter}>
              <TwitterIcon
                sx={{ color: "primary.main", fontSize: 40, mx: 1 }}
              />
            </Link>
          )}
          {profile.tiktok && (
            <Link component={IconButton} href={profile.tiktok}>
              <FaTiktok size="1.2em" style={{ margin: "0 0.3em" }} />
            </Link>
          )}
        </Stack>
        <Divider />
      </Container>
      <Container maxWidth="md">
        <Stack mt={5} mb={10} id="address">
          <Typography variant="h4" align="center" paragraph>
            일정 요청
          </Typography>
          <Stack mt={5}>
            <Scheduler profile={profile} onSubmit={newSchedule} />
          </Stack>
        </Stack>
      </Container>
      <Stack mt={5} mb={10} id="address">
        <Typography variant="h4" align="center" paragraph>
          위치
        </Typography>
        <Typography fontWeight="bold" paragraph sx={{ px: 2 }}>
          {profile.address1} {profile.address2}
        </Typography>
        {Boolean(profile.coord) && (
          <iframe
            width="100%"
            height={450}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API}&q=${profile.address1}&center=${profile.coord.lat},${profile.coord.lng}`}
          ></iframe>
        )}
      </Stack>
    </Box>
  );
};

export default ProfilePage;
