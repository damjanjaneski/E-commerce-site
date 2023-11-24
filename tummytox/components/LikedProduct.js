export default function LikedProduct({ item }) {
  return (
    <div>
      <img src={item.img} />
      <h3>{item.name}</h3>
    </div>
  );
}
