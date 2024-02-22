import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddProductForm from "ui/forms/AddProduct";
import { Card } from "@mui/material";


const AddProduct = () => {
   return (
      <Box>
         <Typography
            variant="h5">
            Add new Book
         </Typography>
         <Card>
            <AddProductForm />
         </Card>

      </Box>
   );
}

export default AddProduct;