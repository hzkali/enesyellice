/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  TrendingUp
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
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';

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
    name: "HARP GLOBAL TECHNOLOGY LLC",
    description: "Web3, yapay zeka ve bulut tabanlı çözümlere odaklanan küresel bir dijital inovasyon laboratuvarı.",
    link: "https://harpglobal.tr"
  },
  {
    name: "Harplabs Ltd",
    description: "Londra merkezli, Web3 ve yapay zeka odaklı dijital inovasyon laboratuvarı.",
    link: "https://harpglobal.tr"
  },
  {
    name: "VİTANİCA.TR",
    description: "Sağlık ve zindelik odaklı, yüksek kaliteli takviye edici gıdalar sunan vitamin şirketi.",
    link: "https://vitanica.tr"
  },
  {
    name: "Birdoktorasoralim.tr",
    description: "Sertifikalı tıp uzmanlarına anında erişim sağlayan bir HealthTech platformu.",
    link: "https://birdoktorasoralim.tr"
  },
  {
    name: "Finansmedya.net",
    description: "Finans, ekonomi ve yeni teknolojileri kapsayan bir dijital medya platformu.",
    link: "https://finanssmedya.net"
  },
  {
    name: "HostLabs.org",
    description: "Performans için optimize edilmiş ölçeklenebilir barındırma, uç CDN ve bulut çözümleri.",
    link: "https://enesyellice.tr"
  }
];

const links = [
  { label: "enesyellice.tr", url: "https://enesyellice.tr" },
  { label: "birdoktorasoralim.tr", url: "https://birdoktorasoralim.tr" },
  { label: "finanssmedya.net", url: "https://finanssmedya.net" },
  { label: "vitanica.tr", url: "https://vitanica.tr" },
  { label: "harpglobal.tr", url: "https://harpglobal.tr" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FF6321]/20">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-extrabold text-gradient"
          >
            ENES YELLICE
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Girişimler', 'Uzmanlık', 'Vizyon', 'İletişim'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold hover:text-[#FF6321] transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {['Girişimler', 'Uzmanlık', 'Vizyon', 'İletişim'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-display font-bold text-gradient"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6">
                Ben <span className="text-gradient">Muhammed Enes Yellice</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                9 yılı aşkın tecrübe. Yazılım geliştiriciliğinden teknoloji girişimciliğine. 
                Değer odaklı, ölçeklenebilir dijital ürünler inşa ediyorum.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#girişimler" 
                  className="px-8 py-4 bg-linear-to-r from-[#FF6321] to-[#FF0000] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#FF6321]/30 transition-all flex items-center gap-2"
                >
                  Projelerimi Gör <ChevronRight size={20} />
                </a>
                <a 
                  href="https://www.skool.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-[#FF6321] text-[#FF6321] font-bold rounded-full hover:bg-[#FF6321] hover:text-white transition-all flex items-center gap-2"
                >
                  Danışmanlık Al <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="text-[#FF6321]" size={20} /> Etki ve Büyüme Grafiği
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growthData}>
                      <defs>
                        <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FF6321" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#FF6321" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="impact" 
                        stroke="#FF6321" 
                        strokeWidth={3} 
                        fillOpacity={1} 
                        fill="url(#colorImpact)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FF6321]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FF0000]/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6321] mb-4">Felsefem</h2>
            <p className="text-3xl md:text-4xl font-display font-bold leading-snug">
              “Daha azıyla daha fazlasını yapmak.” Yazdığım her kod satırı hesaplanmış bir yatırımdır. 
              Uzun vadeli değer, hız ve ölçeklenebilirlik için optimizasyon yaparım.
            </p>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="girişimler" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6321] mb-4">Portfolyo</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold">Şirketler & Girişimler</h3>
            </div>
            <p className="text-gray-500 max-w-md">
              Hem yerel hem de küresel pazarlarda yüksek etkili projelere liderlik ediyorum. Ben sadece yazılım geliştirmiyorum; iş kuruyorum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <motion.div 
                key={company.name}
                whileHover={{ y: -10 }}
                className="group p-10 bg-white border border-gray-100 rounded-4xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#FF6321] group-hover:bg-[#FF6321] group-hover:text-white transition-colors">
                    {index === 0 ? <Globe size={28} /> : index === 1 ? <Cpu size={28} /> : index === 2 ? <TrendingUp size={28} /> : <Database size={28} />}
                  </div>
                  <a href={company.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF6321]">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h4 className="text-2xl font-bold mb-4">{company.name}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {company.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="uzmanlık" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6321] mb-4">Yetenekler</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-8">Temel Uzmanlık Alanları</h3>
              
              <div className="space-y-8">
                {[
                  { icon: <Layers />, title: "Full Stack Geliştirme", desc: "React, Next.js, Node.js, NestJS, Python, Flutter" },
                  { icon: <Smartphone />, title: "Mobil Geliştirme", desc: "iOS, Android, Flutter" },
                  { icon: <Code2 />, title: "Web3 & Blockchain", desc: "Solana, Ethereum, NFT, DeFi, DEX, CEX" },
                  { icon: <Rocket />, title: "Startup MVP", desc: "Ürün odaklı büyüme ve hızlı prototipleme" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF6321]/5 flex items-center justify-center text-[#FF6321]">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-1">{item.title}</h5>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-4xl">
              <h4 className="text-xl font-bold mb-8 text-center">Yetenek Dağılımı</h4>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expertiseData} layout="vertical" margin={{ left: 40 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fontWeight: 'bold', fontSize: 14 }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '12px', border: 'none' }}
                    />
                    <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={30}>
                      {expertiseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#FF6321' : '#FF0000'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="vizyon" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6321] mb-4">Bağlantılar</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-12">Dijital Ekosistemim</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-semibold hover:border-[#FF6321] hover:text-[#FF6321] transition-all flex items-center gap-2"
              >
                {link.label} <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="iletişim" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
            <div className="text-center md:text-left lg:col-span-1">
              <div className="text-3xl font-display font-extrabold text-gradient mb-4">
                ENES YELLICE
              </div>
              <p className="text-gray-500 max-w-xs">
                Geleceği kodluyor, değer inşa ediyoruz.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Yeni Proje</h4>
              <a 
                href="mailto:project@harpglobal.tr" 
                className="text-lg font-bold text-gray-900 hover:text-[#FF6321] transition-colors"
              >
                project@harpglobal.tr
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Eğitim & Danışmanlık</h4>
              <a 
                href="mailto:danismanlik@harpglobal.tr" 
                className="text-lg font-bold text-gray-900 hover:text-[#FF6321] transition-colors"
              >
                danışmanlık@harpglobal.tr
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Marketing</h4>
              <a 
                href="mailto:marketing@harpglobal.tr" 
                className="text-lg font-bold text-gray-900 hover:text-[#FF6321] transition-colors"
              >
                marketing@harpglobal.tr
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 Muhammed Enes Yellice. Tüm hakları saklıdır.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#FF6321]">LinkedIn</a>
              <a href="#" className="hover:text-[#FF6321]">Twitter</a>
              <a href="#" className="hover:text-[#FF6321]">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
