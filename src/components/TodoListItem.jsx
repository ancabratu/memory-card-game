import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { borderBottom } from "@mui/system";
import { grey } from "@mui/material/colors";
import { useState } from "react";

export const TodoListItem = ({
  id,
  done,
  description,
  toggleTask,
  updateTask,
  deleteTask,
}) => {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleOnClick = () => {
    setEditing(true);
  };
  const handleOnChange = (event) => {
    setNewDescription(event.target.value);
    if (event.keyCode == 13) {
      setEditing(false);
    }
  };

  const handleOnBlur = (event) => {
    setEditing(false);
    //update the parent state (with new description)
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setEditing(false);
      //update the parent state (with new description)
      updateTask(id, newDescription);
    }
  };

  const handleOnCancelClick = () => {
    //confirm for deletion
    let confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      //update the parent state (delete this task)
      deleteTask(id);
    }
  };

  const onCheckboxClick = () => {
    toggleTask(id);
  };
  return (
    <Box>
      {/* deoarece sunt puse toate intr-un div, se for afisa pe o singura linie */}
      <ListItem sx={{ borderBottom: 1, borderColor: grey[400], padding: 1 }}>
        <Checkbox checked={done} onClick={onCheckboxClick} />
        {editing ? (
          <TextField
            value={newDescription}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            fullWidth={true}
            variant="standard"
            autoFocus={true}
          />
        ) : (
          <ListItemText onClick={handleOnClick}>{description}</ListItemText>
        )}
        <IconButton onClick={handleOnCancelClick}>
          <CancelIcon></CancelIcon>
        </IconButton>
      </ListItem>
    </Box>
  );
};
