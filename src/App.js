import { Box, Grid, Typography } from "@mui/material";
import { TodoListContainer } from "components/TodoListContainer";
import React from "react";

function App() {
  return (
    //we want the row to take the entire space 100% of the grid that is why we gave 12
    <Grid container={true}>
      <Grid item xs={12}>
        <Box sx={{ padding: "16px" }}>
          <Typography variant="h4" align="center">
            Todo List
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1} md={2} lg={3} />
      <Grid item xs={10} md={8} lg={6}>
        <TodoListContainer />
      </Grid>

      <Grid item xs={1} md={2} lg={3}></Grid>
    </Grid>
  );
}

export default App;
