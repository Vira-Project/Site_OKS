function PhotosItem({ title, covers }) {
  return (
    <div className="photos_item">
      <div className="photos_item_title">
        <span>{title}</span>
      </div>
      <div className="photos_item_covers">{covers}</div>
    </div>
  );
}

export default PhotosItem;
