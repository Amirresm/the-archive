import { Button } from "@mui/joy";
import {
  AppBar,
  IconButton,
  Theme,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import usePageInfo from "src/hooks/usePageInfo";
import Drawer from "./Drawer";

type HeaderProps = {
  titleOverride?: string;
  links?: { title: string; url: string }[];
};
export default function Header({ titleOverride, links }: HeaderProps) {
  const { pageTitle } = usePageInfo();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const renderMobile = () => (
    <IconButton
      className="!text-white"
      onClick={() => setDrawerOpen((ps) => !ps)}
    >
      <MenuIcon />
    </IconButton>
  );
  const renderDesktop = () => (
    <>
      {links && <span className="basis-full" />}
      {(links || []).map((link) => (
        <Button component={Link} to={link.url} size="sm">
          {link.title}
        </Button>
      ))}
    </>
  );

  return (
    <>
      {isMobile && (
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          links={links}
        />
      )}
      <AppBar position="static">
        <Toolbar>
          {isMobile && renderMobile()}
          {titleOverride || pageTitle}
          {!isMobile && renderDesktop()}
        </Toolbar>
      </AppBar>
    </>
  );
}
