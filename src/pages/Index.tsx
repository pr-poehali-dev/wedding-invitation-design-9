import Icon from '@/components/ui/icon';

const WEDDING_IMAGE = "https://cdn.poehali.dev/projects/b55cc559-54fe-4b88-a451-d159e4b0c3f0/files/d1b44297-9f43-46cc-9815-4e3bd3788d76.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-wedding-ivory font-cormorant">

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${WEDDING_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-wedding-ivory/70" />
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-6">
            Мы приглашаем вас на нашу свадьбу
          </p>
          <h1 className="text-7xl md:text-9xl font-light text-wedding-charcoal leading-none mb-2">
            Александр
          </h1>
          <div className="flex items-center justify-center gap-6 my-4">
            <div className="h-px w-20 bg-wedding-gold" />
            <span className="text-wedding-gold text-3xl font-light italic">&amp;</span>
            <div className="h-px w-20 bg-wedding-gold" />
          </div>
          <h1 className="text-7xl md:text-9xl font-light text-wedding-charcoal leading-none mb-10">
            Екатерина
          </h1>
          <p className="font-montserrat text-xs tracking-[0.3em] text-wedding-gray uppercase">
            12 июля 2025 года · Москва
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-wedding-gold" />
        </div>
      </section>

      {/* Date & Time */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-10">
            Дата и время
          </p>
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="border-r border-wedding-border pr-8">
              <div className="text-6xl font-light text-wedding-charcoal mb-2">12</div>
              <div className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase">Июля</div>
            </div>
            <div className="border-r border-wedding-border pr-8">
              <div className="text-6xl font-light text-wedding-charcoal mb-2">2025</div>
              <div className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase">Года</div>
            </div>
            <div>
              <div className="text-6xl font-light text-wedding-charcoal mb-2">15:00</div>
              <div className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase">Начало</div>
            </div>
          </div>
          <div className="h-px w-16 bg-wedding-gold mx-auto" />
        </div>
      </section>

      {/* Venue */}
      <section className="py-20 px-6 bg-wedding-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-4">
              Место проведения
            </p>
            <h2 className="text-5xl font-light text-wedding-charcoal mb-6">
              Загородный клуб «Усадьба»
            </h2>
            <p className="font-montserrat text-sm text-wedding-gray leading-relaxed">
              Московская область, Рублёвское шоссе, 45 км
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <Icon name="MapPin" size={18} className="text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase mb-1">Адрес</p>
                  <p className="text-xl font-light text-wedding-charcoal">
                    Московская область,<br />
                    Рублёвское шоссе, 45 км,<br />
                    с. Николина Гора
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <Icon name="Car" size={18} className="text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase mb-1">На автомобиле</p>
                  <p className="text-lg font-light text-wedding-charcoal leading-relaxed">
                    По Новорижскому шоссе, съезд на Рублёвку
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Bus" size={18} className="text-wedding-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase mb-1">Трансфер</p>
                  <p className="text-lg font-light text-wedding-charcoal leading-relaxed">
                    Автобус от ст. м. Кунцевская в 14:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-wedding-border/40 rounded-sm overflow-hidden aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <Icon name="Map" size={40} className="text-wedding-gold mx-auto mb-4" />
                <p className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase mb-4">
                  Схема проезда
                </p>
                <a
                  href="https://maps.yandex.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-montserrat text-xs tracking-widest text-wedding-gold uppercase border-b border-wedding-gold pb-0.5 hover:text-wedding-charcoal hover:border-wedding-charcoal transition-colors"
                >
                  Открыть на карте →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banquet & Menu */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-4">
              Банкет
            </p>
            <h2 className="text-5xl font-light text-wedding-charcoal mb-6">
              Ресторан «Белая зала»
            </h2>
            <p className="font-montserrat text-sm text-wedding-gray">
              Начало банкета в 18:00 · Живая музыка · Танцевальный вечер
            </p>
          </div>

          <div className="h-px w-full bg-wedding-border mb-16" />

          <div className="text-center mb-12">
            <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase">
              Меню вечера
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-10 h-10 rounded-full border border-wedding-gold flex items-center justify-center mx-auto mb-5">
                <Icon name="Salad" size={18} className="text-wedding-gold" />
              </div>
              <p className="font-montserrat text-xs tracking-widest text-wedding-gold uppercase mb-5">Закуски</p>
              <ul className="space-y-2 text-lg font-light text-wedding-charcoal">
                <li>Тартар из лосося</li>
                <li>Крем-суп из трюфеля</li>
                <li>Брускетты ассорти</li>
                <li>Сезонные салаты</li>
              </ul>
            </div>

            <div>
              <div className="w-10 h-10 rounded-full border border-wedding-gold flex items-center justify-center mx-auto mb-5">
                <Icon name="UtensilsCrossed" size={18} className="text-wedding-gold" />
              </div>
              <p className="font-montserrat text-xs tracking-widest text-wedding-gold uppercase mb-5">Горячее</p>
              <ul className="space-y-2 text-lg font-light text-wedding-charcoal">
                <li>Говядина веллингтон</li>
                <li>Лосось в соусе</li>
                <li>Ризотто с грибами</li>
                <li>Сезонные гарниры</li>
              </ul>
            </div>

            <div>
              <div className="w-10 h-10 rounded-full border border-wedding-gold flex items-center justify-center mx-auto mb-5">
                <Icon name="Cake" size={18} className="text-wedding-gold" />
              </div>
              <p className="font-montserrat text-xs tracking-widest text-wedding-gold uppercase mb-5">Десерты</p>
              <ul className="space-y-2 text-lg font-light text-wedding-charcoal">
                <li>Свадебный торт</li>
                <li>Макаруны ассорти</li>
                <li>Чизкейк с ягодами</li>
                <li>Кэнди-бар</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-28 px-6 bg-wedding-charcoal text-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold-light uppercase mb-6">
            Подтверждение присутствия
          </p>
          <h2 className="text-5xl font-light mb-6 leading-tight">
            Будете ли вы на нашем празднике?
          </h2>
          <p className="font-montserrat text-sm text-white/50 mb-12 leading-relaxed">
            Пожалуйста, подтвердите своё присутствие<br />
            до <span className="text-wedding-gold-light">1 июля 2025 года</span>
          </p>

          <div className="flex flex-col gap-8 max-w-sm mx-auto mb-12">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full bg-transparent border-b border-white/20 pb-3 font-montserrat text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-gold transition-colors"
            />
            <input
              type="text"
              placeholder="Количество гостей"
              className="w-full bg-transparent border-b border-white/20 pb-3 font-montserrat text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-gold transition-colors"
            />
            <textarea
              placeholder="Пожелания / диетические предпочтения"
              rows={3}
              className="w-full bg-transparent border-b border-white/20 pb-3 font-montserrat text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-gold transition-colors resize-none"
            />
          </div>

          <button className="font-montserrat text-xs tracking-[0.3em] uppercase border border-wedding-gold text-wedding-gold px-12 py-4 hover:bg-wedding-gold hover:text-wedding-charcoal transition-all duration-300">
            Подтверждаю присутствие
          </button>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-24 px-6 bg-wedding-cream">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-10">
            Контакты
          </p>
          <h2 className="text-4xl font-light text-wedding-charcoal mb-12">
            Есть вопросы? Напишите нам
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-wedding-gold flex items-center justify-center">
                <Icon name="Phone" size={18} className="text-wedding-gold" />
              </div>
              <p className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase">Телефон</p>
              <a href="tel:+79001234567" className="text-2xl font-light text-wedding-charcoal hover:text-wedding-gold transition-colors">
                +7 (900) 123-45-67
              </a>
              <p className="font-montserrat text-xs text-wedding-gray">Александр</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-wedding-gold flex items-center justify-center">
                <Icon name="Mail" size={18} className="text-wedding-gold" />
              </div>
              <p className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase">Email</p>
              <a href="mailto:our@wedding.ru" className="text-2xl font-light text-wedding-charcoal hover:text-wedding-gold transition-colors">
                our@wedding.ru
              </a>
              <p className="font-montserrat text-xs text-wedding-gray">Екатерина</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-wedding-ivory text-center border-t border-wedding-border">
        <p className="text-4xl font-light italic text-wedding-charcoal mb-3">А &amp; Е</p>
        <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gray uppercase">
          12 · 07 · 2025
        </p>
      </footer>
    </div>
  );
}
