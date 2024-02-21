import { Container } from "@mui/material";
import React from "react";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ padding: "0!important" }}>
      {children}
    </Container>
  );
};

export default Layout;
