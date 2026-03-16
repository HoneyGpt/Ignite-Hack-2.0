import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  Calendar, 
  Trophy, 
  Users, 
  Code2, 
  Cpu, 
  Globe, 
  Sparkles, 
  ArrowRight,
  Menu,
  X,
  Plus,
  Minus,
  Github,
  Linkedin,
  MessageSquare,
  Zap,
  Sword,
  Shield,
  Star
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl py-3 border-b border-ravage/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <Flame className="text-ravage fill-ravage animate-pulse" size={36} />
            <div className="absolute inset-0 bg-ravage blur-xl opacity-40 animate-pulse"></div>
          </div>
          <span className="text-3xl font-black tracking-widest text-white font-display uppercase italic">
            IGNITE<span className="text-ravage text-glow-ravage">HACK</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {['About', 'Tracks', 'Rewards', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-black uppercase tracking-[0.3em] text-white/60 hover:text-ravage transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-ravage transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 46, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="https://ignite-hack-2-0.devpost.com/"
            target="_blank"
            className="px-8 py-3 bg-ravage text-white text-xs font-black uppercase tracking-[0.2em] rounded-sm skew-x-[-12deg] transition-all"
          >
            <span className="inline-block skew-x-[12deg]">Enter the Arena</span>
          </motion.a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Unique Cosmic Hero Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="/cosmic-hero.png" 
            alt="Cosmic Forge" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Layered Overlays for Depth */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>
      
      {/* Divine Aura Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-ravage/20 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 md:pt-0"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-sm border border-ravage/30 bg-ravage/5 text-ravage text-[10px] font-black uppercase tracking-[0.5em] mb-12 animate-flicker">
            <Zap size={14} className="fill-ravage" />
            <span>Registration Active • Season 2.0</span>
          </div>

          <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter mb-8 leading-[0.8] uppercase">
            <span className="block text-white font-display text-glow-primary">CODE LIKE</span>
            <span className="block fiery-gradient font-display italic drop-shadow-[0_15px_30px_rgba(255,46,0,0.6)]">A GOD.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-16 font-medium leading-relaxed uppercase tracking-[0.2em]">
            Shatter the boundaries of reality. Build the impossible. 
            The most <span className="text-ravage font-black text-glow-ravage">ravage</span> hackathon of the era is here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://ignite-hack-2-0.devpost.com/"
              target="_blank"
              className="px-14 py-6 bg-white text-black font-black text-xs uppercase tracking-[0.4em] rounded-sm hover:bg-ravage hover:text-white transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Legend</span>
              <div className="absolute inset-0 bg-ravage translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#tracks"
              className="px-14 py-6 border-2 border-white/10 text-white font-black text-xs uppercase tracking-[0.4em] rounded-sm hover:border-ravage hover:text-ravage transition-all duration-300 backdrop-blur-sm"
            >
              Examine Tracks
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hero Edge Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

const TrackIcon = ({ icon: Icon }) => (
  <div className="w-20 h-20 bg-black border border-ravage/30 flex items-center justify-center text-ravage mb-8 relative group-hover:border-ravage transition-all duration-500 overflow-hidden">
    <Icon size={32} className="relative z-10" />
    <div className="absolute inset-0 bg-ravage/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
  </div>
);

const TrackCard = ({ icon: Icon, title, description, id }) => (
  <motion.div 
    whileHover={{ y: -15 }}
    className="group glass-card p-10 h-full flex flex-col items-start border-l-4 border-l-ravage/0 hover:border-l-ravage transition-all duration-500"
  >
    <div className="text-6xl font-black text-white/5 absolute top-4 right-4 group-hover:text-ravage/10 transition-colors">
      0{id}
    </div>
    <TrackIcon icon={Icon} />
    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-ravage transition-colors">
      {title}
    </h3>
    <p className="text-white/70 leading-relaxed font-medium uppercase text-xs tracking-widest mb-8">
      {description}
    </p>
    <div className="mt-auto flex items-center gap-2 text-ravage text-[10px] font-black tracking-[0.2em] group-hover:gap-4 transition-all">
      EXPLORE BOUNDARIES <ArrowRight size={14} />
    </div>
  </motion.div>
);

const Tracks = () => {
  const tracks = [
    { id: 1, icon: Sword, title: "Ignite Impact", description: "Weaponize your code for social revolution. Build tools that dismantle global catastrophes and empower the neglected." },
    { id: 2, icon: Zap, title: "Future Forward", description: "Architect the singularity. Synthesize AI, neural networks, and quantum concepts to forge the next human epoch." },
    { id: 3, icon: Code2, title: "Code Catalyst", description: "Forge the master tools. Develop advanced automation and developer infrastructures that transcend modern limitations." },
    { id: 4, icon: Shield, title: "Digital Vanguard", description: "Defend the frontier. Secure the future of finance, health, and education through impenetrable digital fortresses." }
  ];

  return (
    <section id="tracks" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-ravage font-black tracking-[0.5em] uppercase text-xs mb-6 block">Target Tracks</span>
          <h2 className="text-5xl md:text-8xl font-black text-white font-display uppercase italic">CHOOSE YOUR <span className="text-ravage text-glow-ravage">WEAPON</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tracks.map((track) => (
            <TrackCard key={track.id} {...track} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RewardItem = ({ award, desc, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex gap-8 items-start mb-16 group"
  >
    <div className="p-4 bg-ravage/5 border border-ravage/20 text-ravage group-hover:bg-ravage group-hover:text-white transition-all duration-300">
      <Icon size={32} />
    </div>
    <div>
      <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter group-hover:text-glow-ravage transition-all">{award}</h3>
      <p className="text-white/60 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-xl italic">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Rewards = () => {
  return (
    <section id="rewards" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-px h-full bg-linear-to-b from-transparent via-ravage/30 to-transparent"></div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-ravage font-black tracking-[0.5em] uppercase text-xs mb-6 block">Victory Spoils</span>
          <h2 className="text-6xl md:text-7xl font-black text-white uppercase leading-[0.9] mb-12">REWARDS FOR THE <span className="text-ravage">WORTHY</span></h2>
          <p className="text-accent mb-16 uppercase font-black tracking-widest leading-loose">
            The arena only remembers the victors. Secure your legacy with high-impact endorsements and elite mentorship.
          </p>
          
          <RewardItem 
            delay={0.1}
            icon={Trophy} 
            award="Ignite Champion" 
            desc="Official LOR from industry titans, Hall of Fame immortalization, and the verified Organizer Seal of Legend."
          />
          <RewardItem 
            delay={0.2}
            icon={Star} 
            award="Innovation Elite" 
            desc="Exclusive strategic offensive sessions with Mentozy leads and personalized roadmap to commercial dominance."
          />
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-full aspect-square border border-white/5 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-ravage/5 animate-pulse"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-3/4 h-3/4 border-2 border-dashed border-ravage/20 rounded-full"
            ></motion.div>
            <div className="relative text-center">
              <span className="block text-8xl font-black text-white mb-2">20+</span>
              <span className="text-ravage font-black tracking-[0.4em] uppercase text-xs">PREMIUM CERTIFICATES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [active, setActive] = useState(0);
  const faqs = [
    { q: "Who dares to enter?", a: "Individual warriors or squads of up to 5. Students, specialists, and renegade developers are all welcome." },
    { q: "The cost of entry?", a: "Zero. Entry is free. We only require your absolute focus and commitment to excellence." },
    { q: "Can I bring an existing weapon?", a: "New projects only. If utilizing an existing base, you must implement radical advancements during the hackathon." }
  ];

  return (
    <section id="faq" className="py-32 bg-black/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-20 text-center">INTEL <span className="text-ravage">&</span> GUIDELINES</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`p-8 border-l-2 transition-all cursor-pointer ${active === i ? 'bg-ravage/5 border-ravage' : 'bg-transparent border-white/10 hover:border-white/30'}`}
              onClick={() => setActive(i)}
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-4">
                <span className={`w-2 h-2 rounded-full ${active === i ? 'bg-ravage animate-pulse' : 'bg-slate-700'}`}></span>
                {faq.q}
              </h3>
              <AnimatePresence>
                {active === i && (
                  <motion.p 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="text-white/80 font-medium uppercase text-xs tracking-[0.15em] leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-black">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-4 mb-12">
        <Flame className="text-ravage fill-ravage" size={32} />
        <span className="text-4xl font-black tracking-widest text-white font-display italic">IGNITEHACK</span>
      </div>
      <div className="mb-12">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-ravage mb-4 underline decoration-ravage/30 underline-offset-4">
          CONTACT OUR LOGISTICS
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
          <a href="mailto:wearekrishnaites@gmail.com" className="text-white/80 hover:text-white font-bold tracking-widest uppercase text-[10px] transition-all">wearekrishnaites@gmail.com</a>
          <a href="mailto:hello@mentozy.app" className="text-white/80 hover:text-white font-bold tracking-widest uppercase text-[10px] transition-all">hello@mentozy.app</a>
        </div>
      </div>

      <div className="flex justify-center gap-12 mb-12">
        <a href="https://github.com/" target="_blank" className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 hover:text-white transition-colors">Github</a>
        <a href="https://linkedin.com/" target="_blank" className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 hover:text-white transition-colors">LinkedIn</a>
        <a href="https://discord.gg/2UdqzND6" target="_blank" className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 hover:text-white transition-colors">Discord</a>
      </div>
      <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em]">
        © MMXXVI • A <a href="https://krishnaite.vercel.app/" target="_blank" className="hover:text-ravage transition-all decoration-ravage/30 underline underline-offset-4">KRISHNAITE</a> PRODUCTION • <a href="https://mentozy.app" target="_blank" className="hover:text-ravage transition-all decoration-ravage/30 underline underline-offset-4">MENTOZY</a> PARTNERED
      </p>
    </div>
  </footer>
);

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) return 100;
        return oldProgress + (100 / (15 * 10)); // 15 seconds, 10 increments per second
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "circOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-ravage/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="relative">
            <Flame className="text-ravage fill-ravage animate-pulse" size={60} />
            <div className="absolute inset-0 bg-ravage blur-2xl opacity-50 animate-pulse"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 font-display italic">
            <span className="text-white block">WELCOME TO</span>
            <span className="fiery-gradient block text-glow-ravage">ARENA!</span>
          </h1>
          
          <div className="mt-12 w-64 md:w-96 h-[2px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-ravage shadow-[0_0_15px_rgba(255,46,0,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-6 text-xs font-black uppercase tracking-[0.5em] text-white/40"
          >
            Initializing Battle Protocol {Math.round(progress)}%
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Particles-like elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-ravage rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 15000); // 15 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <Tracks />
      <Rewards />
      <FAQ />
      
      {/* Absolute Final CTA */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="p-20 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-ravage/5 animate-pulse"></div>
            <h2 className="text-6xl md:text-9xl font-black text-white mb-12 uppercase italic leading-none">DO NOT <span className="text-ravage block">HESITATE.</span></h2>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://ignite-hack-2-0.devpost.com/"
              target="_blank"
              className="inline-block px-16 py-6 bg-ravage text-white font-black text-2xl uppercase tracking-[0.2em] skew-x-[-12deg]"
            >
              IGNITE NOW
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Global Ravage Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ravage/30 blur-[200px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ravage/20 blur-[200px] translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </main>
  );
}

export default App;
