import {AiOutlinePlus} from 'react-icons/ai'
import { FaTachometerAlt, FaWpforms } from 'react-icons/fa';
import {TbTableShortcut} from 'react-icons/tb'
import {SlCalender} from 'react-icons/sl'


function Aside({toggleAddModule}: any) {

  return (
    <>
    <aside className="relative bg-blue-500 h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <a
          href="index.html"
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          Admin
        </a>
        <button onClick={toggleAddModule} className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
        <AiOutlinePlus className='mr-4 text-2xl' /> New Report
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <a
          href="index.html"
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          <FaTachometerAlt className='mr-4 text-2xl' />
          Dashboard
        </a>
        <a
          href="tables.html"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <TbTableShortcut className='mr-4 text-2xl'/>
          Tables
        </a>
        <a
          href="forms.html"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <FaWpforms className='mr-4 text-2xl'/>
          Forms
        </a>
        <a
          href="calendar.html"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <SlCalender className='mr-4 text-2xl'/>
          Calendar
        </a>
      </nav>
    </aside>
    </>
  );
}

export default Aside;
