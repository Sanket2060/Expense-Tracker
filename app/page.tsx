"use client";
import {
  Users,
  Wallet,
  Globe,
  PieChart,
  CreditCard,
  ArrowRight,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import landingpage_image from "../public/ui.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        {/* Navigation */}
        <nav className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <Wallet className="text-blue-600" size={28} />
            <span className="text-xl font-bold text-gray-900">SplitTrip</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => router.push("/sign-in")}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown size={24} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-white shadow-lg rounded-lg mx-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => router.push("/sign-in")}
              >
                Get Started
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Split trip expenses with friends, hassle-free
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Our free web app helps you keep track of shared expenses, settle
                debts, and enjoy your trips without the awkward money talks.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  onClick={() => router.push("/sign-in")}
                >
                  Get Started <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-blue-100 to-purple-100 rounded-2xl p-6 shadow-lg">
                <Image
                  src={landingpage_image}
                  alt="SplitTrip App Screenshot"
                  className="rounded-lg shadow-md mx-auto"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium">
                  Trusted by 50,000+ travelers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Why Travelers Love SplitTrip
            </h2>
            <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
              Our free web app makes expense tracking simple so you can focus on
              making memories.
            </p>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Group Expenses
                </h3>
                <p className="mt-2 text-gray-600">
                  Create trip groups and track expenses together with friends
                  and family.
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <PieChart className="text-blue-600" size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Fair Splits
                </h3>
                <p className="mt-2 text-gray-600">
                  Split bills equally or with custom amounts based on individual
                  usage.
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="text-blue-600" size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Instant Settlements
                </h3>
                <p className="mt-2 text-gray-600">
                  Send payment reminders and settle debts with integrated
                  payment options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              How SplitTrip Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
              Three simple steps to stress-free trip expenses
            </p>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Create a Trip
                </h3>
                <p className="mt-2 text-gray-600">
                  Set up a trip and invite your travel companions to join with a
                  simple link.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Add Expenses
                </h3>
                <p className="mt-2 text-gray-600">
                  Log expenses as you go with photos of receipts and automatic
                  currency conversion.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Settle Up
                </h3>
                <p className="mt-2 text-gray-600">
                  See who owes what and settle debts with just a few clicks at
                  the end of your trip.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              What Our Users Say
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">JK</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Jamie K.</h4>
                    <p className="text-gray-600 text-sm">Group trip to Italy</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  &quot;SplitTrip saved our friendship! No more awkward
                  conversations about who paid for what. We could all see the
                  expenses in real-time.&quot;
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">TM</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Taylor M.</h4>
                    <p className="text-gray-600 text-sm">Weekend getaway</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  &quot;The currency conversion feature was a lifesaver during
                  our international trip. Everyone paid their fair share without
                  the math headaches.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Everything You Need, Completely Free
            </h2>
            <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
              SplitTrip gives you all these features at no cost
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700">
                  Unlimited trips and group members
                </p>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700">Receipt photo uploads</p>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700">Equal or custom splits</p>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700">Currency conversion</p>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700">Real-time expense updates</p>
              </div>

              <div className="flex items-start">
                <CheckCircle
                  size={24}
                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700">Payment tracking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold">
              Ready for your next adventure?
            </h2>
            <p className="mt-4 text-xl max-w-xl mx-auto">
              Sign up for SplitTrip today and make your group travels smoother
              than ever.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                className="px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-medium"
                onClick={() => router.push("/sign-in")}
              >
                <Globe size={20} className="mr-2" />
                Get Started For Free
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 bg-gray-900 text-gray-400">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center space-x-2">
                  <Wallet className="text-blue-400" size={24} />
                  <span className="text-xl font-bold text-white">
                    SplitTrip
                  </span>
                </div>
                <p className="mt-4 max-w-xs">
                  Making group travel finances simple since 2025.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-medium mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-4">Support</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p>© 2025 SplitTrip. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
