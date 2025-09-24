import DesktopBooking from "@/components/pages/booking/DesktopBooking";
import MobileBooking from "@/components/pages/booking/MobileBooking";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Book Free Consultation - Web Development & Design"
}

export default function BookConsultationPage() {
  return (
    <main className="mt-8 px-6 max-w-7xl mx-auto">
      <div className="lg:hidden">
        <MobileBooking />
      </div>
      <div className="hidden lg:block">
        <DesktopBooking />
      </div>
    </main>
  );
}