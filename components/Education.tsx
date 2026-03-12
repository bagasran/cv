import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-orange-100">

      <h2 className="text-3xl font-bold text-center mb-10">
        Education
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        {/* Kuliah */}
        <Card className="transition hover:-translate-y-2 hover:shadow-xl">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg">
              D3 Manajemen Informatika
            </h3>

            <p className="text-gray-600">
              Universitas Logistik dan Bisnis Internasional
            </p>

            <p className="text-sm mt-2">
              2023 - Sekarang
            </p>

            <p className="text-sm">
              IPK : 3.68 / 4.00
            </p>
          </CardContent>
        </Card>

        {/* SMK */}
        <Card className="transition hover:-translate-y-2 hover:shadow-xl">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg">
              SMK TI Garuda Nusantara Cimahi
            </h3>

            <p className="text-gray-600">
              Rekayasa Perangkat Lunak (RPL)
            </p>

            <p className="text-sm mt-2">
              2020 - 2023
            </p>
          </CardContent>
        </Card>

      </div>

    </section>
  )
}