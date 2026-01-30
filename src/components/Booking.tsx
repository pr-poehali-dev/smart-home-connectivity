import { Button } from "@/components/ui/button"

export function Booking() {
  const handleCalendlyClick = () => {
    // In production, this would open Calendly widget or redirect to Calendly
    window.open("https://calendly.com", "_blank")
  }

  const handlePaymentClick = () => {
    // In production, this would redirect to Stripe checkout
    alert("Переход к безопасной оплате...")
    window.open("https://stripe.com", "_blank")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Оставьте заявку</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Бесплатная консультация и выезд мастера</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Оставьте заявку или позвоните нам. Мы приедем в удобное время и оценим объем работ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calendar Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Форма заявки</h3>
            <div className="bg-muted/50 rounded-lg p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                  <input type="text" className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground" placeholder="Иван" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                  <input type="tel" className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground" placeholder="+7 (912) 345-67-89" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Тип работ</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground">
                    <option>Монтаж электропроводки</option>
                    <option>Установка щитка</option>
                    <option>Ремонт электрики</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Комментарий</label>
                  <textarea className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground" rows={3} placeholder="Опишите вашу задачу"></textarea>
                </div>
                <Button
                  type="submit"
                  className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Контакты</h3>
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-foreground">Телефон</p>
                      <a href="tel:+73432345678" className="text-accent hover:underline">+7 (343) 234-56-78</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@elektro-ekb.ru" className="text-accent hover:underline">info@elektro-ekb.ru</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-foreground">Город</p>
                      <p className="text-muted-foreground">Екатеринбург</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">График работы</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Пн-Пт:</span>
                    <span className="font-semibold text-foreground">8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сб-Вс:</span>
                    <span className="font-semibold text-foreground">9:00 - 18:00</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                ✓ Бесплатный выезд • ✓ Консультация • ✓ Смета за 1 час
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}