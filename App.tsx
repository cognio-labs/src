/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  BookOpen, 
  Shield, 
  Zap, 
  Compass, 
  Anchor, 
  ArrowRight,
  Clock,
  Star,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { DharmaChakra, LotusGeometry, SoundWave, MandalaGrid } from './components/SacredArt';
import authorImage from './images/author-image.png';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Book', href: '#book' },
    { name: 'Chapters', href: '#chapters' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Preview', href: '#preview' },
    { name: 'Author', href: '#author' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-maroon-dark/80 backdrop-blur-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <DharmaChakra className="w-8 h-8 text-gold" />
          <span className="font-serif text-xl tracking-widest uppercase text-parchment">Maha Mantras</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest text-parchment/60 hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-gold text-maroon-dark text-xs uppercase font-bold tracking-widest rounded-full hover:bg-white transition-all duration-300"
          >
            Pre-Order
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-parchment" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-maroon-dark z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-parchment">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl text-parchment hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-8 px-8 py-4 bg-gold text-maroon-dark text-lg uppercase font-bold tracking-widest rounded-full">
                Pre-Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden sacred-grid bg-maroon-dark">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 py-20">
        
        {/* Left Content: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left order-2 lg:order-1"
        >
          <span className="text-gold uppercase tracking-[0.5em] text-xs mb-6 block font-bold">The Sacred Discipline</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 tracking-tight leading-[0.9] text-parchment">
            Maha <br />
            <span className="text-gold-gradient italic">Mantras</span>
          </h1>
          <p className="text-xl md:text-2xl text-parchment/60 font-light tracking-wide mb-12 max-w-lg">
            A structural blueprint for your consciousness. Discipline your mind. Awaken inner power.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-gold text-maroon-dark font-bold uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-gold/10">
              Pre-Order Now
            </button>
            <button 
              onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 border border-parchment/20 text-parchment font-bold uppercase tracking-widest rounded-full hover:bg-parchment hover:text-maroon-dark transition-all duration-300"
            >
              Read Sample
            </button>
          </div>
        </motion.div>

        {/* Right Content: Book & Mandala */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          {/* Mandala - Now localized behind the book */}
          <motion.div 
            style={{ y: y1, rotate }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-15 pointer-events-none"
          >
            <MandalaGrid className="w-full h-full text-gold" />
          </motion.div>

          {/* Book Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative w-64 h-96 md:w-80 md:h-[480px] group"
          >
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full group-hover:bg-gold/30 transition-all duration-700" />
            <div className="relative w-full h-full bg-maroon border border-gold/30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden flex flex-col items-center pt-20 pb-16 px-8 text-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
              
              {/* Sacred Circle with Image - Positioned in the upper third */}
              <div className="relative w-32 h-32 flex items-center justify-center mb-16">
                <div className="absolute inset-0 rounded-full overflow-hidden border border-gold/30 z-0 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  <img 
                    src={authorImage} 
                    alt="Sacred" 
                    className="w-full h-full object-cover opacity-60 scale-125" 
                  />
                  <div className="absolute inset-0 bg-maroon/20 mix-blend-multiply"></div>
                </div>
                <DharmaChakra className="w-full h-full text-gold absolute z-10 opacity-80" />
                <div className="relative z-20 pointer-events-none">
                  <h2 className="font-serif text-[11px] leading-tight text-parchment tracking-[0.25em] font-bold">
                    LIFE-<br />CHANGING
                  </h2>
                </div>
              </div>

              <div className="space-y-4 mt-auto mb-auto">
                <h2 className="font-serif text-5xl text-gold-gradient font-bold relative z-10 tracking-widest">MAHA</h2>
                <h2 className="font-serif text-5xl text-gold-gradient font-bold relative z-10 tracking-[0.3em]">MANTRAS</h2>
              </div>

              <div className="mt-auto pt-8">
                <div className="w-24 h-px bg-gold/20 mx-auto mb-4" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold/60 relative z-10 block">
                  The Science of Living the Gita
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold/40">Scroll to Begin</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
};

const AuthoritySection = () => {
  return (
    <section id="book" className="py-32 px-6 bg-maroon-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <LotusGeometry className="w-16 h-16 text-gold/20 mx-auto mb-12" />
          <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
            The world is loud. <br />
            <span className="text-gold italic">Your mind doesn't have to be.</span>
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-parchment/70 font-light leading-relaxed max-w-2xl mx-auto">
            <p className="italic text-gold/80 mb-8">
              "Who am I beyond my roles? What am I truly here for? Is there a way to live without anxiety, without conflict?"
            </p>
            <p>
              In an era of infinite distraction, the greatest luxury is a focused mind. 
              Most people live in a state of mental fragmentation, pulled by every notification and impulse.
            </p>
            <p>
              <span className="text-parchment font-medium">Maha Mantras</span> is not just a book of chants. 
              It is a structural blueprint for your consciousness. It uses the ancient science of sound 
              to build an inner fortress that no external chaos can penetrate.
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-px bg-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ChaptersSection = () => {
  const chapters = [
    {
      num: "01",
      title: "Find and Live Your Svadharma",
      verse: "shreyan svadharmo vigunah paradharmat sv-anushthitat...",
      translation: "One’s own dharma, despite its imperfections, is superior to the well-executed dharma of another.",
      desc: "Discover the natural rhythm of your being. Svadharma is choosing honesty over comfort and living in line with your sacred nature, even when it hurts.",
      takeaway: "Nurture your unique seed until it blooms into its most beautiful form.",
      page: "37"
    },
    {
      num: "02",
      title: "Nishkama Karma Yoga",
      verse: "karmany evadhikaras te ma phaleshu kadachana...",
      translation: "You have a right only to action, never to its fruits.",
      desc: "The Joy of Desireless Action. Learn the mathematical formula of truth: Karma minus Desire equals Nishkama Karma. Act from presence, not pursuit.",
      takeaway: "You act with full presence, without anxiety, as a channel of effort and grace.",
      page: "66"
    },
    {
      num: "03",
      title: "Step Beyond Karma, Gyana and Bhakti",
      verse: "traigunya-vishaya veda nistraigunyo bhāva Arjuna...",
      translation: "The Vedas deal with the three gunas, O Arjuna. But you, rise above these three qualities.",
      desc: "Understand the three layers of the human mind: action, thought, and emotion. Transcend these 'boats' to reach the shore of pure awareness.",
      takeaway: "Meditation is the medicine; the three paths are merely the vehicles that carry it.",
      page: "106"
    },
    {
      num: "04",
      title: "Beyond Form and Formless Worship",
      verse: "evam satata-yukta ye bhaktas tvam paryupasate...",
      translation: "Some worship You as the manifest, others meditate upon You as the imperishable.",
      desc: "A seamless journey from Sakar (form) to Nirakar (formless). Use the idol as a jumping board to the infinite, then return the form to formlessness.",
      takeaway: "The idol is not God; it is a portal, a pointer, and a mirror to your deeper Self.",
      page: "146"
    },
    {
      num: "05",
      title: "Transcend to Gunatita",
      verse: "gunan etan atitya trin dehi deha samudbhāvan...",
      translation: "When the embodied one rises above these three gunas, he attains immortality.",
      desc: "Move beyond the triad of Sattva (clarity), Rajas (activity), and Tamas (inertia). Live not as a person, but as a presence in the fourth dimension.",
      takeaway: "Freedom comes from waking up the witness who sees the dance of the gunas.",
      page: "178"
    },
    {
      num: "06",
      title: "Surrender: The Life Force",
      verse: "sarva-dharman parityajya mam ekam sharanam vraja...",
      translation: "Abandon all varieties of religion and simply surrender unto Me.",
      desc: "The art of Sharanagati. Life is not a puzzle to solve but a leela (divine play) to witness. Move from the burden of karma to the lightness of play.",
      takeaway: "Surrender is the shadow of meditation; it arises naturally when the mind is still.",
      page: "204"
    },
    {
      num: "07",
      title: "Breaking Free from the Identity Trap",
      verse: "Kshetrajnam cha api mam viddhi sarva kshetreshu Bharata...",
      translation: "Know Me to be the Knower in all bodies. This alone is true knowledge.",
      desc: "Distinguish the Field (Kshetra) from the Knower (Kshetrajna). You are not the storm; you are the sky. Stop identifying with passing patterns.",
      takeaway: "The root of all sorrow is the loss of our witnessing state (Sakshi Bhava).",
      page: "243"
    },
    {
      num: "08",
      title: "Freedom from Rituals",
      verse: "vedeshu yajneshu tapahsu chaiva, daneshu yat...",
      translation: "One who has realized this knowledge transcends all the merits promised by rituals.",
      desc: "The Essence is Everything. Rituals are signposts, not the destination. Don't worship the finger pointing at the moon; look at the moon itself.",
      takeaway: "The real yajna is the fire of awareness that burns away the ego.",
      page: "272"
    },
    {
      num: "09",
      title: "The Fourfold Path",
      verse: "kayena manasa buddhya kevalair indriyair api...",
      translation: "The yogis perform action with body, mind, and senses, free from attachment.",
      desc: "The Supreme Science of Living. A cosmic lifestyle design through the stages of Brahmacharya, Grihastha, Vanaprastha, and Sannyasa.",
      takeaway: "Align outer excellence with inner evolution so ambition does not outrun meaning.",
      page: "298"
    },
    {
      num: "10",
      title: "Stay Anchored in Your Own Being",
      verse: "sukha-duhkhe same kritva labhalabhau jayajayau...",
      translation: "Treat pleasure and pain, gain and loss, victory and defeat alike.",
      desc: "Samatva Yoga: The final frontier of inner mastery. Remain steady amid the ups and downs of life. Enter the inner cave of the heart.",
      takeaway: "Equanimity is not emotional suppression; it is spiritual transcendence.",
      page: "324"
    }
  ];

  return (
    <section id="chapters" className="py-32 px-6 bg-maroon-dark relative overflow-hidden border-y border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold">The Sacred Journey</span>
            <h2 className="text-5xl md:text-8xl font-serif leading-none">The Ten Maha Mantras</h2>
          </div>
          <p className="text-parchment/40 uppercase tracking-widest text-xs font-medium pb-4">
            Extracted from 364 Pages of Wisdom
          </p>
        </div>

        <div className="grid gap-px bg-gold/10 border border-gold/10">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-maroon-dark p-8 md:p-16 flex flex-col gap-10 hover:bg-maroon/10 transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-gold/20 text-4xl group-hover:text-gold transition-colors duration-500">{chapter.num}</span>
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-5xl font-serif text-parchment group-hover:text-gold transition-colors duration-500">{chapter.title}</h3>
                    <p className="text-gold/40 font-serif italic text-lg max-w-xl leading-snug">"{chapter.verse}"</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold/40">Chapter Page</span>
                  <span className="font-serif text-3xl text-gold/60">{chapter.page}</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 border-t border-gold/5 pt-10">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold">The Essence</span>
                    <p className="text-parchment/70 font-light leading-relaxed text-lg">
                      {chapter.desc}
                    </p>
                  </div>
                  <div className="p-6 bg-gold/5 border-l-2 border-gold/30 italic text-parchment/90">
                    {chapter.translation}
                  </div>
                </div>

                <div className="space-y-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Key Takeaway</span>
                    <p className="text-parchment/80 font-medium text-xl leading-relaxed">
                      {chapter.takeaway}
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gold hover:text-white transition-colors group/btn">
                      Explore this mantra
                      <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:text-maroon-dark transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WisdomFrameworks = () => {
  const frameworks = [
    {
      title: "Discovering Your Svadharma",
      subtitle: "Three Timeless Ways",
      items: [
        { name: "The Art of Stillness", detail: "Listen to the voice within. In deep silence, your inner compass begins to show the way." },
        { name: "The 'What If' Scenario", detail: "If you had everything you ever wanted, what would you do next? That is your soul's pure desire." },
        { name: "Work As Love", detail: "When labour feels like devotion and the doing itself is the reward, you have found your rhythm." }
      ]
    },
    {
      title: "The Art of Surrender",
      subtitle: "Three Steps of Sharanagati",
      items: [
        { name: "Total Acceptance", detail: "Stop fighting what is. Align yourself with what life is offering in this present moment." },
        { name: "Faith in the Future", detail: "Stop feeling like you must control everything. Trust that life is looking out for you." },
        { name: "Living Like Krishna", detail: "Act with totality but without craving. Become the hollow flute for the divine melody." }
      ]
    },
    {
      title: "The Path of Samatva",
      subtitle: "Three Great Formulas",
      items: [
        { name: "Life as Play", detail: "See life as a divine leela. You are a participant in a sacred choreography, not the master planner." },
        { name: "Dissolve the Need", detail: "Remove the desire to receive love. When you stop needing, you become the source." },
        { name: "Unconditional Love", detail: "Give love without hooks or transactions. Love the friend and the foe equally." }
      ]
    }
  ];

  return (
    <section className="py-32 px-6 bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <MandalaGrid className="w-full h-full text-gold" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold">Actionable Wisdom</span>
          <h2 className="text-5xl md:text-7xl font-serif text-parchment">The Science of Living</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {frameworks.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-3xl border-gold/10 flex flex-col h-full"
            >
              <span className="text-gold/60 uppercase tracking-widest text-[10px] mb-2 block">{f.subtitle}</span>
              <h3 className="text-3xl font-serif text-parchment mb-10 border-b border-gold/10 pb-6">{f.title}</h3>
              
              <div className="space-y-8 flex-1">
                {f.items.map((item, idx) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <h4 className="text-gold font-medium uppercase tracking-wider text-xs">{item.name}</h4>
                    </div>
                    <p className="text-parchment/60 font-light leading-relaxed pl-4 border-l border-gold/5">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Mental Clarity",
      desc: "Dissolve the fog of overthinking and see your path with absolute precision.",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      title: "Focus & Discipline",
      desc: "Train your attention to stay where you place it, for as long as you need.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Inner Stability",
      desc: "Remain unmoved by external events, anchored in your own spiritual center.",
      icon: <Anchor className="w-6 h-6" />,
    },
    {
      title: "Spiritual Strength",
      desc: "Access the latent power within your DNA through sacred sound vibrations.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Detachment",
      desc: "Observe the world without being consumed by it. Freedom from chaos.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Deep Peace",
      desc: "A silence that is not empty, but full of presence and awareness.",
      icon: <Star className="w-6 h-6" />,
    }
  ];

  return (
    <section id="benefits" className="py-32 px-6 bg-parchment text-maroon-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-gold-muted uppercase tracking-[0.3em] text-xs mb-4 block font-bold">The Transformation</span>
          <h2 className="text-5xl md:text-7xl font-serif">What You Will Gain</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-maroon-dark/10 rounded-2xl hover:border-gold/50 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-maroon text-parchment rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{benefit.title}</h3>
              <p className="text-maroon-dark/60 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PreviewSection = () => {
  return (
    <section id="preview" className="py-32 px-6 bg-maroon-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold">Inside the Pages</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 italic">A Mental Operating System</h2>
            <p className="text-xl text-parchment/60 font-light leading-relaxed mb-12">
              This is not a motivational book. It is a technical manual for the human mind. 
              Each page is designed with Apple-level precision to ensure the knowledge 
              is not just read, but integrated.
            </p>
            <ul className="space-y-6">
              {['Premium 120gsm Parchment Paper', 'Minimalist Vedic Illustrations', 'Step-by-Step Practice Guides', 'Luxury Hardcover Binding'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-parchment/80">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="tracking-wide uppercase text-xs font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 aspect-[4/5] bg-parchment rounded-lg shadow-2xl p-12 overflow-hidden"
          >
            <div className="h-full border border-maroon-dark/5 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest text-maroon-dark/40">Chapter 04</span>
                <DharmaChakra className="w-6 h-6 text-gold/40" />
              </div>
              <div className="max-w-xs">
                <h3 className="font-serif text-4xl text-maroon-dark mb-6">The Vibration of Silence</h3>
                <div className="space-y-4">
                  <div className="h-1 w-full bg-maroon-dark/5" />
                  <div className="h-1 w-full bg-maroon-dark/5" />
                  <div className="h-1 w-3/4 bg-maroon-dark/5" />
                  <div className="h-1 w-full bg-maroon-dark/5" />
                </div>
              </div>
              <div className="flex justify-center">
                <LotusGeometry className="w-24 h-24 text-gold/10" />
              </div>
              <div className="text-center">
                <span className="text-[8px] uppercase tracking-widest text-maroon-dark/40">Page 108</span>
              </div>
            </div>
          </motion.div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
};

const AuthorSection = () => {
  return (
    <section id="author" className="py-32 px-6 bg-parchment text-maroon-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[3/4] bg-maroon rounded-2xl overflow-hidden relative group"
          >
            <img 
              src="https://picsum.photos/seed/spiritual-author/800/1000" 
              alt="Sākṣhī Shree" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark to-transparent opacity-60" />
          </motion.div>
        </div>
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-muted uppercase tracking-[0.3em] text-xs mb-4 block font-bold">The Enlightened Master</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Sākṣhī Shree</h2>
            <p className="text-xl text-maroon-dark/70 font-light leading-relaxed mb-8">
              Born Rām Krishna Upādhyāya, Sākṣhī Shree is a rare triad: an enlightened master, a householder, and a former civil servant. 
              Mentored by Swami Sudarshanacharya Ji Maharaj, he bridges the gap between ancient Himalayan wisdom and the modern boardroom.
            </p>
            <p className="text-lg text-maroon-dark/60 font-light leading-relaxed mb-12 italic border-l-4 border-gold/20 pl-8">
              "I do not teach any religion; I bring out the best of philosophies to enhance the lives of those I touch. 
              The battlefield of Kurukshetra has not disappeared—it has only multiplied. It now exists within every individual navigating ambition and conscience."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-12 h-px bg-gold-muted" />
              <span className="font-serif italic text-xl">Founder of the Science Divine Foundation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Rohan Sharma",
      role: "Tech Entrepreneur",
      text: "This book did for my focus what 10 years of meditation apps couldn't. It's a masterpiece of clarity.",
      stars: 5
    },
    {
      name: "Elena Gilbert",
      role: "Creative Director",
      text: "The aesthetic alone is worth it, but the content is life-changing. A truly premium experience.",
      stars: 5
    },
    {
      name: "Dr. Amit Varma",
      role: "Neuroscientist",
      text: "The way Vedant explains the science of sound vibration is both spiritually deep and scientifically sound.",
      stars: 5
    }
  ];

  return (
    <section className="py-32 px-6 bg-maroon-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass rounded-3xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg text-parchment/80 font-light italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-serif text-xl text-parchment">{review.name}</h4>
                <p className="text-xs uppercase tracking-widest text-gold/60 mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PreOrderSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-maroon-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <LotusGeometry className="absolute -top-20 -right-20 w-[600px] h-[600px] text-gold" />
      </div>

      <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-24 text-center relative z-10 border-gold/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-widest mb-8">
            Limited First Edition
          </span>
          <h2 className="text-5xl md:text-8xl font-serif mb-8">Reserve Your Legacy</h2>
          <p className="text-xl text-parchment/60 font-light mb-16 max-w-2xl mx-auto">
            Pre-order the premium hardcover edition today and receive the exclusive 
            "Sacred Sound" digital companion and a hand-signed bookmark.
          </p>

          <div className="flex justify-center gap-4 md:gap-12 mb-16">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-serif text-gold mb-2">{value.toString().padStart(2, '0')}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-parchment/40">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-baseline gap-4">
              <span className="text-parchment/40 line-through text-2xl font-light">₹2,499</span>
              <span className="text-parchment text-5xl font-serif">₹1,499</span>
            </div>
            <button className="w-full md:w-auto px-16 py-6 bg-gold text-maroon-dark font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl shadow-gold/20">
              Reserve Your Copy Now
            </button>
            <p className="text-xs text-parchment/40 uppercase tracking-widest">
              Shipping worldwide starting April 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FinalImpact = () => {
  return (
    <section className="py-48 px-6 bg-maroon-dark relative flex items-center justify-center text-center">
      <div className="absolute inset-0 opacity-5">
        <MandalaGrid className="w-full h-full text-gold" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="max-w-4xl relative z-10"
      >
        <h2 className="text-4xl md:text-7xl font-serif italic leading-tight text-parchment">
          “This is not just a book. <br />
          It is a discipline system for your mind.”
        </h2>
        <div className="mt-16 flex justify-center">
          <LotusGeometry className="w-12 h-12 text-gold/20" />
        </div>
      </motion.div>
    </section>
  );
};

const GlossarySection = () => {
  const terms = [
    { term: "Sākṣhī", meaning: "The inner witness; awareness that observes without judgement." },
    { term: "Svadharma", meaning: "One’s own right path; what is truly ‘yours to do’." },
    { term: "Nishkama Karma", meaning: "Action performed without clinging to results; pure doing." },
    { term: "Gunatita", meaning: "One who lives beyond the gunas; free of compulsive reactions." },
    { term: "Atman", meaning: "The Self; pure awareness underlying body and mind." },
    { term: "Samatva", meaning: "Equanimity in gain/loss, praise/blame." }
  ];

  return (
    <section className="py-24 px-6 bg-maroon-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-2 block font-bold">Wisdom Lexicon</span>
          <h2 className="text-4xl font-serif">Key Sanskrit Terms</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {terms.map((item) => (
            <div key={item.term} className="border-l border-gold/20 pl-6 py-2">
              <h4 className="text-gold font-serif text-xl mb-1">{item.term}</h4>
              <p className="text-parchment/40 text-sm font-light leading-relaxed">{item.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-maroon-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex items-center gap-3">
            <DharmaChakra className="w-8 h-8 text-gold" />
            <span className="font-serif text-xl tracking-widest uppercase text-parchment">Maha Mantras</span>
          </div>
          
          <div className="flex gap-12">
            {['Privacy', 'Terms', 'Shipping', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-[10px] uppercase tracking-widest text-parchment/40 hover:text-gold transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-parchment/60 hover:border-gold hover:text-gold transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-parchment/60 hover:border-gold hover:text-gold transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-parchment/60 hover:border-gold hover:text-gold transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/20">
            © 2026 Maha Mantras Publishing. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-maroon-dark text-parchment selection:bg-gold/30">
      <Navbar />
      <Hero />
      <AuthoritySection />
      <ChaptersSection />
      <WisdomFrameworks />
      <BenefitsSection />
      <PreviewSection />
      <AuthorSection />
      <Testimonials />
      <PreOrderSection />
      <GlossarySection />
      <FinalImpact />
      <Footer />
    </div>
  );
}
