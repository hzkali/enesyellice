import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Globe, 
  Code2, 
  Rocket, 
  Cpu, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight,
  Database,
  Smartphone,
  Layers,
  TrendingUp,
  Search,
  ArrowUpRight,
  Activity,
  Zap,
  Shield,
  ArrowRight
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar, 
  Cell
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Data ---

const expertiseData = [
  { name: 'Full Stack', value: 95 },
  { name: 'Mobile', value: 85 },
  { name: 'Web3', value: 90 },
  { name: 'Startup MVP', value: 98 },
];

const growthData = [
  { year: '2015', impact: 10 },
  { year: '2017', impact: 25 },
  { year: '2019', impact: 45 },
  { year: '2021', impact: 70 },
  { year: '2023', impact: 90 },
  { year: '2025', impact: 100 },
];

const companies = [
  {
    name: "HARP GLOBAL",
    description: "Web3, yapay zeka ve sağlık odaklı küresel bir dijital inovasyon laboratuvarı.",
    link: "https://harp.tr",
    icon: <Globe className="w-6 h-6" />
  },
  {
    name: "Harplabs",
    description: "Londra merkezli, Web3 ve yapay zeka odaklı dijital inovasyon laboratuvarı.",
    link: "https://harp.tr",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    name: "VİTANİCA.TR",
    description: "Sağlık ve zindelik odaklı, yüksek kaliteli takviye edici gıdalar sunan vitamin şirketi.",
    link: "https://vitanica.tr",
    icon: <Activity className="w-6 h-6" />
  },
  {
    name: "Birdoktorasoralim.tr",
    description: "Sertifikalı tıp uzmanlarına anında erişim sağlayan bir HealthTech platformu.",
    link: "https://birdoktorasoralim.tr",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    name: "Finansmedya.net",
    description: "Finans, ekonomi ve yeni teknolojileri kapsayan bir dijital medya platformu.",
    link: "https://finansmedya.net",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    name: "HostLabs.org",
    description: "Performans için optimize edilmiş ölçeklenebilir barındırma ve bulut çözümleri.",
    link: "https://enesyellice.tr",
    icon: <Database className="w-6 h-6" />
  }
];

// --- Components ---

