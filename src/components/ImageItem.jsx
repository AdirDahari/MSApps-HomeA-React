import { Box, Modal, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import "../style/imageItem.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 400 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const ImageItem = ({ url, views, likes, downloads, tags }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <img
        className="imageItem"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={url}
        alt={tags}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ p: 1 }}>
            <Typography variant="h4">
              Views:
              <Typography>{views}</Typography>
            </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography variant="h4">
              Likes:
              <Typography>{likes}</Typography>
            </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography variant="h4">
              Downloads:
              <Typography>{downloads}</Typography>
            </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography variant="h4">
              Tags:
              <Typography>{tags}</Typography>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

ImageItem.propTypes = {
  url: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageItem;
