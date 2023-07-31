import Image from "next/image";

const fetchProductImg = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
}

const ProductImg = async () => {
  const products = await fetchProductImg();

  return (
    <div>
      <h1>Product Thumbnail Image</h1>
      {
        products.map((product) => (
          <Image
            key={product.id}
            src={product.thumbnail}
            title={product.title}
            width={200}
            height={200}
            alt={product.title}
            priority={false}
            loading="lazy"
          />
        ))
      }
    </div>
  )
}

export default ProductImg