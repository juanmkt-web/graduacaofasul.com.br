import { Zap, Clock, Calendar, GraduationCap, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Se torne um Especialista em até",
    highlight: "3 meses"
  },
  {
    icon: Clock,
    title: "Certificado emitido em até",
    highlight: "48 horas"
  },
  {
    icon: Calendar,
    title: "Praticidade",
    highlight: "do EAD para estudar no seu ritmo"
  },
  {
    icon: GraduationCap,
    title: "Sem necessidade",
    highlight: "de TCC!"
  }
];

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-card">
          <div className="benefits-inner">
            <div className="benefits-grid">
              {/* Left side - Main Title */}
              <div className="animate-fade-in">
                <h2 className="benefits-title">
                  A PÓS{" "}
                  <span className="benefits-title-highlight">MAIS RÁPIDA</span>
                  <br />
                  DO MERCADO!
                </h2>
                <p className="benefits-description">
                  Se torne um <strong>Especialista em até 3 meses</strong>, além de receber o{" "}
                  <strong>Certificado em apenas 48 horas</strong> após a conclusão do Curso! 
                  Além de ter a praticidade do EAD e curso sem necessidade de TCC!
                </p>
              </div>

              {/* Right side - Benefits List */}
              <div className="benefits-list animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="benefits-item animate-fade-in" 
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="benefits-icon">
                      <benefit.icon />
                    </div>
                    <p className="benefits-item-text">
                      {benefit.title}{" "}
                      <strong>{benefit.highlight}</strong>
                    </p>
                  </div>
                ))}

                <div className="benefits-cta-wrapper">
                  <a 
                    href="https://www.fasuleducacional.edu.br/posgraduacao/cursos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="benefits-cta"
                  >
                    COMECE SUA PÓS AGORA!
                    <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
