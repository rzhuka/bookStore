import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddProductForm, { AddProductProps } from "ui/forms/AddProduct";
import { Card } from "@mui/material";
import { withBreadcrumbs } from "ui/layouts/Breadcrumbs";
import { Routes } from "config/routes";
import { Book, useContext } from "feature/product";


const AddProduct = () => {
   const { add } = useContext();

   const onSubmit: AddProductProps['onSubmit'] = book => add(book as Book);

   return (
      <Box>
         <Typography
            variant="h5"
            sx={{
               textAlign: 'center',
               mb: 2
            }}
            >
            Add new Book
         </Typography>
         <Card>
            <AddProductForm
               onSubmit={onSubmit}
            />
         </Card>

      </Box>
   );
}

export default withBreadcrumbs(AddProduct, _ => ({
   parentLinks: [
      {
         to: Routes.Root,
         label: 'Home'
      },
   ],
   currentView: {
      label: 'Add Book'
   }
}));
