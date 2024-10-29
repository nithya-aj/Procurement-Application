import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.default",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const AddModal = ({ open, handleClose, title, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-title"
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            color: "secondary.accent",
          }}
        >
          {title}
        </Typography>
        <Box mt={2}>{children}</Box>
      </Box>
    </Modal>
  );
};

export default AddModal;
