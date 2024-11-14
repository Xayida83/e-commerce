
type Item = {
  imageUrl: string;
  title: string;
  price: number;
  isLarge?: boolean;
}

export const Item : React.FC<Item> = ({ imageUrl, title, price, isLarge }) =>  {
  const imageSize = isLarge ? { width: 152, height: 224 } : { width: 152, height: 110 };

  return (
    <div style={{ width: imageSize.width, height: imageSize.height }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%' }} />
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}