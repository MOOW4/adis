import {Mail, Instagram, Twitter} from 'lucide-react';


export default function Contacts() {
  return (
    <main className="flex-col flex-center h-screen">
      <h2 className="text-3xl text-custom">Contacts</h2>
      <ul className="mt-8">
        <a className="group">
          <li className="flex gap-4 items-center">
            <Mail size={42} className="group-hover:text-indigo-500"/>
            <span className="text-xl text-custom text-stone-800 group-hover:text-indigo-500">jinxiedis@example.com</span>
          </li>
        </a>
        <a href="https://google.com" className="group">
          <li className="mt-8 flex gap-4 items-center">
            <Instagram size={42} className="group-hover:text-indigo-500"/>
            <span className="text-xl text-custom text-stone-800 group-hover:text-indigo-500">Instagram</span>
          </li>
        </a>
        <a href="https://x.com/jinxiedis" className="group">
          <li className="mt-8 flex gap-4 items-center">
            <Twitter size={42} className="group-hover:text-indigo-500"/>
            <span className="text-xl text-custom text-stone-800 group-hover:text-indigo-500">Twitter</span>
          </li>
        </a>
      </ul>
    </main>
  );
}