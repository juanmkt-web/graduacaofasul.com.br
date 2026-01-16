import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "A Pós-Graduação é reconhecida e o certificado é válido?",
    answer: "Sim! A FASUL é credenciada pelo MEC com nota máxima (5). Todos os nossos cursos de pós-graduação são reconhecidos nacionalmente e o certificado possui validade em todo o território brasileiro, sendo aceito em concursos públicos, progressão de carreira e processos seletivos."
  },
  {
    question: "Quanto tempo dura o curso de pós-graduação?",
    answer: "A duração varia de acordo com o curso escolhido, mas em média nossos cursos têm duração de 6 a 18 meses. Você pode estudar no seu próprio ritmo, respeitando o prazo mínimo estabelecido pelo MEC."
  },
  {
    question: "Como funciona a metodologia de ensino EaD?",
    answer: "Nossa metodologia é 100% online, com acesso 24 horas à plataforma de estudos. Você terá acesso a videoaulas, materiais complementares, fóruns de discussão e avaliações online. Todo o conteúdo foi desenvolvido por professores mestres e doutores com experiência de mercado."
  },
  {
    question: "Preciso comparecer presencialmente em algum momento?",
    answer: "Não! Todo o curso é realizado de forma online, incluindo as avaliações. Você pode estudar de onde estiver, apenas precisando de acesso à internet."
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Oferecemos diversas formas de pagamento: cartão de crédito (parcelado em até 12x), boleto bancário e PIX. Além disso, temos condições especiais para pagamento à vista."
  },
  {
    question: "Posso fazer mais de uma pós-graduação ao mesmo tempo?",
    answer: "Sim! Com nossa promoção exclusiva, você pode fazer até 4 pós-graduações pelo preço de uma. É uma excelente oportunidade para ampliar seus conhecimentos e se destacar no mercado de trabalho."
  }
];

const FAQ = () => {
  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2842] mb-4">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-gray-600 text-lg">
              Tire suas dúvidas sobre a Pós-Graduação EaD da FASUL
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-blue-600"
              >
                <AccordionTrigger className="text-left font-medium text-base md:text-lg text-[#1E2842] hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
