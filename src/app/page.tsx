import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center p-4">
      <Profile />
      <Tabs />
      <Footer />
    </main>
  )
}