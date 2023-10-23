import Header from "@/components/Header";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />
      {/* Board */}

      {/* Toast */}
      <Toaster position="top-right" />
    </main>
  );
}
