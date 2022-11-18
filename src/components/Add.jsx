import { Fab, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";
import Modal from "./Modal";
import React, { useState } from "react";
const Adding = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add'
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 20 },
        }}>
        <Fab color='primary' aria-label='add'>
          <Add />
        </Fab>
      </Tooltip>
      <Modal setOpen={setOpen} open={open} />
    </div>
  );
};

export default Adding;
