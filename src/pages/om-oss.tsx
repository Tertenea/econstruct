import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Om Oss</h1>
      <div className="page-content">
        <div className="about-container">
          <section className="about-intro">
            <p className="lead-text">
              Econstruct är en engagerad konstruktionsbyrå. Vårt syfte är att erbjuda våra kunder ekonomiska, ekologiska och hållbara lösningar.
            </p>
          </section>

          <section className="about-founder">
            <h2>Om grundaren</h2>
            <div className="founder-content">
              <div className="founder-image">
                <img src="/images/kristjanh.jpg" alt="Företagets grundare" />
              </div>
              <div className="founder-text">
                <p>
                  Hej jag heter Kristjan Innan jag blev konstruktör arbetade jag som snickare i många år. Jag vet av egen erfarenhet hur arbetet ska utföras på det mest effektiva sättet. Vilka mått som är viktiga och vilka detaljer som bäst kan hjälpa den som utför arbetet.
                </p>
                <p>
                  Jag visar respekt mot alla i projektet och vill stötta deras arbetsutförande så mycket som jag kan. Ritar jag något så tänker jag alltid på den som ska bygga det.
                </p>
              </div>
            </div>
          </section>

          <section className="about-experience">
            <h2>Erfarenhet</h2>
            <div className="experience-grid">
              <div className="experience-card">
                <h3>Kodumaja OÜ</h3>
                <p>
                  Jag har arbetat som konstruktör hos Kodumaja OÜ i Estland. Där utförde jag hållfasthets och stabilitets beräkningar för trämodulhus upp till 6 våningar. Maximal snöbelastning på marken var 4 kPa och maximal vindlast tryck var 1,67 kPa.
                </p>
              </div>
              <div className="experience-card">
                <h3>PE teknik & arkitektur AB</h3>
                <p>
                  Hos PE teknik & arkitektur AB fick jag möjlighet att komplettera mitt kunskapsområde med betong-, prefab- och stålbyggnader. Jag fick designa nya byggnationer, ombyggnad och tillbyggnader. Jag har en bra koll på konstruktionsnormer och regler som gäller i Sverige.
                </p>
              </div>
            </div>
          </section>

          <section className="about-conclusion">
            <p>
              Jag har ett flertal utförda projekt som har blivit godkända av Byggnadsnämnden i gällande kommun. (se under referenser) Jag har ett mycket bra nätverk. Om det är något som jag saknar kunskap om så finns det många kontakter för mig i mitt nätverk att tillgå.
            </p>
            <p>
              Har ni något byggprojekt där vi kan stödja er verksamhet eller process? Inget projekt är för litet eller för stort. Tveka inte och ta kontakt med oss, så kan vi skicka er en offert.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 