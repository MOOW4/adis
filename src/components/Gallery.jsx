import PropTypes from 'prop-types';

export default function Gallery({images}) {
  return (
    <main className="p-5 md:p-10">
      <div className="gap-5 lg:gap-8 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {images.map((image, index) => (
          <img src={image} key={index} className="rounded transition duration-500 hover:scale-105"/>
        ))}
      </div>
    </main>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}


