import Footer from "@/components/footer";
import Tabs from "@/components/tabs";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center p-4 sm:p-8 gap-6 sm:gap-12">
      <Profile />
      <Tabs />
      <Footer />
    </main>
  )
}