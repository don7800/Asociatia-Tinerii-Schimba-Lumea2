import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Plus, Menu, X, Sprout } from 'lucide-react';
import andreiPortrait from './assets/andrei-alexe.jpeg';
import associationLogo from './assets/association-logo.jpeg';
import danPortrait from './assets/dan-bungiu.jpeg';
import karlaPortrait from './assets/karla-simina-anisia.jpeg';
import mirceaPortrait from './assets/mircea-mindirigiu.jpeg';
import paulPortrait from './assets/paul-cristian-radu.jpeg';

const founders = [
  { name: 'Paul Cristian Radu', image: paulPortrait, width: 1366, height: 2048 },
  { name: 'Dan Bungiu', image: danPortrait, width: 1366, height: 2048 },
  { name: 'Mircea Mindirigiu', image: mirceaPortrait, width: 1080, height: 1620 },
  { name: 'Andrei Alexe', image: andreiPortrait, width: 1024, height: 1446 },
  { name: 'Karla Simina Anisia', image: karlaPortrait, width: 1067, height: 1600 },
];

const prompts = [
  { label: 'În jurul meu', text: 'Ce ai vrea să fie puțin mai bine în comunitatea ta?' },
  { label: 'O idee', text: 'Ce idee ai tot amânat, deși încă îți revine în minte?' },
  { label: 'Împreună', text: 'Pe cine ai putea invita să facă primul pas alături de tine?' },
];

const faqs = [
  {
    question: 'Ce este Tinerii Schimbă Lumea?',
    answer:
      'Este o organizație neguvernamentală inițiată de tineri, cu o convingere simplă: ideile tinerilor pot conta și pot deveni un început pentru schimbare pozitivă.',
  },
  {
    question: 'Trebuie să am deja un plan clar?',
    answer:
      'Nu. Poți începe cu o întrebare, cu o problemă pe care o observi sau cu o idee încă neșlefuită. Primul pas nu trebuie să fie perfect.',
  },
  {
    question: 'Cum pot să mă implic?',
    answer:
      'Alege un lucru care ți-ar plăcea să fie diferit, vorbește despre el cu cineva de încredere și gândește un pas mic pe care îl poți încerca. Aici poți explora câteva puncte de pornire.',
  },
  {
    question: 'Cine a fondat organizația?',
    answer:
      'Tinerii Schimbă Lumea a fost fondată de Paul Cristian Radu, Dan Bungiu, Mircea Mindirigiu, Andrei Alexe și Karla Simina Anisia.',
  },
];

