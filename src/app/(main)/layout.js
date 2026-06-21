import Navbar from "@/app/(main)/components/Navbar"

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-5">
        {children}
      </main>
    </>
  );
}