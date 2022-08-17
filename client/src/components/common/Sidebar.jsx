import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Link, useNavigate, useParams } from "react-router-dom";
import assets from "../../assets/index";
import { useEffect, useState } from "react";
// import boardApi from '../../api/boardApi'
// import { setBoards } from '../../redux/features/boardSlice'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import FavouriteList from './FavouriteList'

const Sidebar = () => {
  const user = useSelector((state) => state.user.value);
  const sidebarWidth = 250;

  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{ width: sidebarWidth,height:'100%' }}
    >
      Sidebar
    </Drawer>
  );
};

export default Sidebar;
