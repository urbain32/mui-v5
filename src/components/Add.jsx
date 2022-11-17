import React from "react";
import { Fab, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";

const Adding = () => {
  return (
    <div>
      <Tooltip
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
    </div>
  );
};

export default Adding;
