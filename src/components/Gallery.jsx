import PropTypes from 'prop-types';
import {useInView} from "react-intersection-observer";


export default function Gallery({images}) {

  return (
    <main className="p-5 md:p-10">
      <div className="gap-5 lg:gap-8 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {images.map((image, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [ref, inView] = useInView();
          return (
              <img ref={ref} key={index} src={image} alt={`image no. ${index}`} className={`rounded transition-all ease-in-out duration-500 ${inView ? 'delay-50 opacity-100' : 'opacity-20'} hover:scale-105 hover:rotate-1`}/>
          );
        })}
      </div>
    </main>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}


