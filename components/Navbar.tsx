export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white">
      <h1 className="text-xl font-bold">My CV</h1>

      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}