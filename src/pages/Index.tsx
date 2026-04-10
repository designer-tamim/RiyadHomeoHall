import { Phone, MessageCircle, MapPin, Clock, Heart, Shield, Award, Leaf, Stethoscope, Users, ChevronRight, Activity } from "lucide-react";
import doctorImg from "@/assets/doctor-profile.jpg";

const PHONE = "+8801916373228";
const WHATSAPP = "8801916373228";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-3">Homeopathic Physician</p>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Dr. Md. Riyad Uddin
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl mb-2 font-light">DHMS (BHB - DHAKA)</p>
              <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                Providing gentle, natural & effective homeopathic care. Your health, our priority.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/25 transition">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href="https://maps.app.goo.gl/1cx333z8wkvVxtKz9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/25 transition">
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img src={doctorImg} alt="Dr. Md. Riyad Uddin - Homeopathic Doctor" className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary-foreground/30 object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About Dr. Riyad</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Dr. Md. Riyad Uddin is a dedicated homeopathic physician holding a DHMS (BHB - DHAKA) degree. His patient-centered approach combines classical homeopathy with a deep understanding of natural healing.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Alongside his practice at Riyad Homeo Hall, he serves as an Assistant Teacher (Islamic Studies) at Carew's High School, actively contributing to his community in Darshana, Chuadanga.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-alt py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">Services & Treatments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {reasons.map((r) => (
              <div key={r.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamber Info */}
      <section className="section-alt py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">Chamber Information</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Riyad Homeo Hall</h3>
                  <p className="text-muted-foreground text-sm">Darshana Bus Stand,<br />Darshana, Chuadanga</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Consultation Hours</h3>
                  <p className="text-muted-foreground text-sm">From Asr prayer untill Isha prayer</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground text-sm">+880 1916 373228</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">+880 1916 373228</p>
                </div>
              </div>
            </div>
            <div className="bg-border/50 rounded-xl overflow-hidden min-h-[250px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1060173887495!2d88.80490287589224!3d23.52868899725072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fed300601d7ef1%3A0xf15a5b8fcd813e5a!2z4Kaw4Ka_4Kav4Ka84Ka-4KamIOCmueCni-CmruCmv-CmkyDgprngprI!5e0!3m2!1sen!2sbd!4v1773458208850!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                className="absolute inset-0 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-secondary rounded-xl p-6 md:p-8 text-center">
            <h3 className="font-semibold text-secondary-foreground mb-2">Patient Note</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Homeopathic treatments are complementary in nature. Results may vary from person to person. Please consult directly for a proper diagnosis before starting any treatment. This website is for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground/80 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold text-primary-foreground text-lg mb-1" style={{ fontFamily: "'Merriweather', serif" }}>Dr. Md. Riyad Uddin</p>
          <p className="text-sm mb-4">DHMS (BHB - DHAKA) — Homeopathic Physician</p>
          <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} Riyad Homeo Hall. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="sticky-mobile-bar bg-foreground border-t border-primary-foreground/10">
        <a href={`tel:${PHONE}`} className="flex-1 flex items-center justify-center gap-2 text-primary-foreground py-3.5 text-sm font-semibold">
          <Phone className="w-4 h-4" /> Call
        </a>
        <div className="w-px bg-primary-foreground/20" />
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-primary-foreground py-3.5 text-sm font-semibold">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

      {/* Bottom padding for sticky bar on mobile */}
      <div className="h-14 md:hidden" />
    </div>
  );
};

const services = [
  { icon: Leaf, title: "Chronic Disease Management", desc: "Long-term care for conditions like asthma, arthritis, migraine, and skin disorders." },
  { icon: Heart, title: "Women & Child Health", desc: "Gentle treatments for PCOS, thyroid issues, pediatric ailments, and pregnancy care." },
  { icon: Activity, title: "Men's & Women's Sexual Health", desc: "Experienced and confidential treatment for male and female sexual diseases." },
  { icon: Shield, title: "Allergy & Immunity", desc: "Boost immunity naturally and manage allergies, sinusitis, and recurrent infections." },
  { icon: Users, title: "Mental & Emotional Health", desc: "Support for anxiety, depression, insomnia, and stress-related conditions." },
  { icon: Award, title: "Skin & Hair Care", desc: "Holistic treatment for eczema, psoriasis, acne, hair fall, and other dermatological issues." },
];

const reasons = [
  { icon: Award, title: "15+ Years Experience", desc: "Trusted by thousands of patients over a decade and a half." },
  { icon: Leaf, title: "Natural & Safe", desc: "No side effects. Gentle medicines suitable for all ages." },
  { icon: Heart, title: "Personalized Care", desc: "Every patient receives individualized treatment plans." },
  { icon: Shield, title: "Holistic Approach", desc: "Treating the root cause, not just the symptoms." },
];

export default Index;
