import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { getItem } from "../../api";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  const [packingUnit, setPackingUnit] = useState("");
  const [orderQty, setOrderQty] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
  const [netAmount, setNetAmount] = useState(0);

  useEffect(() => {
    // Fetch item data
    const fetchItem = async () => {
      try {
        const response = await getItem(id);
        const imageUrls = formatImagePaths(response.data.itemImages);
        setItem({ ...response.data, itemImages: imageUrls });
        setSelectedImage(imageUrls[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching item:", error);
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  useEffect(() => {
    if (item) {
      const calculatedItemAmount = orderQty * item.unitPrice;
      setItemAmount(calculatedItemAmount);
      const validDiscount = Math.min(discount, calculatedItemAmount);
      setNetAmount(calculatedItemAmount - validDiscount);
    }
  }, [orderQty, discount, item]);

  const formatImagePaths = (images) => {
    const serverUrl = "http://localhost:8080";
    return images.map((image) => `${serverUrl}${image}`);
  };

  if (loading) return <CircularProgress />;

  return (
    <Box sx={{ display: "flex" }}>
      {item ? (
        <>
          <Box
            sx={{
              flex: 2,
              textAlign: "center",
              px: 4,
            }}
          >
            <Box
              sx={{
                boxShadow: "10px 10px 30px rgba(230, 230, 250, 0.8)",
                borderRadius: "15px",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <img
                src={selectedImage}
                alt={item.itemName}
                style={{
                  width: "30rem",
                  height: "20rem",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 2,
              }}
            >
              {item.itemImages.map((image, index) => (
                <IconButton key={index} onClick={() => setSelectedImage(image)}>
                  <img
                    src={image}
                    alt={`thumbnail-${index}`}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      border:
                        selectedImage === image ? "2px solid #007bff" : "none",
                      borderRadius: "5px",
                    }}
                  />
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              flex: 2,
              paddingLeft: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              {item.itemName}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "text.primary", fontSize: "18px" }}
            >
              Item No:
              <span style={{ color: "darkslategray" }}> {item.itemNo}</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "text.primary", fontSize: "18px" }}
            >
              Stock Unit:
              <span style={{ color: "darkslategray" }}> {item.stockUnit}</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "text.primary", fontSize: "18px" }}
            >
              Unit Price:
              <span style={{ color: "darkslategray" }}>
                {" "}
                {item.unitPrice}/-
              </span>
            </Typography>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <TextField
                  label="Order Quantity"
                  type="number"
                  value={orderQty}
                  onChange={(e) => setOrderQty(Number(e.target.value))}
                  min={1}
                  sx={{ width: "7rem" }}
                />
                <Select
                  value={packingUnit}
                  onChange={(e) => setPackingUnit(e.target.value)}
                  displayEmpty
                  sx={{ width: "100%" }}
                >
                  <MenuItem value="" disabled>
                    Select Packing Unit
                  </MenuItem>
                  <MenuItem value="Box">Box</MenuItem>
                  <MenuItem value="Pack">Pack</MenuItem>
                  <MenuItem value="Bag">Bag</MenuItem>
                </Select>
              </Box>
              <TextField
                label="Discount"
                type="number"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
              />
              <Box>
                <Typography variant="body1">
                  Item Amount: {itemAmount}
                </Typography>
                <Typography variant="body1">Net Amount: {netAmount}</Typography>
              </Box>
              <Button variant="contained">Add to Purchase Order</Button>
            </form>
          </Box>
        </>
      ) : (
        <Typography variant="body1">Item not found.</Typography>
      )}
    </Box>
  );
};

export default ItemDetails;
