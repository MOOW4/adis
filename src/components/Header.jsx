import PropTypes from "prop-types";

export default function Header({tabChange, children}) {
  return (
    <header className="text-center bg-indigo-200 flex justify-between px-8">
      <h1 className="py-4 text-4xl font-bold text-indigo-600 font-custom">{children}</h1>
      <ul className="md:flex gap-4 justify-evenly w-1/6">
        <li className="flex-center">
          <button onClick={() => tabChange('about')} className="btn-header">About</button>
        </li>
        <li className="flex-center">
          <button onClick={() => tabChange('gallery')} className="btn-header">Gallery</button>
        </li>
        <li className="flex-center">
          <button onClick={() => tabChange('contact')} className="btn-header">Contact</button>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  tabChange: PropTypes.func.isRequired
}