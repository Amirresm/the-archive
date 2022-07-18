import { List, ListItem, ListItemButton } from "@mui/joy";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import usePageInfo from "src/hooks/usePageInfo";

type DrawerProps = {
  open?: boolean;
  onClose?: () => void;
  links?: { title: string; url: string }[];
};
export default function MainDrawer({ open, onClose, links }: DrawerProps) {
  const { pageTitle } = usePageInfo();

  return (
    <Drawer
      open={open}
      anchor="left"
      onClose={onClose}
      PaperProps={{ className: "min-w-[200px]" }}
    >
      <List>
        {(links || []).map((link) => (
          <ListItem>
            <ListItemButton
              selected={link.title === pageTitle}
              onClick={onClose}
            >
              <Link to={link.url}>{link.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
