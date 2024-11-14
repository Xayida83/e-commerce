import { Item } from "../Item/Item"

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
}

type ItemProps = {
  products: Product[];
}

export const ItemList: React.FC<ItemProps> = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {products.map((product, index) => (
        <Item
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}
          isLarge={index % 3 === 0}  //* Var tredje bild blir stor
        />
      ))}
    </div>
  );
}