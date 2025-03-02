"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from './components/Footer';
import React from "react";

// Video önizleme bileşeni
const VideoPreview = ({ videoId }: { videoId: string }) => {
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100 cursor-pointer group"
      onClick={handleClick}
    >
      {/* YouTube thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Video thumbnail"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-[#698f60]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Proje tipini güncelle
interface Project {
  title: string;
  description: string;
  videoId: string;
  techStack: string[];
  link: string;
}

// Projeleri güncelle
const projects: Project[] = [
  {
    "title": "Prompt Okulu",
    "description": "Prompt Okulu, farklı meslek gruplarına, çocuklara ve diğer kullanıcılara prompt yazmayı öğreten interaktif bir platformdur. Projede Next.js, MongoDB ve TypeScript kullanıldı. Sorular ve öğrenme içerikleri, yapay zeka desteğiyle oluşturularak kullanıcıların en iyi şekilde öğrenmesi hedeflendi.",
    "videoId": "B5oJ46l6oww", // YouTube video ID'si
    "techStack": ["Next.js", "MongoDB", "TypeScript", "OpenAI API"],
    "link": "https://prompt-okulu.vercel.app/"
  },
  {
    "title": "Level Asistan",
    "description": "Level Dergisi Arşivi İçin Geliştirilmiş Yapay Zeka Asistan Projesi. Projede, Level dergisinin 300 sayılık tam arşivi kullanılarak, dergiye dair kullanıcı sorularını yanıtlayan ve verdiği yanıtlarda ilgili dergi sayfalarını kaynak olarak gösteren bir yapay zeka asistanı geliştirildi. Kullanıcı deneyimi, soru-cevap yöntemiyle içerik keşfi ve oyunlaştırma sistemi (başarı rozetleri ve kişisel koleksiyonlar oluşturma) üzerine kurulu. Sistem modüler yapıda tasarlanarak, benzer yapıdaki diğer yayınlara kolayca entegre edilebilecek şekilde geliştirildi. Proje tam çalışır durumda olup, demo videosu mevcuttur.",
    "videoId": "rff1H58f-Mo",
    "techStack": ["Next.js", "OpenAI", "Amazon S3", "MongoDB", "Google Auth"],
    "link": "https://github.com/aybarsayan/level-ui"
  },
  {
    "title": "web3ogren",
    "description": "web3ogren, Türkiye'nin en büyük dökümantasyon platformu olarak aylık 100 bin tıklama ve günlük 1500 unique kullanıcıya ulaşmaktadır. Yazılım bilimlerini öğreten, yapay zeka yardımıyla oluşturulmuş içeriklere sahip olan platform, özel geliştirilmiş yapay zeka çeviri botu sayesinde mevcut siteleri çok yönlü geliştirip çevirerek sisteme entegre etmektedir. Tüm bu özellikler tamamen benim tarafımdan geliştirildi.",
    "videoId": "P8eGBDslis4",
    "techStack": ["Docusaurus", "OpenAI", "Netlify", "React", "JavaScript"],
    "link": "https://web3ogren.com"
  },
  {
    "title": "Ai4Sports Analiz Platformu",
    "description": "Ai4Sports Analiz Platformu, 3 aşamalı bir analiz sistemi sunar. Kullanıcılar, kayıt sırasında araştırmacı, inceleyici veya editör rollerinden birini seçer; her role özel arayüzler sunulur. Araştırmacılar, Google Scholar dökümanları arasından yapay zeka destekli kullanıma uygun belgeleri seçip, puan ve not ekleyerek incelemeye gönderir. İnceleyiciler, ilgili belgeleri arayüz üzerinden okuyup analiz ederek, onaylayacaksa puanlandırıp editöre iletir. Editör ise, RAG sistemi ile kurulmuş veri tabanını kullanarak son kararı verir.",
    "videoId": "QR5kWoILckU",
    "techStack": ["Next.js", "OpenaiAPI", "React-PDF", "Auth", "MongoDB", "AmazonS3"],
    "link": "https://www.aivisiontech.net/coming-soon"
  },
  {
    "title": "Konuşma Oluşturucu AI",
    "description": "Konuşma Oluşturucu AI, kullanıcının önceki konuşmalarını analiz ederek kişiye özel bir konuşma pattern'i oluşturur. Arayüzden seçilen konuşma konusu için alt başlıklar oluşturulur ve Wikipedia'dan ek bilgiler çekilir. Kullanıcı, önceki konuşmalarında yer alan ilgili metinleri de dahil edebilmekte ve eklemek istediği yerlerle birlikte kişiye özgü, hazır bir konuşma metni üretilmektedir.",
    "videoId": "Qc_VbbxrCDg",
    "techStack": ["WikipediaAPI", "OpenAI", "Next.js", "Node.js", "RAG Sistemi"],
    "link": "https://github.com/aybarsayan/konusma-olustur-ai"
  },
  {
    "title": "Ai4Sports-gpt",
    "description": "Aivisiontech için danışmanlık kapsamında geliştirilen bu backend, gelen kas bilgilerine göre RAG sistemini kullanarak, sporcuların spor türüne göre hangi egzersizi yapmaları gerektiğini ve hangisini yapmamaları gerektiğini belirliyor. OpenAI API ve Express kullanılarak oluşturulan bu API, aktif olarak hizmet vermektedir ve JavaScript ile yazılmıştır.",
    "videoId": "NA-r79om9WE",
    "techStack": ["Express", "OpenAI API", "RAG", "JavaScript"],
    "link": "https://www.aivisiontech.net/"
  },  
  {
    "title": "Medaş Hackathon AI Chatbot ile Birincilik",
    "description": "Konya Elektrik Dağıtım Şirketi'nin düzenlediği 6 saatlik Hackathon'da, Medas sistemlerine entegre bir chatbot geliştirdik. Chatbot sayesinde arıza kaydı açma, planlı kesintileri konum bazında görüntüleme, fatura hesaplama ve diğer birçok işlemi gerçekleştirebiliyorsunuz. Proje, 4 kişilik takımımız tarafından sıfırdan hayata geçirildi; ben takım lideri ve ana yazılımcı olarak görev aldım. Sunum sonunda 20 takım arasından 1. seçilerek 60.000 TL ödül kazandık.",
    "videoId": "G6ahnoJVMLE",
    "techStack": ["Telegraf", "Telegram", "OpenAI", "Web Scraping"],
    "link": "https://github.com/aybarsayan/Medas-Chatbot"
  },
  {
    "title": "Blockchain ve DID Teknolojisi ile Uçtan Uca Fiziksel Bağış",
    "description": "Blockchain ve DID teknolojilerini kullanarak uçtan uca fiziksel bağış sürecini şeffaf ve güvenli hale getiren bu sistem, ESP32 mikrodenetleyiciler, React tabanlı arayüz, Vite, Express.js sunucu ve Solidity ile oluşturulan akıllı sözleşmeler ile hayata geçirildi. Bağışçı kimlik doğrulama, gerçek zamanlı bağış takibi, akıllı sözleşme yönetimi ve otomatik envanter kaydı gibi özellikleri içeriyor. Teknofest 2024 Blokzincir Yarışması'nda 300 proje arasından 6. sırada yer alarak önemli bir başarı elde etti.",
    "videoId": "JzJTkJJQPU8",
    "techStack": ["ESP32", "React", "Vite", "Express.js", "Solidity", "Blockchain", "DID"],
    "link": "https://github.com/aybarsayan/End-to-End-Physical-Donations"
  },  
  {
    "title": "Bilgehane",
    "description": "Bilgehane projesinde, test arayüzü oluşturmayı hedefledik. Sistem, RAG sistemi ile entegre yapılar sayesinde, belirli konularda soruları oluştururken doğrudan kaynak kullanabilmekte ve bu kaynaklar sayesinde kaliteli, doğru ve açıklamalı sorular üretebilmektedir. Böylece, açık öğretim gibi soru kaynağı sınırlı alanlarda kendi eğittiğimiz yapay zeka destekli soru üretim sistemi devreye girmektedir.",
    "videoId": "JLRrKm82VnY",
    "techStack": ["PHP", "React", "Openai", "RAG", "QuizBot"],
    "link": "https://bilgehane.com"
  }

];

export default function Home() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#698f60]/5 mix-blend-multiply"></div>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f8f8f8] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8f8f8] to-transparent"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[#698f60] font-medium mb-4 tracking-wide"
                >
                  AI Developer & Full Stack Developer
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-800 text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                  Merhaba, Ben <br />
                  <span className="text-[#698f60]">Aybars</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-700 text-lg mb-8 max-w-md"
                >
                  Modern ve kullanıcı dostu web deneyimleri tasarlıyor ve geliştiriyorum.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-4"
                >
                  <motion.a
                    href="#projects"
                    onClick={scrollToProjects}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#698f60] text-white rounded-none text-sm tracking-wider hover:bg-[#85ab7c] transition-colors uppercase"
                  >
                    Projelerimi Gör
                  </motion.a>
                  <motion.a
                    href="/cv.pdf"
                    download="Aybars_Goktug_AYAN_CV.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-[#698f60] text-[#698f60] rounded-none text-sm tracking-wider 
                      hover:bg-[#698f60] hover:text-white transition-colors uppercase group inline-flex items-center gap-2"
                  >
                    <span>CV'mi İndir</span>
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-y-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" 
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="relative"
              >
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 bg-[#698f60]/10 dark:bg-[#698f60]/20 rounded-lg"></div>
                  <Image
                    src="/foto.jpg"
                    alt="Aybars'ın profil fotoğrafı"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-700">Kaydır</span>
            <motion.div className="w-px h-12 bg-[#698f60]/30"></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Hakkımda Bölümü */}
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#698f60] font-medium tracking-wide mb-8 text-left"
            >
              HAKKIMDA
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.p className="text-gray-700 leading-relaxed text-left">
                  2020 yılında Konya Teknik Üniversitesi Elektrik Elektronik Mühendisliği'ne başladığımdan beri, 
                  yazılım ve teknolojiye olan ilgim sürekli artmıştır. JavaScript ve Python dillerinde uzmanlaşarak, 
                  yapay zeka, derin öğrenme, blokzincir ve bilgisayarlı görü alanlarında çalışmalar yürütmekteyim.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed mt-4 text-left">
                  2021'den beri Berlin merkezli BOTLabs GmbH'de KILT Protocol'ün Geliştirici İlişkileri Asistanı ve 
                  JavaScript Bot Geliştiricisi olarak çalışmaktayım. "Covalent API", "Algorand SDK ve Pyteal ile 
                  Algorand Teknolojileri", "Yarının İnşası" ve "Camino Network" kitaplarını yazdım.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed mt-4 text-left">
                  "web3ogren.com" platformunu kurarak, aylık 100.000 ziyaretçiye ulaşan ücretsiz bir teknoloji 
                  eğitim kaynağı oluşturdum. 2024 yılı başından itibaren AivisionTech firmasına LLM geliştirme 
                  danışmanlığı yaparak, sağlık teknolojilerinde yapay zeka çözümleri geliştirmekte ve bu projeyle 
                  TÜBİTAK 1507 KOBİ Ar-Ge desteği almış bulunmaktayım.
                </motion.p>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-4">Uzmanlık Alanları</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#698f60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Yapay Zeka & Derin Öğrenme</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#698f60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Full Stack Geliştirme</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#698f60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Blokzincir Teknolojileri</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projeler Başlığı */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#698f60] font-medium mb-4 tracking-wide text-center"
          >
            SEÇKİN PROJELER
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16"
          >
            Son Çalışmalarım
          </motion.h2>

          <div className="space-y-32">
            {projects.map((project, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group"
                >
                  <motion.div
                    className={`relative aspect-[16/9] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''
                      }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VideoPreview videoId={project.videoId} />
                  </motion.div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-[#698f60] transition-colors"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-gray-700 mb-8 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    <div className="space-y-4">
                      <h4 className="font-medium text-[#698f60]">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#698f60]/10 text-[#698f60] text-sm rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-8 text-[#698f60] font-medium hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      Projeyi İncele
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
