import { useState } from 'react';
import Icon from '@/components/ui/icon';

const WEDDING_IMAGE = "https://cdn.poehali.dev/projects/b55cc559-54fe-4b88-a451-d159e4b0c3f0/files/d1b44297-9f43-46cc-9815-4e3bd3788d76.jpg";

export default function Index() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) setSent(true);
  };

  return (
    <div className="min-h-screen bg-wedding-ivory font-cormorant">

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${WEDDING_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-wedding-ivory/72" />
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-8">
            Дорогой Гость!
          </p>
          <h1 className="text-6xl md:text-8xl font-light text-wedding-charcoal leading-none mb-2">
            Свадьба
          </h1>
          <div className="flex items-center justify-center gap-6 my-5">
            <div className="h-px w-16 bg-wedding-gold" />
            <span className="text-wedding-gold text-4xl italic font-light">Love</span>
            <div className="h-px w-16 bg-wedding-gold" />
          </div>
          <p className="text-xl font-light text-wedding-gray italic mb-8 leading-relaxed max-w-md mx-auto">
            Там, где посеяна любовь, растёт радость!
          </p>
          <p className="font-montserrat text-xs tracking-[0.3em] text-wedding-gray uppercase">
            19 апреля 2026 · Воровского 43а
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-wedding-gold" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-10">
            Приглашение
          </p>
          <p className="text-2xl font-light text-wedding-charcoal leading-relaxed mb-6">
            Мы рады сообщить Вам, что <span className="italic">19 апреля 2026 года</span> состоится самое главное торжество в нашей жизни — день нашей свадьбы!
          </p>
          <p className="text-xl font-light text-wedding-gray leading-relaxed">
            Приглашаем Вас разделить с нами радость этого незабываемого дня.
          </p>
          <div className="h-px w-16 bg-wedding-gold mx-auto mt-12" />
        </div>
      </section>

      {/* Date & Time */}
      <section className="py-16 px-6 bg-wedding-cream">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-10">
            Дата и время
          </p>
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10">
            <div className="border-r border-wedding-border">
              <div className="text-5xl md:text-6xl font-light text-wedding-charcoal mb-2">19</div>
              <div className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase">Апреля</div>
            </div>
            <div className="border-r border-wedding-border">
              <div className="text-5xl md:text-6xl font-light text-wedding-charcoal mb-2">2026</div>
              <div className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase">Года</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light text-wedding-charcoal mb-2">10:00</div>
              <div className="font-montserrat text-xs tracking-widest text-wedding-gray uppercase">Начало</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Icon name="MapPin" size={16} className="text-wedding-gold flex-shrink-0" />
            <p className="font-montserrat text-sm text-wedding-gray">Воровского 43а</p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-4">
              Свадебное расписание
            </p>
            <div className="h-px w-16 bg-wedding-border mx-auto" />
          </div>

          <div className="space-y-0">
            {/* Item 1 */}
            <div className="flex gap-6 items-start pb-12 relative">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-wedding-gold flex items-center justify-center bg-wedding-ivory z-10">
                  <Icon name="Heart" size={16} className="text-wedding-gold" />
                </div>
                <div className="w-px flex-1 bg-wedding-border mt-2 min-h-12" />
              </div>
              <div className="pt-1 pb-8">
                <p className="font-montserrat text-xs tracking-widest text-wedding-gold uppercase mb-1">15:30 · 19.04.2026</p>
                <h3 className="text-2xl font-light text-wedding-charcoal mb-1">Торжественная роспись</h3>
                <p className="font-montserrat text-sm text-wedding-gray">Отделение ЗАГС · Румянцева 33</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-wedding-gold flex items-center justify-center bg-wedding-ivory z-10">
                  <Icon name="Wine" size={16} className="text-wedding-gold" />
                </div>
              </div>
              <div className="pt-1">
                <p className="font-montserrat text-xs tracking-widest text-wedding-gold uppercase mb-1">17:00 · 19.04.2026</p>
                <h3 className="text-2xl font-light text-wedding-charcoal mb-1">Банкет</h3>
                <p className="font-montserrat text-sm text-wedding-gray">Банкетный зал · Воровского 43а</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-24 px-6 bg-wedding-cream">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold uppercase mb-4">
              Пожелания по подаркам
            </p>
          </div>
          <div className="border border-wedding-border p-10 md:p-14 text-center">
            <div className="w-12 h-12 rounded-full border border-wedding-gold flex items-center justify-center mx-auto mb-8">
              <Icon name="Gift" size={20} className="text-wedding-gold" />
            </div>
            <p className="text-2xl font-light text-wedding-charcoal leading-relaxed mb-6">
              Ваше присутствие в день нашей свадьбы — самый значимый подарок для нас!
            </p>
            <div className="h-px w-10 bg-wedding-border mx-auto my-8" />
            <p className="font-montserrat text-sm text-wedding-gray leading-relaxed mb-4">
              Мы понимаем, что дарить цветы на свадьбу — это традиция, но мы не сможем насладиться их красотой в полной мере...
            </p>
            <p className="font-montserrat text-sm text-wedding-charcoal">
              Будем рады любой другой альтернативе:{' '}
              <span className="italic text-wedding-gold">вино или в денежном эквиваленте.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-10 h-10 rounded-full border border-wedding-border flex items-center justify-center mx-auto mb-6">
            <Icon name="Info" size={16} className="text-wedding-gray" />
          </div>
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gray uppercase mb-6">
            Примечание
          </p>
          <p className="text-xl font-light text-wedding-charcoal leading-relaxed italic">
            Будем благодарны, если вы воздержитесь от криков «Горько» на празднике, ведь поцелуй — это знак выражения чувств, он не может быть по заказу.
          </p>
        </div>
      </section>

      {/* RSVP + Message */}
      <section className="py-28 px-6 bg-wedding-charcoal text-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gold-light uppercase mb-6">
            Подтверждение присутствия
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
            Ждём вас на свадьбе!
          </h2>
          <p className="font-montserrat text-sm text-white/50 mb-12">
            Пожалуйста, подтвердите своё присутствие до{' '}
            <span className="text-wedding-gold-light">19 апреля 2026</span>
          </p>

          {sent ? (
            <div className="border border-wedding-gold/30 p-10 text-center">
              <Icon name="Check" size={32} className="text-wedding-gold mx-auto mb-4" />
              <p className="text-2xl font-light mb-2">Спасибо!</p>
              <p className="font-montserrat text-sm text-white/50">Мы рады, что вы будете с нами</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-8 max-w-sm mx-auto mb-12">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-montserrat text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-gold transition-colors"
                />
                <input
                  type="text"
                  placeholder="Количество гостей"
                  value={guests}
                  onChange={e => setGuests(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-montserrat text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-gold transition-colors"
                />
                <textarea
                  placeholder="Добавить сообщение для жениха и невесты..."
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-montserrat text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-gold transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="font-montserrat text-xs tracking-[0.3em] uppercase border border-wedding-gold text-wedding-gold px-12 py-4 hover:bg-wedding-gold hover:text-wedding-charcoal transition-all duration-300"
              >
                Подтверждаю присутствие
              </button>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-wedding-ivory text-center border-t border-wedding-border">
        <p className="text-4xl font-light italic text-wedding-charcoal mb-3">Love</p>
        <p className="font-montserrat text-xs tracking-[0.4em] text-wedding-gray uppercase">
          19 · 04 · 2026
        </p>
      </footer>
    </div>
  );
}
