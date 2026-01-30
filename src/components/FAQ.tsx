import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Какие работы вы выполняете?",
      answer:
        "Мы выполняем полный спектр электромонтажных работ: монтаж электропроводки, установка щитков, розеток, выключателей, световых систем, ремонт и пуско-наладка.",
    },
    {
      question: "Сколько стоит выезд мастера?",
      answer:
        "Выезд мастера для оценки и консультации полностью бесплатный по Екатеринбургу и ближним пригородам. После осмотра мы составим смету за 1 час.",
    },
    {
      question: "Как быстро можете приехать?",
      answer:
        "Мы работаем без выходных и можем приехать в удобное для вас время. Обычно можем организовать выезд уже на следующий день после звонка.",
    },
    {
      question: "Даете ли гарантию на работы?",
      answer:
        "Да, мы предоставляем официальную гарантию на все виды работ до 3 лет. Все работы оформляются договором с актами выполненных работ.",
    },
    {
      question: "Работаете ли с юридическими лицами?",
      answer:
        "Да, мы работаем как с частными лицами, так и с компаниями. Предоставляем полный пакет документов для бухгалтерии.",
    },
    {
      question: "Есть ли у вас лицензии?",
      answer:
        "Да, все наши специалисты имеют необходимые допуски и сертификаты для выполнения электромонтажных работ любой сложности. Компания лицензирована.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}