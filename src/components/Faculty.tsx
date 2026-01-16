import { ExternalLink } from "lucide-react";
import deboraImg from "@/assets/debora.avif";
import mauricioImg from "@/assets/mauricio.avif";
import veraImg from "@/assets/vera.avif";
import sergioImg from "@/assets/sergio.avif";
import paolaImg from "@/assets/paola.avif";
const professors = [{
  name: "Doutora Débora Maria Moreno Luzia",
  image: deboraImg,
  lattesUrl: "http://lattes.cnpq.br/"
}, {
  name: "Mestre Maurício Ricardo Soares",
  image: mauricioImg,
  lattesUrl: "http://lattes.cnpq.br/"
}, {
  name: "Doutora Vera Lúcia da Silva Farias",
  image: veraImg,
  lattesUrl: "http://lattes.cnpq.br/"
}, {
  name: "Mestre Sérgio Ferreira da Silva",
  image: sergioImg,
  lattesUrl: "http://lattes.cnpq.br/"
}, {
  name: "Mestra Paola Marie Vitaca Rodrigues",
  image: paolaImg,
  lattesUrl: "http://lattes.cnpq.br/"
}];
const Faculty = () => {
  return <section className="relative overflow-hidden pt-12 pb-16 md:pt-24 md:pb-32 bg-gradient-to-t from-[hsl(230,75%,10%)] via-[hsl(215,70%,40%)] via-[70%] to-[hsl(213,97%,55%)]">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-10 md:h-16 lg:h-20 rotate-180">
        
      </div>

      {/* Overlay */}
      

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              CORPO DOCENTE DE EXCELÊNCIA
            </h2>
            <p className="text-white/80 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
              Nosso corpo docente é formado por professores mestres e doutores com ampla experiência acadêmica e profissional, 
              garantindo uma formação de qualidade que conecta teoria e prática do mercado de trabalho.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {professors.map((professor, index) => <a key={index} href={professor.lattesUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center cursor-pointer group">
                <div className="relative mb-3 md:mb-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img src={professor.image} alt={professor.name} className="w-full h-40 md:h-56 lg:h-64 object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base lg:text-lg mb-1 leading-tight group-hover:scale-105 transition-transform duration-300">
                  {professor.name}
                </h3>
                <span className="flex items-center gap-1 text-blue-400 text-xs md:text-sm font-medium underline underline-offset-2 group-hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  Currículo Lattes
                </span>
              </a>)}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1E2842" />
        </svg>
      </div>
    </section>;
};
export default Faculty;