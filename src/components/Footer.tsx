import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
console.log("Footer rendered");
  return (
    <footer className="bg-primary text-primary-foreground"
          data-scroll-section
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg">Research Portal</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Bridging Faculty Expertise with Student Innovation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/experience" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Experience
              </Link>
              <Link to="/awards" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Awards
              </Link>
              <Link to="/publications" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Publications
              </Link>
              <Link to="/students" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Student Section
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">faculty@university.edu</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Computer Science Building, Room 301</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Faculty Research Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};