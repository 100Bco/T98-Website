 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/components/layout/Header.tsx b/components/layout/Header.tsx
index d4afb22b71d13eb0a0c2e8220caa4f4b030362e9..373d90f6be67238c5705292f2e0e299609a8b01e 100644
--- a/components/layout/Header.tsx
+++ b/components/layout/Header.tsx
@@ -1,85 +1,104 @@
 import React, { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
 import { Menu, X, Phone } from 'lucide-react';
 import { Button } from '../ui/Button';
 
 export const Header: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const location = useLocation();
+  const isHome = location.pathname === '/';
 
   const navLinks = [
     { name: 'Home', path: '/' },
     { name: 'Services', path: '/services' },
     { name: 'Conditions', path: '/conditions' },
     { name: 'Auto Injury', path: '/auto-injury' },
     { name: 'About', path: '/about' },
     { name: 'New Patients', path: '/new-patients' },
     { name: 'Contact', path: '/contact' },
   ];
 
   const closeMenu = () => setIsMenuOpen(false);
 
+  const headerClasses = isHome
+    ? 'fixed top-0 w-full z-50 bg-transparent border-transparent'
+    : 'fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100';
+
   return (
-    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
+    <header className={headerClasses}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center h-20">
           {/* Logo T98 */}
-          <Link to="/" className="flex flex-col leading-none" onClick={closeMenu}>
-             <span className="font-display font-extrabold text-3xl tracking-tight text-brand-blue">T98</span>
-             <span className="font-display font-bold text-sm text-brand-orange">Rehab & Chiropractic</span>
+          <Link to="/" className="flex items-center" onClick={closeMenu}>
+            <img
+              src="/Logo T98.png"
+              alt="T98 Rehab & Chiropractic"
+              className="h-12 w-auto"
+            />
           </Link>
 
           {/* Desktop Nav */}
           <nav className="hidden md:flex space-x-8">
             {navLinks.map((link) => (
               <Link
                 key={link.name}
                 to={link.path}
-                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
-                  location.pathname === link.path ? 'text-brand-blue font-bold' : 'text-brand-grey'
+                className={`text-sm font-medium transition-colors ${
+                  isHome
+                    ? location.pathname === link.path
+                      ? 'text-white font-bold'
+                      : 'text-white/80 hover:text-white'
+                    : location.pathname === link.path
+                      ? 'text-brand-blue font-bold'
+                      : 'text-brand-grey hover:text-brand-blue'
                 }`}
               >
                 {link.name}
               </Link>
             ))}
           </nav>
 
           {/* Desktop CTA */}
           <div className="hidden md:flex items-center space-x-4">
-            <a href="tel:5129062580" className="flex items-center text-brand-navy font-bold text-sm">
+            <a
+              href="tel:5129062580"
+              className={`flex items-center font-bold text-sm ${isHome ? 'text-white' : 'text-brand-navy'}`}
+            >
                 <Phone className="w-4 h-4 mr-2" />
                 (512) 906-2580
             </a>
             <Link to="/contact">
-                <Button>Book Now</Button>
+                <Button variant={isHome ? 'white' : 'primary'} className={isHome ? 'shadow-lg' : ''}>
+                  Book Now
+                </Button>
             </Link>
           </div>
 
           {/* Mobile Menu Button */}
           <button 
-            className="md:hidden text-brand-navy"
+            className={`md:hidden ${isHome ? 'text-white' : 'text-brand-navy'}`}
             onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
           </button>
         </div>
       </div>
 
       {/* Mobile Menu */}
       {isMenuOpen && (
         <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen pb-20 overflow-y-auto">
           <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
             {navLinks.map((link) => (
               <Link
                 key={link.name}
                 to={link.path}
                 className={`text-lg font-medium py-2 border-b border-gray-50 ${
                    location.pathname === link.path ? 'text-brand-blue' : 'text-brand-grey'
                 }`}
                 onClick={closeMenu}
               >
                 {link.name}
               </Link>
             ))}
             <div className="pt-4 flex flex-col space-y-4">
                  <a href="tel:5129062580" className="flex items-center justify-center text-brand-navy font-bold py-3 bg-gray-50 rounded-lg">
 
EOF
)
