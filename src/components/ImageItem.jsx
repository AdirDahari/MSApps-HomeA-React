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
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const ImageItem = ({ url, views, likes, downloads, tags }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <img className="imageItem" src={url} alt={tags} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                display: "inline",
                fontFamily: "Nunito",
                fontWeight: 700,
                fontSize: "1.5rem",
              }}
            >
              Views:
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontFamily: "Nunito",
                fontWeight: 400,
                fontSize: "1.2rem",
                ml: 1.5,
              }}
            >
              {views}
            </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                display: "inline",
                fontFamily: "Nunito",
                fontWeight: 700,
                fontSize: "1.5rem",
              }}
            >
              Likes:
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontFamily: "Nunito",
                fontWeight: 400,
                fontSize: "1.2rem",
                ml: 1.5,
              }}
            >
              {likes}
            </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                display: "inline",
                fontFamily: "Nunito",
                fontWeight: 700,
                fontSize: "1.5rem",
              }}
            >
              Downloads:
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontFamily: "Nunito",
                fontWeight: 400,
                fontSize: "1.2rem",
                ml: 1.5,
              }}
            >
              {downloads}
            </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                display: "inline",
                fontFamily: "Nunito",
                fontWeight: 700,
                fontSize: "1.5rem",
              }}
            >
              Tags:
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontFamily: "Nunito",
                fontWeight: 400,
                fontSize: "1.2rem",
                ml: 1.5,
              }}
            >
              {tags}
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
