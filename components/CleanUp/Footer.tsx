import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-cineverse-900 text-gray-200 py-12 border-t border-border/40">
        <div className="cineverse-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {/* <Film className="h-6 w-6 text-crimson-600" /> */}
                <span className="text-2xl font-heading font-bold text-white">
                  FireX
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Experience the magic of cinema with our state-of-the-art
                theaters and exclusive screenings.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-crimson-500 transition-colors"
                >
                  {/* <Instagram size={20} /> */}
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-crimson-500 transition-colors"
                >
                  {/* <Twitter size={20} /> */}
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-crimson-500 transition-colors"
                >
                  {/* <Facebook size={20} /> */}
                </a>
                <a
                  href="#"
                  aria-label="Email"
                  className="hover:text-crimson-500 transition-colors"
                >
                  {/* <Mail size={20} /> */}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-error transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/movies"
                    className="hover:text-error transition-colors"
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-error transition-colors"
                  >
                    Cinemas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-error transition-colors"
                  >
                    Offers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-error transition-colors"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-heading font-semibold text-white mb-4">
                Support
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-error transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-error transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-error transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-error transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-error transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-heading font-semibold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to get updates on new releases and special offers.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-cineverse-800 text-white px-4 py-2 text-sm rounded-md w-full border border-border/30 focus:outline-none focus:ring-2 focus:ring-crimson-600"
                />
                <button
                  type="submit"
                  className="bg-crimson-600 hover:bg-crimson-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© CineVerse. All rights reserved.</p>
          </div>
        </div>
      </footer> 
    )

}