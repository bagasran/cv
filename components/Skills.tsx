import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Figma,
  FileCodeCornerIcon,
  FileText,
  LayoutDashboard,
} from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-amber-50">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-400 border">
          <CardContent className="p-6 flex flex-col items-center gap-3">
            <FileCodeCornerIcon size={32} className="text-orange-500" />
            <p>Web Development (PHP)</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-400 border">
          <CardContent className="p-6 flex flex-col items-center gap-3">
            <Database size={32} className="text-orange-500" />
            <p>Database (MySQL)</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-400 border">
          <CardContent className="p-6 flex flex-col items-center gap-3">
            <LayoutDashboard size={32} className="text-orange-500" />
            <p>System Design (UML)</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-400 border">
          <CardContent className="p-6 flex flex-col items-center gap-3">
            <Figma size={32} className="text-orange-500" />
            <p>UI/UX Design</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-400 border">
          <CardContent className="p-6 flex flex-col items-center gap-3">
            <FileText size={32} className="text-orange-500" />
            <p>Microsoft Office</p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-400 border">
          <CardContent className="p-6 flex flex-col items-center gap-3">
            <Code size={32} className="text-orange-500" />
            <p>Next.js</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
