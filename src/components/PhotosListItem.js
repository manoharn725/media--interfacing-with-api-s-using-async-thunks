function PhotosListItem({ photo }) {
  console.log(photo);
  return (
    <div>
      <img className="h-20 w-20" src={photo.url} alt={photo.id} />
    </div>
  );
}

export default PhotosListItem;
