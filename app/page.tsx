import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Users, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <Image
                src="/images/lifecare-logo.png"
                alt="SwasthSuraksha LifeCare"
                width={120}
                height={40}
                className="h-10 sm:h-16 w-auto flex-shrink-0"
              />
              <h1 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-gray-900 hidden xs:block truncate">
                SwasthSuraksha LifeCare
              </h1>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 flex-shrink-0">
              <Link
                href="#contact"
                className="text-xs sm:text-sm font-medium text-gray-700 hover:text-emerald-600 hidden md:inline whitespace-nowrap"
              >
                Contact Us
              </Link>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-xs sm:text-sm px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 whitespace-nowrap">
                Get Protected
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-24 bg-gradient-to-b from-emerald-50 via-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Health. <br />
              <span className="text-emerald-600">Your Future.</span> <br />
              <span className="text-teal-600">Our Promise.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Because when health worries strike, you shouldn't have to worry about anything else. We're here for you
              and your family, always.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-md mx-auto pt-2 sm:pt-4 px-4">
              <Input
                type="tel"
                placeholder="Your mobile number"
                className="text-sm sm:text-base lg:text-lg py-2.5 sm:py-3"
              />
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 whitespace-nowrap"
              >
                Get Quote
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 px-4">✓ Instant quotes ✓ No paperwork ✓ 24/7 support</p>
          </div>
        </div>
      </section>

      {/* Why We Matter */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              When Life Happens, We're There
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Real protection for real people. No complicated terms, no endless waits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all p-3 sm:p-4 lg:p-6">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-rose-600" />
                </div>
                <CardTitle className="text-base sm:text-lg lg:text-xl text-gray-900">For You</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base text-gray-600">
                  Your health is your wealth. Protect yourself so you can keep doing what you love, without financial
                  stress.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all p-3 sm:p-4 lg:p-6">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-base sm:text-lg lg:text-xl text-gray-900">For Your Family</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base text-gray-600">
                  Your parents raised you. Now it's time to protect them. Cover your whole family under one simple plan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all p-3 sm:p-4 lg:p-6 sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600" />
                </div>
                <CardTitle className="text-base sm:text-lg lg:text-xl text-gray-900">For Your Peace</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base text-gray-600">
                  Sleep better knowing that if something happens, we'll handle everything. Fast claims, no hassles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-12">
            <div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 px-4">
                Our Promise to You
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  To be the most trusted provider of life and health insurance, ensuring peace of mind and financial
                  security for every family.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  To deliver fast, compassionate, and cashless insurance support during life's most critical moments,
                  protecting the health and future of our customers and their loved ones.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
              <p className="text-base sm:text-lg lg:text-xl font-medium">
                Every decision we make, every process we design, every person we hire - it all comes back to this simple
                truth: <br />
                <span className="text-lg sm:text-xl lg:text-2xl font-bold mt-2 block">
                  Your Health. Your Future. Our Promise.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Plans */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Simple Plans, Real Protection
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
              Choose what works for you. Change anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="bg-emerald-600 text-white text-center py-3 sm:py-4 lg:py-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">Just Me</CardTitle>
                <p className="text-emerald-100 text-xs sm:text-sm lg:text-base">Individual coverage</p>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">₹5L - ₹10L</div>
                <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">Coverage amount</p>
                <ul className="text-left space-y-1 sm:space-y-2 text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">
                  <li>• Hospitalization covered</li>
                  <li>• Pre & post care included</li>
                  <li>• Annual health checkup</li>
                  <li>• 24/7 helpline</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-xs sm:text-sm lg:text-base py-2">
                  Protect Myself
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all relative">
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-500 text-white px-2 sm:px-3 lg:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="bg-teal-600 text-white text-center py-3 sm:py-4 lg:py-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">My Family</CardTitle>
                <p className="text-teal-100 text-xs sm:text-sm lg:text-base">Family floater plan</p>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">₹10L - ₹25L</div>
                <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">Coverage amount</p>
                <ul className="text-left space-y-1 sm:space-y-2 text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">
                  <li>• Covers spouse & children</li>
                  <li>• Maternity benefits</li>
                  <li>• Parents can be added</li>
                  <li>• No claim bonus</li>
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-xs sm:text-sm lg:text-base py-2">
                  Protect My Family
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="bg-indigo-600 text-white text-center py-3 sm:py-4 lg:py-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">My Parents</CardTitle>
                <p className="text-purple-100 text-xs sm:text-sm lg:text-base">Senior citizen plan</p>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">₹5L - ₹15L</div>
                <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">Coverage amount</p>
                <ul className="text-left space-y-1 sm:space-y-2 text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">
                  <li>• Age-specific coverage</li>
                  <li>• Pre-existing conditions</li>
                  <li>• Home treatment covered</li>
                  <li>• Dedicated support</li>
                </ul>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-xs sm:text-sm lg:text-base py-2">
                  Protect My Parents
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 px-4">
              Trusted by 50,000+ Families
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl lg:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">
                  99%
                </div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Claims Settled</div>
              </div>
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl lg:text-4xl font-bold text-teal-600 mb-1 sm:mb-2">
                  24 Hrs
                </div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Claim Processing</div>
              </div>
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl lg:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">
                  10,000+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Network Hospitals</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-sm sm:text-base lg:text-xl text-gray-700 italic mb-2 sm:mb-3 lg:mb-4">
                "When I was suffering with emotional dilemma due to exam stress, I couldn't visit the therapist. But
                SwasthSuraksha had helped me get instant insurance claims, and visit the therapist."
              </p>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">- Ayushi Vashisth, Greater Noida</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 lg:space-y-6">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4">
              Ready to Sleep Better Tonight?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 px-4">
              Get your family protected in under 5 minutes. No medical tests needed for most plans.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-md mx-auto px-4">
              <Input
                type="tel"
                placeholder="Your mobile number"
                className="bg-white border-0 text-gray-900 text-sm sm:text-base lg:text-lg py-2.5 sm:py-3"
              />
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 whitespace-nowrap"
              >
                Get Protected
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-blue-200 px-4">Free quote • No spam calls • Instant policy</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-center lg:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">SwasthSuraksha LifeCare</h3>
              <p className="text-gray-400 max-w-md text-xs sm:text-sm lg:text-base mx-auto lg:mx-0">
                Your Health. Your Future. Our Promise. <br />
                We're here when you need us most.
              </p>
            </div>

            <div className="text-center lg:text-right">
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-center lg:justify-end space-x-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-emerald-400" />
                  <span className="text-base sm:text-lg lg:text-xl font-semibold">Contact Support</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base">24/7 Support • Always Available</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-4">
                  IRDAI Reg. No: 123 • Licensed Insurance Provider
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2025 SwasthSuraksha LifeCare. Your health, our commitment.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
