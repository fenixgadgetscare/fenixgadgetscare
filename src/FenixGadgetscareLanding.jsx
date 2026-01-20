import { motion } from "framer-motion";
import {
  Smartphone,
  Wrench,
  Shield,
  Truck,
  CheckCircle,
  Laptop,
  Instagram,
  Youtube,
} from "lucide-react";

export default function FenixGadgetscareLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-24 bg-gradient-to-br from-gray-900 to-black text-white text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl lg:text-6xl font-bold mb-4">FENIX GADGETS CARE</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg lg:text-2xl max-w-2xl mx-auto mb-8">Fast, Trusted & Expert Gadget Repair in Tirupur</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-md lg:text-xl max-w-2xl mx-auto mb-10 opacity-80">Mobile & Laptop Service Center • Doorstep Repair • High-end Device Support</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="flex gap-6 justify-center mt-8 items-center">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="bg-white/10 p-4 rounded-2xl backdrop-blur-md"><Smartphone size={50} /></motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.2 }} className="bg-white/10 p-4 rounded-2xl backdrop-blur-md"><Wrench size={50} /></motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.4 }} className="bg-white/10 p-4 rounded-2xl backdrop-blur-md"><Laptop size={50} /></motion.div>
        </motion.div>
        <motion.a href="https://wa.me/919566886679?text=Hi%20Fenix%20Gadgets%20Care%2C%20I%20need%20to%20repair%20my%20device.%0AName%3A%20_____%0ADevice%20Model%3A%20_____%0AIssue%3A%20_____%0ALocation%3A%20_____%0APickup%20Required%3A%20Yes%2FNo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="inline-block mt-10 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition">Chat on WhatsApp</motion.a>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-20 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div><p className="text-4xl font-bold text-yellow-500">10,000+</p><p className="text-gray-600">Devices Repaired</p></div>
        <div><p className="text-4xl font-bold text-yellow-500">4.9★</p><p className="text-gray-600">Customer Rating</p></div>
        <div><p className="text-4xl font-bold text-yellow-500">15+</p><p className="text-gray-600">Years Experience</p></div>
        <div><p className="text-4xl font-bold text-yellow-500">100%</p><p className="text-gray-600">Quality Guaranteed</p></div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 lg:px-20 py-20 bg-gray-50">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">Our Top Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: <Smartphone size={42} />, title: "Mobile Repairs", desc: "Display, battery, mic, speaker, charging, motherboard & more." },
            { icon: <Wrench size={42} />, title: "Laptop Repairs", desc: "Chip-level repair, SSD upgrade, OS installation, keyboard replacement." },
            { icon: <Shield size={42} />, title: "Protection Plans", desc: "Affordable gadget protection & extended warranty plans." },
            { icon: <Truck size={42} />, title: "Doorstep Pickup & Delivery", desc: "Free pickup & delivery anywhere in Tirupur." },
            { icon: <CheckCircle size={42} />, title: "High-End Device Repair", desc: "Specialized repairs for iPhones, MacBooks, Gaming laptops." },
          ].map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-yellow-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-20 py-20 bg-white text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Find Us on Google Maps</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Visit Fenix Gadgets Care at our service center in Tirupur.</p>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.990000000000!2d77.3545000000!3d11.1084000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9070e00000000%3A0x0000000000000000!2sFenix%20Gadgets%20Care!5e0!3m2!1sen!2sin!4v1700000000001"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex justify-center gap-8 mb-12 text-4xl">
          <a href="#" className="text-pink-600 hover:scale-110 transition"><Instagram size={40} /></a>
          <a href="#" className="text-red-600 hover:scale-110 transition"><Youtube size={40} /></a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black text-center rounded-t-3xl">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Need a Fast & Reliable Gadget Repair?</h2>
        <p className="text-lg lg:text-2xl mb-8">We fix it with care — like it's our own.</p>
        <a href="tel:+919566886679" className="bg-black text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-gray-800 transition">Call Now: 9566886679</a>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919566886679?text=Hi%20Fenix%20Gadgets%20Care%2C%20I%20need%20to%20repair%20my%20device.%0AName%3A%20_____%0ADevice%20Model%3A%20_____%0AIssue%3A%20_____%0ALocation%3A%20_____%0APickup%20Required%3A%20Yes%2FNo" target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl text-3xl hover:scale-110 transition z-50">📱</a>
    </div>
  );
}
