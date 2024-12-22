import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";



// CUSTOM DATA MODEL
import Product from "models/Product.model";
import ProductCard8 from "components/product-cards/product-card-8";


// ==============================================================
interface Props {
  products: Product[];
  breadcrumb?: string;
}
// ==============================================================

export default async function AllProducts({ products, breadcrumb = "All Products" }: Props) {
  return (
    <div className="mb-4">
      <Paragraph fontSize={18} fontWeight={600} mb={3}>
        {breadcrumb}
      </Paragraph>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xl={3} md={4} sm={6} xs={12} key={product.id}>
            <ProductCard8 product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
