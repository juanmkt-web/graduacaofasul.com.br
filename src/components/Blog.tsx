import { Eye, MessageSquare, Heart } from "lucide-react";
import blog1Img from "@/assets/blog-1.webp";
import blog2Img from "@/assets/blog-2.webp";
import blog3Img from "@/assets/blog-3.webp";
import blog4Img from "@/assets/blog-4.webp";

const blogPosts = [
  {
    image: blog1Img,
    author: "Profª. Maria Santos",
    date: "26 de dez. de 2025 · 8 min de leitura",
    title: "Como escolher a pós-graduação ideal para sua carreira",
    views: 6821,
    comments: 0,
    likes: 418,
    url: "#"
  },
  {
    image: blog2Img,
    author: "Prof. Carlos Lima",
    date: "20 de dez. de 2025 · 5 min de leitura",
    title: "Tendências do mercado financeiro para 2026",
    views: 4532,
    comments: 12,
    likes: 256,
    url: "#"
  },
  {
    image: blog3Img,
    author: "Profª. Ana Paula",
    date: "15 de dez. de 2025 · 6 min de leitura",
    title: "Gestão de pessoas: habilidades essenciais",
    views: 3890,
    comments: 8,
    likes: 189,
    url: "#"
  },
  {
    image: blog4Img,
    author: "Prof. Ricardo Alves",
    date: "10 de dez. de 2025 · 7 min de leitura",
    title: "Marketing digital: estratégias que funcionam",
    views: 5124,
    comments: 15,
    likes: 302,
    url: "#"
  }
];

const Blog = () => {
  return (
    <section className="relative pt-5 pb-32 bg-[#1E2842]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            BLOG DE INFORMAÇÕES
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Dicas de carreira, tendências de mercado e conteúdos exclusivos para impulsionar seu desenvolvimento profissional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 block"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  {/* Author */}
                  <div className="text-white">
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-white/90">{post.date}</p>
                  </div>

                  {/* Footer */}
                  <div>
                    <h3 className="text-white font-semibold text-sm leading-tight mb-4">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white text-xs">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-white text-xs">
                        <Heart className="w-4 h-4 text-red-400" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Blog;
