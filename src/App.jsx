import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ========== SEO STRUCTURED DATA COMPONENT ==========
const StructuredData = () => {
  const siteUrl = "https://portfolio-website-501cjh4rq-himasahameds-projects.vercel.app/";
  
  return (
    <>
      {/* Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Himas Ahamed",
          "jobTitle": "Software Engineer",
          "url": siteUrl,
          "email": "thaseemhimas3@gmail.com",
          "telephone": "+94-757-181-903",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dehiwala",
            "addressCountry": "Sri Lanka"
          },
          "sameAs": [
            "https://github.com/himasahamed",
            "https://www.linkedin.com/in/himasahamed"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "knowsAbout": [
            "Software Engineering",
            "MERN Stack",
            "Web Development",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS"
          ],
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "ICBT Campus - Colombo"
            },
            {
              "@type": "EducationalOrganization",
              "name": "British College of Applied Studies - Kalmunai"
            }
          ]
        })}
      </script>
      
      {/* Professional Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Himas Ahamed - Software Engineering Services",
          "description": "Professional software engineering services specializing in MERN stack, web development, and AI applications.",
          "url": siteUrl,
          "email": "thaseemhimas3@gmail.com",
          "telephone": "+94-757-181-903",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dehiwala",
            "addressCountry": "Sri Lanka"
          },
          "priceRange": "$$",
          "serviceType": ["Web Development", "App Development", "Software Consulting"]
        })}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": siteUrl,
          "name": "Himas Ahamed Portfolio",
          "description": "Professional portfolio of Himas Ahamed - Software Engineer",
          "author": {
            "@type": "Person",
            "name": "Himas Ahamed"
          }
        })}
      </script>
      
      {/* ContactPoint Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "telephone": "+94-757-181-903",
          "contactType": "sales",
          "email": "thaseemhimas3@gmail.com",
          "availableLanguage": ["English", "Tamil"]
        })}
      </script>
    </>
  );
};

// ========== TYPING QUOTE COMPONENT ==========
const TypingQuote = () => {
  const quotes = [
    { text: "\"First, solve the problem. Then, write the code.\" — John Johnson", icon: "💻" },
    { text: "\"The best way to predict the future is to create it.\" — Peter Drucker", icon: "🚀" },
    { text: "\"Software is a great combination of artistry and engineering.\" — Bill Gates", icon: "⚡" }
  ];
  
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentQuote.text.length) {
          setDisplayedText(currentQuote.text.substring(0, displayedText.length + 1));
          setTypingSpeed(60);
        } else {
          setTypingSpeed(3000);
          setIsDeleting(true);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentQuote.text.substring(0, displayedText.length - 1));
          setTypingSpeed(30);
        } else {
          setIsDeleting(false);
          setQuoteIndex((prev) => (prev + 1) % quotes.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, quoteIndex, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl">{quotes[quoteIndex].icon}</span>
        <div className="text-sm sm:text-base md:text-lg text-orange-300 font-mono text-center">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-0.5 h-4 sm:h-5 bg-orange-400 ml-1"
          />
        </div>
      </div>
    </motion.div>
  );
};

// ========== PROJECT CARD COMPONENT ==========
const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => onClick(project)}
      className="group p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
    >
      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{project.image}</div>
      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{project.title}</h3>
      <p className="text-[10px] sm:text-xs text-orange-400 mb-2">{project.tech}</p>
      
      <div className="flex gap-1 mt-1 mb-2 flex-wrap">
        {project.badges?.map((badge, idx) => (
          <span key={idx} className="text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300">
            {badge}
          </span>
        ))}
        {project.liveLink && project.liveLink !== "" ? (
          <span className="text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-300">
            🔗 Live
          </span>
        ) : (
          <span className="text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
            📂 GitHub
          </span>
        )}
      </div>
      
      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
      
      <div className="text-xs sm:text-sm text-orange-400 hover:text-orange-300 transition inline-flex items-center gap-1">
        {project.liveLink && project.liveLink !== "" ? (
          <>🔗 View Live →</>
        ) : (
          <>📂 View on GitHub →</>
        )}
      </div>
    </motion.div>
  );
};

// ========== MAIN APP COMPONENT ==========
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('technical');
  const [formData, setFormData] = useState({ 
    from_name: '',
    from_email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#0a0f1e', '#030712']);
  const form = useRef();
  
  // ===== DATA =====
  const stats = [
    { number: "6+", label: "Months Experience", icon: "💼" },
    { number: "7+", label: "Projects Completed", icon: "🚀" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
    { number: "160+", label: "Research Survey", icon: "📊" }
  ];
  
  const skills = [
    { name: "JavaScript", level: 85, color: "#F7DF1E" },
    { name: "React/Next.js", level: 80, color: "#61DAFB" },
    { name: "Node.js", level: 75, color: "#339933" },
    { name: "Python", level: 70, color: "#3776AB" },
    { name: "MongoDB", level: 75, color: "#47A248" },
    { name: "Tailwind CSS", level: 85, color: "#06B6D4" }
  ];
  
  const projects = [
    {
      title: "Clinical Appointment System",
      tech: "MERN Stack",
      description: "2-tier system with role-based access, real-time booking, automated receipts, and patient profile management.",
      liveLink: "https://clinical-site-test.vercel.app/",
      githubLink: "",
      image: "🏥",
      badges: ["MERN", "Production Ready"]
    },
    {
      title: "Himas Hottel - Hotel Management System",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      description: "Complete hotel management system with room booking, check-in/out, billing, and admin dashboard.",
      liveLink: "https://himashottel.vercel.app/",
      githubLink: "https://github.com/himasahamed/himashottel",
      image: "🏨",
      badges: ["Full-Stack", "PHP", "MySQL"]
    },
    {
      title: "Driving School System",
      tech: "JavaScript (OOP Concepts)",
      description: "Object-oriented driving school management system with student enrollment, instructor assignment, and payment tracking.",
      liveLink: "",
      githubLink: "https://github.com/himasahamed/DrivingSchoolSystem",
      image: "🚗",
      badges: ["OOP", "JavaScript"]
    },
    {
      title: "ABC Hospital Virtual System",
      tech: "PHP, MySQL, Bootstrap",
      description: "Multi-role hospital web application with Admin, Doctor, Receptionist, and Patient dashboards.",
      liveLink: "",
      githubLink: "https://github.com/himasahamed/ABC_HOSPITAL",
      image: "🏥",
      badges: ["PHP", "Database", "Multi-role"]
    },
    {
      title: "Sales Analysis Application",
      tech: "Python, Dash, Pandas, Plotly",
      description: "Interactive SOLID-compliant data visualization dashboard for customer transaction analysis.",
      liveLink: "",
      githubLink: "https://github.com/himasahamed/pythonProject1",
      image: "📈",
      badges: ["Python", "Analytics", "Pandas"]
    },
    {
      title: "Student Exam Performance Prediction System",
      tech: "AI, Machine Learning",
      description: "Predictive system that analyzes exam performance data to identify students needing additional academic support.",
      liveLink: "",
      githubLink: "https://github.com/himasahamed",
      image: "🎓",
      badges: ["AI/ML", "Predictive"]
    },
    {
      title: "Ocean View Resort - Data Analysis",
      tech: "Vanilla JavaScript (No Frameworks)",
      description: "Pure JavaScript data visualization for resort booking analytics, revenue trends, and occupancy tracking.",
      liveLink: "",
      githubLink: "https://github.com/himasahamed/final-Advanced-Programming",
      image: "🌊",
      badges: ["JavaScript", "Analytics", "Data Viz"]
    }
  ];
  
  const services = [
    {
      title: "Website Development",
      description: "I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.",
      icon: "🌐",
      features: ["Responsive Design", "Full-Stack Applications", "Performance Optimization"],
      responseTime: "24-48h",
      costRating: "⭐⭐⭐⭐⭐",
      scalability: "High"
    },
    {
      title: "App Development",
      description: "Building modern, scalable web applications with cutting-edge technologies. Focused on creating seamless user experiences and robust backend systems.",
      icon: "📱",
      features: ["MERN Stack", "API Integration", "Real-time Features"],
      responseTime: "24-48h",
      costRating: "⭐⭐⭐⭐⭐",
      scalability: "High"
    },
    {
      title: "Website Hosting",
      description: "Professional deployment and hosting solutions for your web applications.",
      icon: "☁️",
      stats: { projects: "120+", satisfaction: "95%", experience: "10+" },
      features: ["Cloud Deployment", "Domain Setup", "24/7 Monitoring"],
      responseTime: "1-2h",
      costRating: "⭐⭐⭐⭐",
      scalability: "Enterprise"
    }
  ];
  
  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];
  
  // ===== HANDLERS =====
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const showToastMessage = (message, isSuccess = true) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Check if EmailJS is configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!serviceId || !templateId || !publicKey) {
      // Fallback: Show message and log to console
      console.log('Form Data:', formData);
      showToastMessage(`Thanks ${formData.from_name}! I'll get back to you soon. (EmailJS not configured)`, true);
      setFormData({ from_name: '', from_email: '', message: '' });
      setIsSubmitting(false);
      return;
    }
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        showToastMessage(`Thanks ${formData.from_name}! Your message has been sent successfully. I'll get back to you soon.`, true);
        setFormData({ from_name: '', from_email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        showToastMessage('Failed to send message. Please email me directly at thaseemhimas3@gmail.com', false);
        setIsSubmitting(false);
      });
  };
  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Himas_Ahamed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToastMessage('Resume downloaded successfully!', true);
  };
  
  const handleProjectClick = (project) => {
    if (project.liveLink && project.liveLink !== "") {
      window.open(project.liveLink, "_blank");
    } else if (project.githubLink && project.githubLink !== "") {
      window.open(project.githubLink, "_blank");
    } else {
      showToastMessage('No link available for this project yet.', false);
    }
  };
  
  const scrollToSection = (section) => {
    setActiveSection(section.toLowerCase());
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  // ===== RENDER =====
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData />
      
      <motion.div 
        style={{ backgroundColor }}
        className="min-h-screen text-white overflow-x-hidden"
      >
        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] px-6 py-3 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <p className="text-sm text-gray-200">{toastMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-orange-900/10 to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex justify-between items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent"
              >
                Himas<span className="text-white">.</span>Ahamed
              </motion.div>
              
              <div className="hidden md:flex gap-4 lg:gap-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item)}
                    className={`text-gray-300 hover:text-white transition-colors relative group text-sm lg:text-base ${
                      activeSection === item.toLowerCase() ? 'text-white' : ''
                    }`}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-blue-400"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
              >
                <div className="flex flex-col p-4 gap-3">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-gray-300 hover:text-white py-2 text-left text-base"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        
        {/* Hero Section */}
        <section id="home" className="relative z-10 min-h-screen flex items-center pt-16 sm:pt-20">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <p className="text-orange-400 font-mono mb-2 sm:mb-4 text-sm sm:text-base">👋 Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4">
                  Himas <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Ahamed</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 sm:mb-6">
                  Software Engineer | MERN Stack Developer
                </h2>
                
                <TypingQuote />
                
                <p className="text-gray-400 mt-6 sm:mt-8 leading-relaxed text-sm sm:text-base px-4 md:px-0">
                  Aspiring Software Engineer with strong foundation in web development and AI applications. 
                  Passionate about building innovative solutions that make a difference.
                </p>
                
                <div className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start mt-6 sm:mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('projects')}
                    className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition text-sm sm:text-base"
                  >
                    View Projects
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadResume}
                    className="px-6 sm:px-8 py-2 sm:py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2 text-sm sm:text-base"
                  >
                    📄 Download Resume
                  </motion.button>
                  <motion.a
                    href="https://github.com/himasahamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-2 sm:py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition text-sm sm:text-base"
                  >
                    GitHub Profile
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mt-8 md:mt-0"
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full flex items-center justify-center border-2 border-white/10 overflow-hidden">
                    <img 
                      src="/himas.jpeg" 
                      alt="Himas Ahamed - Software Engineer" 
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="relative z-10 py-12 sm:py-16" aria-label="Statistics">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* View Mode Toggle */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 my-8"
          >
            <button
              onClick={() => setViewMode('technical')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'technical' 
                  ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white' 
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
              aria-label="Switch to technical view"
            >
              🔧 Technical View
            </button>
            <button
              onClick={() => setViewMode('business')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                viewMode === 'business' 
                  ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white' 
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
              aria-label="Switch to business view"
            >
              📊 Business View
            </button>
          </motion.div>
        </div>
        
        {/* About Section */}
        <section id="about" className="relative z-10 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                About <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Me</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                    I'm a passionate Software Engineer with expertise in MERN stack development. 
                    My journey in software development started with a curiosity for building things 
                    from scratch and has evolved into a career focused on creating impactful solutions.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                    With hands-on experience in full-stack development and AI applications, 
                    I strive to build systems that are not only functional but also provide 
                    exceptional user experiences.
                  </p>
                  <div className="flex gap-4 mt-6 flex-wrap">
                    <a href="https://github.com/himasahamed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm">GitHub</a>
                    <span className="text-gray-600">|</span>
                    <a href="https://www.linkedin.com/in/himasahamed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm">LinkedIn</a>
                    <span className="text-gray-600">|</span>
                    <button onClick={downloadResume} className="text-gray-400 hover:text-white transition text-sm">Resume</button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {viewMode === 'technical' ? (
                    skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-xs sm:text-sm">{skill.name}</span>
                          <span className="text-xs sm:text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-orange-400">Full-Stack Proficiency</div>
                        <div className="text-gray-400 text-sm mt-1">MERN + Python + AI</div>
                        <div className="mt-3 h-2 bg-white/10 rounded-full">
                          <div className="w-4/5 h-full bg-gradient-to-r from-orange-400 to-blue-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-orange-400">80%</div>
                        <div className="text-gray-400 text-sm">Average Code Efficiency</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-orange-400">4.8/5</div>
                        <div className="text-gray-400 text-sm">Client Rating</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="relative z-10 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Compare <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Side-by-side comparison for decision-making
              </p>
            </motion.div>
            
            <div className="hidden md:block overflow-x-auto rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <table className="w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    {services.map((service, idx) => (
                      <th key={idx} className="p-4 text-left">{service.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium">Response Time</td>
                    {services.map((service, idx) => (
                      <td key={idx} className="p-4">✅ {service.responseTime}</td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium">Cost Efficiency</td>
                    {services.map((service, idx) => (
                      <td key={idx} className="p-4">{service.costRating}</td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium">Scalability</td>
                    {services.map((service, idx) => (
                      <td key={idx} className="p-4">{service.scalability}</td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-4 font-medium">Key Features</td>
                    {services.map((service, idx) => (
                      <td key={idx} className="p-4 text-sm">
                        {service.features?.map((f, i) => (
                          <div key={i}>✓ {f}</div>
                        ))}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="md:hidden grid gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{service.description}</p>
                  
                  {service.stats && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg sm:text-xl font-bold text-orange-400">{service.stats.projects}</div>
                          <div className="text-[10px] sm:text-xs text-gray-500">Projects</div>
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-bold text-orange-400">{service.stats.satisfaction}</div>
                          <div className="text-[10px] sm:text-xs text-gray-500">Satisfaction</div>
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-bold text-orange-400">{service.stats.experience}</div>
                          <div className="text-[10px] sm:text-xs text-gray-500">Experience</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-3 space-y-1">
                    {service.features?.map((feature, idx) => (
                      <div key={idx} className="text-[10px] sm:text-xs text-gray-500">✓ {feature}</div>
                    ))}
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                    <div><span className="text-orange-400">⚡</span> {service.responseTime}</div>
                    <div><span className="text-orange-400">💰</span> {service.costRating}</div>
                    <div><span className="text-orange-400">📈</span> {service.scalability}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="relative z-10 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Click on any project card to view Live Demo or GitHub Repository
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="relative z-10 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
                Have a <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Project?</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-5 sm:space-y-6">
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Let's Connect</h3>
                    <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                      <p className="flex items-center gap-3 break-all">
                        <span className="text-orange-400">📧</span> thaseemhimas3@gmail.com
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="text-orange-400">📱</span> +94-757-181-903
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="text-orange-400">📍</span> Dehiwala, Sri Lanka
                      </p>
                      <p className="flex items-center gap-3 break-all">
                        <span className="text-orange-400">💻</span> github.com/himasahamed
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Follow Me</h3>
                    <div className="flex gap-3 sm:gap-4 flex-wrap">
                      <a href="https://github.com/himasahamed" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="GitHub">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.295 2.75-1.026 2.75-1.026.544 1.378.201 2.397.098 2.65.64.7 1.029 1.595 1.029 2.688 0 3.846-2.339 4.695-4.565 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/himasahamed" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="LinkedIn">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-500 transition text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-500 transition text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-500 transition resize-none text-sm"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition text-sm sm:text-base ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : "Let's Talk! →"}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="relative z-10 py-6 sm:py-8 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400 text-xs sm:text-sm">
            <p>Designed with ❤️, all rights reserved for Himas Ahamed.</p>
            <p className="mt-1 text-[10px] sm:text-xs text-gray-500">
              <a href="https://portfolio-website-501cjh4rq-himasahameds-projects.vercel.app/" className="hover:text-gray-300 transition">View Portfolio</a>
            </p>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default App;