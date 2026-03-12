import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-amber-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-orange-50">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-2">Sistem Informasi Sampah</h3>

            <p className="text-sm text-gray-600">
              Sistem berbasis web untuk pengelolaan data sampah, monitoring,
              laporan, dan manajemen pengguna.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-orange-50">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-2">Sistem Pembayaran SPP TK</h3>

            <p className="text-sm text-gray-600">
              Sistem pencatatan pembayaran SPP yang membantu administrasi
              sekolah mengelola transaksi siswa.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
