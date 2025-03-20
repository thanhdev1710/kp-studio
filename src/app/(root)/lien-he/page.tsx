import { ContactSection } from "@/components/Section/ContactSection";
import MapsSection from "@/components/Section/MapsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ",
};

export default function page() {
  return (
    <div>
      <MapsSection />
      <ContactSection />
    </div>
  );
}