function Brand() {
  return (
    <a className="brand" href="#acasa" aria-label="Tinerii Schimbă Lumea — acasă">
      <img className="brand-logo" src={associationLogo} alt="" width="1290" height="1269" />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    const anchorId = decodeURIComponent(window.location.hash.slice(1));
    if (anchorId) {
      requestAnimationFrame(() => {
        document.getElementById(anchorId)?.scrollIntoView({ block: 'start' });
      });
    }
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="acasa">
      <a className="skip-link" href="#continut">Sari la conținut</a>
      <header className="topbar">
        <nav className="wrap nav-inner" aria-label="Navigare principală">
          <Brand />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div id="main-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
            <a href="#despre" onClick={closeMenu}>Despre noi</a>
            <a href="#primul-pas" onClick={closeMenu}>Primul pas</a>
            <a href="#fondatori" onClick={closeMenu}>Fondatori</a>
            <a href="#intrebari" onClick={closeMenu}>Întrebări</a>
            <a className="nav-cta" href="#primul-pas" onClick={closeMenu}>Începe de aici <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main id="continut">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">O idee poate schimba direcția</span>
              <h1 id="hero-title">Schimbarea<br />începe cu <span>tine.</span></h1>
              <p className="hero-lede">
                Tinerii Schimbă Lumea este un loc de pornire pentru tinerii care cred că ideile lor pot face diferența — chiar dacă încă nu știu exact cum.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#primul-pas">Găsește primul pas <ArrowRight size={17} /></a>
                <a className="button button-text" href="#despre">Află cine suntem <ArrowDown size={16} /></a>
              </div>
              <div className="hero-note">Organizație neguvernamentală, inițiată de tineri</div>
            </div>
            <div className="hero-art" aria-label="Colaj artistic cu tineri construind împreună o idee">
              <span className="art-index">T.S.L. / IDEI ÎN MIȘCARE</span>
              <span className="side-note">un început, nu un răspuns final</span>
              <div className="hero-image-wrap">
                <img src={associationLogo} alt="Logo-ul Asociației Tinerii Schimbă Lumea" width="1290" height="1269" />
              </div>
            </div>
          </div>
        </section>

        <section className="manifesto" id="despre" aria-labelledby="manifesto-title">
          <div className="wrap manifesto-grid">
            <span className="eyebrow">De ce existăm</span>
            <blockquote id="manifesto-title" className="reveal">
              Nu trebuie să ai toată lumea în mâini. E suficient să vezi <em>ce ai putea schimba</em> în jurul tău.
            </blockquote>
            <p className="manifesto-foot reveal delay-1">
              Credem în curajul de a pune întrebări, în ideile care cresc prin conversație și în primul pas făcut împreună. Schimbarea nu e doar ceva despre care citești. E ceva la care poți lua parte.
            </p>
          </div>
        </section>

        <section className="belief wrap" aria-labelledby="belief-title">
          <div className="belief-head reveal">
            <div>
              <span className="eyebrow">Felul nostru de a privi lucrurile</span>
              <h2 className="section-title" id="belief-title">O lume mai bună nu începe cu „cineva”.</h2>
            </div>
            <p className="belief-intro">Începe când observi, îți pasă și alegi să nu rămâi doar spectator. Asta e invitația noastră.</p>
          </div>
          <div className="belief-grid">
            <article className="belief-card reveal">
              <span className="card-number">01 / ÎNCREDERE</span>
              <span className="card-symbol" aria-hidden="true">↗</span>
              <div>
                <h3>Ideile tale merită luate în serios.</h3>
                <p>Nu există o vârstă la care începi să contezi. Punctul de vedere al tinerilor are loc în conversația despre viitor.</p>
              </div>
            </article>
            <article className="belief-card reveal delay-1">
              <span className="card-number">02 / CURIOZITATE</span>
              <span className="card-symbol" aria-hidden="true">?</span>
              <div>
                <h3>Întrebările bune deschid uși.</h3>
                <p>Înainte de soluții, merită să înțelegem ce ne dorim să fie diferit și pentru cine.</p>
              </div>
            </article>
            <article className="belief-card reveal delay-2">
              <span className="card-number">03 / ÎMPREUNĂ</span>
              <span className="card-symbol" aria-hidden="true">+</span>
              <div>
                <h3>Schimbarea se construiește în relație.</h3>
                <p>O idee prinde rădăcini când este împărtășită, ascultată și dusă mai departe alături de alții.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="first-step" id="primul-pas" aria-labelledby="step-title">
          <div className="wrap step-layout">
            <div className="step-intro reveal">
              <span className="eyebrow">Nu ai nevoie de un plan perfect</span>
              <h2 className="section-title" id="step-title">Doar de un punct de pornire.</h2>
              <p>Schimbarea poate părea mare de la distanță. Aproape, începe cu o observație, o discuție și un lucru mic pe care îl poți încerca.</p>
            </div>
            <div className="reveal delay-1">
              <div className="step-list">
                <article className="step-item">
                  <span className="step-count">PAS 01</span>
                  <div><h3>Observă ce te mișcă.</h3><p>Ce te bucură, te nedreptățește sau te face să te întrebi „de ce nu e altfel”?</p></div>
                  <span className="step-icon"><ArrowDown size={14} /></span>
                </article>
                <article className="step-item">
                  <span className="step-count">PAS 02</span>
                  <div><h3>Pune ideea în cuvinte.</h3><p>Nu trebuie să sune impresionant. Spune simplu ce ai vrea să fie diferit.</p></div>
                  <span className="step-icon"><ArrowDown size={14} /></span>
                </article>
                <article className="step-item">
                  <span className="step-count">PAS 03</span>
                  <div><h3>Împarte-o cu cineva.</h3><p>O conversație poate aduce o întrebare nouă, o perspectivă sau un om alături.</p></div>
                  <span className="step-icon"><ArrowDown size={14} /></span>
                </article>
                <article className="step-item">
                  <span className="step-count">PAS 04</span>
                  <div><h3>Alege ceva mic și concret.</h3><p>Un prim pas bun e unul pe care îl poți începe, nu unul care trebuie să rezolve totul.</p></div>
                  <span className="step-icon"><ArrowRight size={14} /></span>
                </article>
              </div>
              <div className="prompt-box" aria-live="polite">
                <span className="prompt-label"><Sprout size={15} /> Un gând pentru început</span>
                <p>{prompts[activePrompt].text}</p>
                <div className="prompt-options" aria-label="Alege un punct de pornire">
                  {prompts.map((prompt, index) => (
                    <button
                      key={prompt.label}
                      type="button"
                      aria-pressed={activePrompt === index}
                      onClick={() => setActivePrompt(index)}
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="founders wrap" id="fondatori" aria-labelledby="founders-title">
          <div className="founders-heading reveal">
            <div>
              <span className="eyebrow">Oameni, înainte de toate</span>
              <h2 className="section-title" id="founders-title">Cei care au pus ideea în mișcare.</h2>
            </div>
            <p>Tinerii Schimbă Lumea a fost fondată de cinci oameni care au ales să creadă în puterea inițiativei tinere.</p>
          </div>
          <div className="founder-grid">
            {founders.map(({ name, image, width, height }, index) => (
              <article className="founder reveal" key={name} data-testid={`card-founder-${index + 1}`}>
                <div className="founder-photo">
                  <img
                    src={image}
                    alt={`Portretul lui ${name}`}
                    width={width}
                    height={height}
                    loading="lazy"
                  />
                </div>
                <div className="founder-meta">
                  <span className="founder-role">{index === 4 ? 'Co-fondatoare' : 'Co-fondator'}</span>
                  <h3>{name}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="faq" id="intrebari" aria-labelledby="faq-title">
          <div className="wrap faq-layout">
            <div className="reveal">
              <span className="eyebrow">E firesc să întrebi</span>
              <h2 className="section-title" id="faq-title">Un început, cu răspunsuri.</h2>
              <p className="faq-copy">Nu trebuie să vii cu toate răspunsurile. Începem cu ce știm și lăsăm loc pentru întrebările bune.</p>
            </div>
            <div className="faq-list reveal delay-1">
              {faqs.map((item, index) => (
                <article className="faq-item" key={item.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq((current) => current === index ? null : index)}
                    >
                      {item.question}<Plus size={19} />
                    </button>
                  </h3>
                  {openFaq === index && <p className="faq-answer" id={`faq-answer-${index}`}>{item.answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="wrap reveal">
            <span className="eyebrow">Poate începe chiar acum</span>
            <h2 id="closing-title">Ce ai vrea să schimbi?</h2>
            <p>Nu trebuie să știi încă tot drumul. Începe cu întrebarea care nu-ți dă pace și fă loc unei conversații.</p>
            <a className="button" href="#primul-pas">Găsește-ți punctul de pornire <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <Brand />
          <span className="footer-note">O invitație pentru idei tinere și pași care contează.</span>
          <a className="footer-top" href="#acasa">Înapoi sus ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
