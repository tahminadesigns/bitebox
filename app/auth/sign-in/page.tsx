import AuthNavbar from "@/app/components/navbar/AuthNavbar";
import SignInForm from "@/app/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-black via-[#0e0e0e] to-black text-white">
      <AuthNavbar />

      <section className="flex items-center justify-center px-6 py-20">
        <SignInForm />
      </section>
    </main>
  );
}
