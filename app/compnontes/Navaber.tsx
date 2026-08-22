import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent px-6 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-blue-50 cursor-pointer">
         <Link href="/"> Style<span className="text-orange-500">Studio</span> </Link>
        </h1>
        
        <Link href="/booking" className="bg-orange-500 font-semibold text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition duration-300 cursor-pointer">
        Book Seat
        </Link>

      </div>
    </nav>
  );
};

export default Navbar