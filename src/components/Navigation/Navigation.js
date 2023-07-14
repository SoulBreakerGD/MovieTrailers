import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    MenuItem,
    Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const pages = ["about", "news", "contact"];
function ResponsiveAppBar() {
    const { user, logOut } = UserAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Movie
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link
                                        to={`/${page.toLowerCase()}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Typography
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            textAlign="center"
                                        >
                                            {page}
                                        </Typography>
                                    </Link>
                                    {/* <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: "none" }}>
                                        <Button sx={{ my: 2, color: "white", display: "block" }}>
                                            Sign in
                                        </Button>
                                    </Link> */}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Movie
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Link
                                to={`/${page.toLowerCase()}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {user?.displayName ? (
                            <div>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user.email} src={user.photoURL} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">
                                            <Link to="/dashboard" style={{ textDecoration: "none" }}>
                                                Dashboard
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <Typography textAlign="center" onClick={handleSignOut}>
                                            Logout
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <Button sx={{ my: 2, color: "white", display: "block" }}>
                                    Sign in
                                </Button>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
