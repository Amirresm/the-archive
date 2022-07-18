import { Drawer } from "@mui/material";
import { ReactNode } from "react";

type SnapModalProps = {
  open?: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export default function SnapModal({ open, onClose, children }: SnapModalProps) {
  return (
    <Drawer
      open={open}
      anchor="bottom"
      onClose={onClose}
      PaperProps={{ className: "rounded-t-lg" }}
    >
      {children}
    </Drawer>
  );
}
