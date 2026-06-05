import { Home, BookOpen, CheckSquare, User } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="btm-nav btm-nav-md border-t border-base-300 md:hidden">
      <Link href="/dashboard" className="active text-primary">
        <Home size={20} />
        <span className="btm-nav-label text-xs">Beranda</span>
      </Link>
      <Link href="/courses">
        <BookOpen size={20} />
        <span className="btm-nav-label text-xs">Kursus</span>
      </Link>
      <Link href="#">
        <CheckSquare size={20} />
        <span className="btm-nav-label text-xs">Tugas</span>
      </Link>
      <Link href="#">
        <User size={20} />
        <span className="btm-nav-label text-xs">Profil</span>
      </Link>
    </div>
  );
}