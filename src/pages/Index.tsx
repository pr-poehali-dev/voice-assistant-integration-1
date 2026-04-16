export default function Index() {
  const skills = [
    { name: "HTML/CSS", level: 98, icon: "🎨" },
    { name: "JavaScript", level: 95, icon: "⚡" },
    { name: "React", level: 92, icon: "⚛️" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Figma", level: 80, icon: "✏️" },
  ];

  const projects = [
    {
      title: "E-commerce Soufflé",
      desc: "Интернет-магазин на Next.js + Stripe. Поднялся за 12 недель.",
      tag: "Fullstack",
      emoji: "🛍️",
    },
    {
      title: "SaaS Карпаччо",
      desc: "Дашборд аналитики с real-time данными и D3.js графиками.",
      tag: "Frontend",
      emoji: "📊",
    },
    {
      title: "API Бульон",
      desc: "REST API на FastAPI + PostgreSQL для 50k пользователей.",
      tag: "Backend",
      emoji: "⚙️",
    },
    {
      title: "Mobile Тирамису",
      desc: "React Native приложение для доставки. 4.9 ★ в App Store.",
      tag: "Mobile",
      emoji: "📱",
    },
  ];

  const reviews = [
    {
      name: "Антуан Дюпон",
      role: "CEO, TechBistro Paris",
      text: "Сайт загружается быстрее, чем я успеваю открыть меню. Шеф знает своё дело.",
      stars: "★★★★★",
      avatar: "👨‍💼",
    },
    {
      name: "Мария Рознер",
      role: "Founder, DataSauce",
      text: "Заказала «Мишленовский стек» — получила произведение искусства. Клиенты в восторге.",
      stars: "★★★★★",
      avatar: "👩‍💼",
    },
    {
      name: "Кирилл Вебер",
      role: "CTO, CloudKitchen",
      text: "Другие разработчики дают фастфуд. Этот шеф готовит на медленном огне — и это чувствуется.",
      stars: "★★★★★",
      avatar: "🧑‍💼",
    },
  ];

  return (
    <div className="chef-site">
      <div className="grain-overlay" />

      {/* HEADER */}
      <header className="chef-header">
        <div className="chef-logo">
          <span className="logo-icon">👨‍🍳</span>
          <span>CHEF.DEV</span>
        </div>
        <nav className="chef-nav">
          <a href="#menu">Меню услуг</a>
          <a href="#skills">Ингредиенты</a>
          <a href="#portfolio">Блюда</a>
          <a href="#reviews">Рецензии</a>
        </nav>
        <a href="#contact" className="chef-btn chef-btn-accent">
          🍽️ Забронировать
        </a>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">⭐ Мишлен 3 звезды · с 2018 года</div>
          <h1 className="hero-title">
            Готовим ваш{" "}
            <span className="hero-highlight">React</span>
            <br />
            на медленном{" "}
            <span className="hero-italic">огне</span>
          </h1>
          <p className="hero-sub">
            Шеф-повар Fullstack-разработки · Высокая кухня встречает чистый код
          </p>
          <div className="hero-code-snippet">
            <span className="code-comment">// рецепт идеального продукта</span>
            <br />
            <span className="code-keyword">const</span>{" "}
            <span className="code-var">project</span>{" "}
            <span className="code-op">=</span>{" "}
            <span className="code-fn">cook</span>
            <span>(</span>
            <span className="code-str">"идея"</span>
            <span>).</span>
            <span className="code-fn">serve</span>
            <span className="code-str">("горячим"</span>
            <span>);</span>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="chef-btn chef-btn-primary">
              🍴 Забронировать дегустацию кода
            </a>
            <a href="#portfolio" className="chef-btn chef-btn-outline">
              📋 Смотреть меню
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.poehali.dev/projects/3d0a1fec-0e40-427a-8009-2dd43c163671/files/0df003c4-9b2f-4fd6-8cc5-2fb6ca777765.jpg"
            alt="Шеф-повар за кодом"
          />
          <div className="hero-sticker">
            FRESH
            <br />
            CODE
            <br />
            DAILY
          </div>
          <div className="floating-badge badge-1">⌨️ 10k строк/день</div>
          <div className="floating-badge badge-2">🔥 100% чистый код</div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="chef-marquee">
        <div className="marquee-track">
          &nbsp;★ FULLSTACK ★ REACT ★ NODE.JS ★ PYTHON ★ POSTGRESQL ★ FIGMA ★
          ЧИСТЫЙ КОД ★ БЫСТРЫЕ САЙТЫ ★ FULLSTACK ★ REACT ★ NODE.JS ★ PYTHON ★
          POSTGRESQL ★ FIGMA ★ ЧИСТЫЙ КОД ★ БЫСТРЫЕ САЙТЫ
        </div>
      </div>

      {/* SERVICES — «Блюда из меню» */}
      <section id="menu" className="section-wrap">
        <div className="section-head">
          <h2 className="section-title">
            Блюда из <span>меню</span>
          </h2>
          <p className="section-sub">Каждый проект — авторский рецепт</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-emoji">🍝</div>
            <div className="service-tag">Backend</div>
            <h3>Спагетти из PHP с фрикадельками API</h3>
            <p>
              Серверная логика любой сложности. REST и GraphQL API, базы данных,
              авторизация, очереди — всё на вилке.
            </p>
            <div className="service-price">от 80 000 ₽</div>
          </div>
          <div className="service-card service-card-featured">
            <div className="service-emoji">🥩</div>
            <div className="service-tag tag-red">Frontend</div>
            <h3>Тартар из анимаций на чистом CSS</h3>
            <p>
              Интерфейсы, от которых захватывает дух. Микроанимации, плавные
              переходы, pixel-perfect по макету.
            </p>
            <div className="service-price">от 60 000 ₽</div>
          </div>
          <div className="service-card">
            <div className="service-emoji">🌟</div>
            <div className="service-tag tag-green">Fullstack</div>
            <h3>Мишленовский стек MERN</h3>
            <p>
              Полноценный продукт от идеи до деплоя. MongoDB, Express, React,
              Node.js — дегустационное меню.
            </p>
            <div className="service-price">от 150 000 ₽</div>
          </div>
        </div>
      </section>

      {/* SKILLS — «Секретный ингредиент» */}
      <section id="skills" className="section-wrap skills-section">
        <div className="section-head">
          <h2 className="section-title">
            Секретный <span>ингредиент</span>
          </h2>
          <p className="section-sub">Температура мастерства</p>
        </div>
        <div className="skills-layout">
          <div className="skills-bars">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-label">
                  <span>
                    {skill.icon} {skill.name}
                  </span>
                  <span className="skill-temp">{skill.level}°C</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                  <div className="skill-thermometer" />
                </div>
              </div>
            ))}
          </div>
          <div className="skills-quote">
            <div className="quote-card">
              <div className="quote-icon">👨‍🍳</div>
              <blockquote>
                «Хороший код, как хороший соус — долго томится, но потом
                пальчики оближешь»
              </blockquote>
              <cite>— Шеф-повар, 6 лет на кухне</cite>
              <div className="quote-stats">
                <div className="stat">
                  <strong>120+</strong>
                  <span>проектов</span>
                </div>
                <div className="stat">
                  <strong>98%</strong>
                  <span>довольных</span>
                </div>
                <div className="stat">
                  <strong>6 лет</strong>
                  <span>стажа</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO — «Фирменные блюда» */}
      <section id="portfolio" className="section-wrap">
        <div className="section-head">
          <h2 className="section-title">
            Фирменные <span>блюда</span>
          </h2>
          <p className="section-sub">Из нашей кулинарной книги</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <div key={p.title} className="portfolio-card">
              <div className="portfolio-img">
                <span className="portfolio-emoji">{p.emoji}</span>
                <div className="portfolio-overlay">
                  <button className="chef-btn chef-btn-sm">🔍 Посмотреть</button>
                </div>
              </div>
              <div className="portfolio-body">
                <span className="portfolio-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS — «Рецензии Мишлен» */}
      <section id="reviews" className="section-wrap reviews-section">
        <div className="section-head">
          <h2 className="section-title">
            Рецензии <span>Мишлен</span>
          </h2>
          <p className="section-sub">Что говорят наши гости</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <div className="review-stars">{r.stars}</div>
              <p className="review-text">«{r.text}»</p>
              <div className="review-author">
                <span className="review-avatar">{r.avatar}</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="chef-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="chef-logo">
              <span className="logo-icon">👨‍🍳</span>
              <span>CHEF.DEV</span>
            </div>
            <p>Высокая кухня встречает чистый код. С 2018 года.</p>
          </div>
          <div className="footer-cta">
            <h3>Готовы заказать?</h3>
            <p>Оставьте заявку — обсудим рецепт вашего проекта</p>
            <a href="mailto:chef@dev.com" className="chef-btn chef-btn-primary footer-order-btn">
              🚀 Заказать доставку кода
            </a>
          </div>
          <div className="footer-links">
            <h4>Контакты</h4>
            <a href="#">📧 chef@dev.com</a>
            <a href="#">💬 Telegram</a>
            <a href="#">🐙 GitHub</a>
            <a href="#">💼 LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Chef.Dev · Все рецепты защищены</span>
          <span>Сделано с 🔥 и ☕</span>
        </div>
      </footer>
    </div>
  );
}
