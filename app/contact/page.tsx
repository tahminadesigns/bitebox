import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";
import ContactFooter from "../components/contact/ContactFooter";

export default function ContactPage() {
  return (
    <main className="relative bg-[#0A0A0A] text-white overflow-hidden">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <ContactFooter />
    </main>
  );
}
