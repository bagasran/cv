export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-amber-50">
      <img
        src="/image/profile.jpeg"
        className="w-40 h-40 rounded-full object-cover border-4 border-orange-400 mb-6"
      />

      <h1 className="text-5xl font-bold text-orange-600 mb-4">
        Bagas Randika Pratama
      </h1>

      <p className="text-gray-700 max-w-xl">
        Mahasiswa D3 Manajemen Informatika yang berfokus pada pengembangan
        solusi sistem informasi berbasis teknologi.
      </p>
    </section>
  );
}
