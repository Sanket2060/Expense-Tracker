import { Wallet, ChevronLeft, CheckCircle } from "lucide-react";
import SignInBox from "@/components/SignInBox";
import { redirect } from "next/navigation";

export default function SignIn() {
  const onRedirect = async () => {
    "use server";
    redirect("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto w-full">
        <div className="flex items-center space-x-2">
          <Wallet className="text-blue-600" size={28} />
          <span className="text-xl font-bold text-gray-900">SplitTrip</span>
        </div>
        <form
          action={onRedirect}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          <button type="submit">Back to Home</button>
        </form>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full mx-auto">
          {/* Left Side - Auth Form */}
          <SignInBox />

          {/* Right Side - Info & Benefits */}
          <div className="hidden md:block bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white relative overflow-hidden shadow-lg">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold">
                Split expenses with friends without the drama
              </h2>
              <p className="mt-4 text-blue-100">
                Join thousands of travelers who use SplitTrip to make group
                trips more enjoyable.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start">
                  <CheckCircle
                    className="text-blue-200 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-medium">
                      Hassle-free expense tracking
                    </h3>
                    <p className="mt-1 text-blue-100 text-sm">
                      Log expenses on the go and let our app do the math for
                      you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle
                    className="text-blue-200 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-medium">Real-time updates</h3>
                    <p className="mt-1 text-blue-100 text-sm">
                      Everyone can see who owes what, eliminating confusion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle
                    className="text-blue-200 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-medium">Multiple currencies</h3>
                    <p className="mt-1 text-blue-100 text-sm">
                      Perfect for international trips with automatic currency
                      conversion.
                    </p>
                  </div>
                </div>
              </div>

              {/* User Testimonial */}
              <div className="mt-12 bg-white bg-opacity-10 p-4 rounded-lg border border-white border-opacity-20">
                <p className="italic text-sm text-blue-50">
                  &quot;This app saved our group vacation! We had 6 people
                  sharing expenses across 5 days in different currencies.
                  SplitTrip made it so easy to keep track of everything.&quot;
                </p>
                <div className="mt-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-medium text-sm">
                    MK
                  </div>
                  <p className="ml-2 text-sm font-medium">Michael K.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">
            © 2025 SplitTrip. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Help Center
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
