import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from '../../Components/User/ListItems';

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

const Profile = ({ user }) => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Mock yoga courses data
  const yogaCourses = [
    {
      id: 1,
      name: "Mindful Yoga Practice",
      instructor: "Yogi Aria",
      time: "8:00 AM - 10:00 AM",
      date: "Mon, Wed, Fri",
      imgURL: "data:image/jpeg;base64,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",
      academy: { name: "Yoga Bliss Academy" },
      courseFee: 1200,
      description: "Explore mindfulness through yoga poses and meditation.",
      address: "123 Zen Garden Ave",
      city: "Calmville",
      state: "CA",
      country: "USA",
      rating: 4.8,
      progress: 30,
    },
    {
      id: 2,
      name: "Vinyasa Flow Yoga",
      instructor: "Yogini Maya",
      time: "6:00 PM - 8:00 PM",
      date: "Tue, Thu",
      imgURL: "data:image/jpeg;base64,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",
      academy: { name: "Yoga Harmony Institute" },
      courseFee: 1000,
      description: "Experience the flow of movement and breath in this dynamic yoga class.",
      address: "456 Serenity Street",
      city: "Tranquilville",
      state: "NY",
      country: "USA",
      rating: 4.5,
      progress: 50,
    },
  ];

  // Use the first two courses from yogaCourses
  const enrolledCourses = yogaCourses.slice(0, 2);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              User Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <Container
            component="main"
            maxWidth="lg"
            sx={{
              display: "flex",
              flexWrap: "wrap", // Allow courses to wrap to the next line
              justifyContent: "center", // Center the courses horizontally
            }}
          >
            {/* Profile Card */}
            <Paper
              elevation={3}
              style={{
                marginBottom: 20,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%", // Make the profile card take full width
              }}
            >
              <Avatar style={{ width: 100, height: 100, marginBottom: 10 }}>
                {user.name[0]}
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                style={{ marginBottom: 10 }}
              >
                User Profile
              </Typography>
             
              <Typography component={"h1"} variant="h6">
                <strong>Name: </strong>
                {user.name}
              </Typography>
              <br />
              <Typography component={"h1"} variant="h6">
                <strong>Email: </strong>
                {user.email}
              </Typography>
              <br />
              <Typography component={"h1"} variant="h6">
                <strong>Phone: </strong>
                {user.phone}
              </Typography>
              <br />
            </Paper>

            {/* Enrolled Courses Cards */}
            <Typography variant="h4" sx={{ mt: 4, mb: 2, width: "100%" }}>
              Enrolled Courses
            </Typography>
            {enrolledCourses.map((course) => (
              <Card key={course.id} style={{ width: 300, margin: 10 }}>
                <CardMedia
                  component="img"
                  height="140"
                  // Replace 'course.imgURL' with your actual image URL property
                  image={course.imgURL}
                  alt={course.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" paragraph>
                    Instructor: {course.instructor} <br /> Time: {course.time} | Date: {course.date}
                  </Typography>
                  <LinearProgress variant="determinate" value={course.progress} />
                  <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
                    Progress: {course.progress}%
                  </Typography>
                  {/* Add more details as needed */}
                </CardContent>
              </Card>
            ))}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
