import { Mail, Twitter, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-orange-200 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            AI <span className="text-orange-600">Trip Planner</span>
          </h2>
          <p className="mt-2 text-gray-800 text-sm">
            Your AI-powered travel companion.  
            Plan smarter, travel better ✈️
          </p>
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex space-x-5">
            <a href="https://twitter.com/" target="_blank" className="hover:text-orange-600">
              <Twitter size={22} />
            </a>
            <a href="https://github.com/" target="_blank" className="hover:text-orange-600">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-orange-600">
              <Linkedin size={22} />
            </a>
            <a href="https://instagram.com/" className="hover:text-orange-600">
              <Instagram size={22} />
            </a>
            <a href="mailto:support@aitripplanner.com" className="hover:text-orange-600">
              <Mail size={22} />
            </a>
          </div>
          <p className="text-sm text-gray-700">
            support@aitripplanner.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-md text-black bg-gray-50">
        © {new Date().getFullYear()} AI Trip Planner · All rights reserved.
      </div>
    </footer>
  );
}
