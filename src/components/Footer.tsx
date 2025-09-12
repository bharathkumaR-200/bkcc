import { Compass, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Compass className="w-8 h-8 text-background" />
                <GraduationCap className="w-5 h-5 text-background/80 absolute -top-1 -right-1" />
              </div>
              <span className="text-lg font-display font-semibold">Career Compass</span>
            </div>
            <p className="text-background/80 leading-relaxed max-w-md">
              Empowering students across Australia to make confident career choices through 
              AI-powered insights and personalized guidance.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-background">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-background/80 hover:text-background transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-background">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#support" className="text-background/80 hover:text-background transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Career Compass. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-background/60">
              <span>Made with ❤️ for Australian students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;