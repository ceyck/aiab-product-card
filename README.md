## Ejemplo

```
import { ProductButtons,ProductCard,ProductImage,ProductTitle } from "aiab-product-card";
```

````<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, count, isMaxCountReached }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>```
````
