export function Benefits() {
  const benefits = [
    {
      icon: "⚡",
      title: "Полный спектр услуг",
      description: "Проектирование, монтаж, пуско-наладка, ремонт электропроводки",
    },
    {
      icon: "⏰",
      title: "Быстрый выезд",
      description: "Приезжаем в удобное для вас время, в том числе в выходные",
    },
    {
      icon: "🛡️",
      title: "Гарантия качества",
      description: "Официальная гарантия на все виды работ до 3 лет",
    },
    {
      icon: "🎯",
      title: "Лицензированные специалисты",
      description: "Все мастера имеют допуски и сертификаты к работе",
    },
    {
      icon: "💰",
      title: "Прозрачные цены",
      description: "Бесплатный выезд и оценка, никаких скрытых платежей",
    },
    {
      icon: "📝",
      title: "Договор и документы",
      description: "Оформляем все документы, акты выполненных работ",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему мы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Наши преимущества
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Комплексный подход к электромонтажным работам в Екатеринбурге
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}