const NoiseOverlay = () => <div className="noise-overlay" />;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-white/10 py-4 px-6 shadow-2xl' 
        : 'bg-black/90 backdrop-blur-lg border-white/5 py-5 px-8'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <div className="text-xl font-sans font-bold tracking-tighter">
          M. ENES <span className="text-brand-orange">YELLICE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Girişimler', 'Uzmanlık', 'Vizyon', 'İletişim'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-widest hover:text-brand-orange transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#iletişim" 
            className="px-5 py-2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all"
          >
            İletişime Geç
          </a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl border border-gray-100 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {['Girişimler', 'Uzmanlık', 'Vizyon', 'İletişim'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      gsap.from('.hero-image', {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[calc(100vh-80px)] mt-[80px] w-full flex items-end overflow-hidden bg-black">
      <div className="absolute inset-0 hero-image">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Brutalist Architecture" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-6">
        <div className="max-w-4xl">
          <h2 className="hero-text text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-6">
            TEKNOLOJİ GİRİŞİMCİSİ & DEVELOPER
          </h2>
          <h1 className="hero-text text-5xl md:text-[8rem] font-sans font-bold leading-[0.85] tracking-tighter mb-8">
            GELECEĞİ <br />
            <span className="font-serif italic font-normal text-brand-orange">İNŞA ET.</span>
          </h1>
          <div className="hero-text flex flex-wrap gap-6 items-center">
            <a 
              href="#girişimler" 
              className="group relative px-10 py-5 bg-black text-white rounded-full overflow-hidden transition-all"
            >
              <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Girişimleri İncele</span>
              <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <p className="text-gradient text-sm font-mono font-bold max-w-xs">
              [SYSTEM_STATUS]: OPERATIONAL <br />
              [LOCATION]: ISTANBUL / LONDON
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard1 = () => {
  const [items, setItems] = useState([
    { id: 1, label: 'WEB3 PROTOCOLS', value: 'ACTIVE' },
    { id: 2, label: 'AI INTEGRATION', value: 'SYNCING' },
    { id: 3, label: 'SMART CONTRACTS', value: 'DEPLOYED' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newItems = [...prev];
        const last = newItems.pop();
        newItems.unshift(last);
        return newItems;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 flex flex-col justify-center overflow-hidden">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: i === 1 ? 1 : 0.3, 
            scale: i === 1 ? 1 : 0.9,
            y: (i - 1) * 50
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute w-full flex justify-between items-center px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <span className="text-[10px] font-mono font-bold">{item.label}</span>
          <span className={`text-[10px] font-mono font-bold ${item.value === 'ACTIVE' ? 'text-green-500' : 'text-brand-orange'}`}>
            {item.value}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const FeatureCard2 = () => {
  const [text, setText] = useState('');
  const fullText = "HealthTech revolutionizing patient care through digital innovation and certified expertise.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i = (i + 1) % (fullText.length + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-48 p-6 bg-black rounded-3xl flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Live Feed</span>
        <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
      </div>
      <p className="text-white font-mono text-xs leading-relaxed">
        {text}
        <span className="inline-block w-2 h-4 bg-brand-orange ml-1 animate-bounce" />
      </p>
    </div>
  );
};

const FeatureCard3 = () => {
  return (
    <div className="h-48 p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col justify-between">
      <div className="grid grid-cols-7 gap-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="text-[8px] font-bold text-gray-400">{day}</span>
            <div className={`w-full aspect-square rounded-md border ${i === 3 ? 'bg-brand-orange border-brand-orange' : 'bg-white border-gray-200'}`} />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Infrastructure</p>
          <p className="text-sm font-bold">99.9% Uptime</p>
        </div>
        <div className="px-3 py-1 bg-black text-white text-[8px] font-bold uppercase tracking-widest rounded-full">
          Optimized
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="uzmanlık" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <FeatureCard1 />
            <div>
              <h3 className="text-xl font-bold mb-2">Web3 & AI Innovation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Harp Global bünyesinde, merkeziyetsiz protokoller ve yapay zeka entegrasyonları ile geleceğin dijital dünyasını şekillendiriyoruz.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <FeatureCard2 />
            <div>
              <h3 className="text-xl font-bold mb-2">HealthTech Solutions</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Vitanica ve BirDoktor projelerimizle, sağlık teknolojilerinde erişilebilirliği ve verimliliği en üst düzeye çıkarıyoruz.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <FeatureCard3 />
            <div>
              <h3 className="text-xl font-bold mb-2">Scalable Infrastructure</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                HostLabs üzerinden sunduğumuz yüksek performanslı bulut çözümleriyle, dijital girişimlerin temelini sağlamlaştırıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philosophy-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-48 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Abstract Texture" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <p className="philosophy-text text-sm font-mono text-gray-500 uppercase tracking-[0.3em] mb-12">
            [MANIFESTO_V1.0]
          </p>
          <div className="space-y-16">
            <p className="philosophy-text text-2xl md:text-4xl font-sans text-gray-400 leading-tight">
              Çoğu girişim <span className="text-white">sadece büyümeye</span> odaklanır.
            </p>
            <p className="philosophy-text text-4xl md:text-8xl font-sans font-bold leading-[0.9] tracking-tighter">
              BİZ <span className="font-serif italic font-normal text-brand-orange">DEĞER</span> VE <br />
              <span className="font-serif italic font-normal text-brand-orange">SÜRDÜRÜLEBİLİRLİK</span> <br />
              ODAKLIYIZ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProtocolCard = ({ number, title, description, children }) => {
  return (
    <div className="protocol-card sticky top-32 h-[70vh] w-full bg-white rounded-[3rem] border border-gray-100 p-12 flex flex-col md:flex-row gap-12 shadow-2xl mb-12">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-brand-orange mb-6 block">STEP_{number}</span>
          <h3 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter mb-6">{title}</h3>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md">{description}</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
          <div className="w-12 h-[1px] bg-gray-200" />
          Protocol Initialized
        </div>
      </div>
      <div className="flex-1 bg-gray-50 rounded-[2rem] overflow-hidden relative flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.protocol-card');
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;
      
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 10%',
          endTrigger: containerRef.current,
          end: 'bottom bottom',
          scrub: true,
          pin: false,
        },
        scale: 0.9,
        opacity: 0.5,
        filter: 'blur(10px)',
        ease: 'none'
      });
    });
  }, []);

  return (
    <section id="girişimler" ref={containerRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-4">GİRİŞİMLER</h2>
          <h3 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter">EKOSİSTEM <br /> <span className="font-serif italic font-normal">PROTOKOLÜ.</span></h3>
        </div>

        <div className="space-y-12">
          <ProtocolCard 
            number="01" 
            title="HARP GLOBAL" 
            description="Web3 ve AI odaklı inovasyon laboratuvarımızda, geleceğin dijital altyapısını kodluyoruz."
          >
            <div className="w-48 h-48 border-4 border-brand-orange rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-black rounded-full animate-[spin_5s_linear_infinite_reverse]" />
            </div>
          </ProtocolCard>

          <ProtocolCard 
            number="02" 
            title="HEALTH TECH" 
            description="Vitanica ve BirDoktor ile sağlık hizmetlerini dijitalleştiriyor, uzmanlığa erişimi kolaylaştırıyoruz."
          >
            <div className="w-full h-full p-12">
              <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl relative overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-orange shadow-[0_0_20px_#FF4D00]"
                />
                <div className="grid grid-cols-8 grid-rows-8 gap-4 p-8 opacity-20">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-black rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </ProtocolCard>

          <ProtocolCard 
            number="03" 
            title="INFRASTRUCTURE" 
            description="HostLabs ile ölçeklenebilir, güvenli ve yüksek performanslı bulut çözümleri sunuyoruz."
          >
            <div className="w-full h-full flex items-center justify-center p-12">
              <svg viewBox="0 0 200 100" className="w-full h-auto">
                <motion.path
                  d="M0 50 Q 25 0, 50 50 T 100 50 T 150 50 T 200 50"
                  fill="none"
                  stroke="#FF4D00"
                  strokeWidth="2"
                  initial={{ pathLength: 0, strokeDasharray: '10, 5' }}
                  animate={{ pathLength: 1, strokeDashoffset: [0, -15] }}
                  transition={{ 
                    pathLength: { duration: 2, ease: 'easeInOut' },
                    strokeDashoffset: { duration: 1, repeat: Infinity, ease: 'linear' }
                  }}
                />
              </svg>
            </div>
          </ProtocolCard>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="vizyon" className="py-48 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-8">VİZYONUMUZ</h2>
        <h3 className="text-5xl md:text-9xl font-sans font-bold tracking-tighter mb-12">
          BİRLİKTE <br />
          <span className="font-serif italic font-normal">YARATALIM.</span>
        </h3>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Dijital dünyada iz bırakacak, ölçeklenebilir ve yenilikçi projeleriniz için profesyonel çözüm ortağınız.
        </p>
        <a 
          href="mailto:project@harp.tr" 
          className="group inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-all"
        >
          Projeyi Başlat <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="iletişim" className="bg-black text-white pt-32 pb-12 rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-1">
            <div className="text-2xl font-sans font-bold tracking-tighter mb-6">
              M. ENES <span className="text-brand-orange">YELLICE</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Geleceği kodluyor, değer inşa ediyoruz. Web3, AI ve HealthTech odaklı dijital ekosistem.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Navigasyon</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#girişimler" className="hover:text-brand-orange transition-colors">Girişimler</a></li>
              <li><a href="#uzmanlık" className="hover:text-brand-orange transition-colors">Uzmanlık</a></li>
              <li><a href="#vizyon" className="hover:text-brand-orange transition-colors">Vizyon</a></li>
              <li><a href="#iletişim" className="hover:text-brand-orange transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">İletişim</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="mailto:project@harp.tr" className="hover:text-brand-orange transition-colors">project@harp.tr</a></li>
              <li><a href="mailto:danismanlik@harp.tr" className="hover:text-brand-orange transition-colors">danismanlik@harp.tr</a></li>
              <li><a href="mailto:marketing@harp.tr" className="hover:text-brand-orange transition-colors">marketing@harp.tr</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Sosyal</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            SYSTEM_OPERATIONAL_2026
          </div>
          <p className="text-[10px] font-mono text-gray-500">
            © 2026 MUHAMMED ENES YELLICE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="custom-scrollbar">
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
