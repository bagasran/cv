export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-amber-100 border-b border-orange-200 p-5 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-orange-500">CV</h1>

      <div className="space-x-6 text-gray-700">
        <a href="#about" className="hover:text-orange-500">
          About
        </a>
        <a href="#skills" className="hover:text-orange-500">
          Skills
        </a>
        <a href="#education" className="hover:text-orange-500">
          Education
        </a>
        <a href="#projects" className="hover:text-orange-500">
          Projects
        </a>
        <a href="#contact" className="hover:text-orange-500">
          Contact
        </a>
      </div>
    </nav>
  );
}
