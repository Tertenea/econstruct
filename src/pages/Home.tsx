import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <section className="company-section">
          <div className="video-container">
            <video width="100%" autoPlay loop muted playsInline>
              <source src="/buildmontage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="company-message">
            <h2>Econstruct</h2>
            <p>Detta är ett byggprojekt i Kodumaja där jag gjort alla stabilitets och hållfastberäkningar. Det är ett hyreshus på sex våningar i Norge och byggnaderna är byggda av trämoduler.</p>
          </div>
        </section>
        
        <div className="section-divider" id="tjanster">
          <h2 className="section-title">Tjänster</h2>
        </div>
        
        <section className="tjanster">
          <div className="services-grid">
            <div className="service-card featured-service">
              <h3>BYGGPROJEKT</h3>
              <p className="service-description">
                Har ni arkitektritade ritningar eller annat likvärdigt underlag så kan vi göra ett konstruktivt byggprojekt till er.
              </p>
              <div className="service-details">
                <h4>Hållfasthetsberäkningar och konstruktsionsritningar</h4>
                <ul>
                  <li>Träkonstruktioner</li>
                  <li>Stålkonstruktioner</li>
                  <li>Betongkonstruktioner</li>
                  <li>Prefabkonstruktioner</li>
                </ul>
                <h4 className="service-details">Beräkning av byggnadsfysik</h4>
                <h4 className="service-details">Beräkning av ljudisolering</h4>
                <h4 className="service-details">Beräkning av brandisolering</h4>
              </div>
            </div>

            <div className="service-card">
              <h3>RAPPORTER</h3>
              <p>
                Vi erbjuder komplexa lösningar för byggnader och konstruktioner, inklusive hållfasthetsberäkningar, konstruktionsritningar och byggfysikberäkningar.
              </p>
            </div>

            <div className="service-card">
              <h3>NYBYGGNADER</h3>
              <p>
                Har ni fått bygglov och vill börja bygga. Vi kan skapa nytt konstruktivt byggprojekt för er.
              </p>
            </div>

            <div className="service-card">
              <h3>OMBYGGNATION</h3>
              <p>
                Har ni en byggnad som ni vill bygga om? Vi försöker utnyttja så mycket av den befintliga konstruktionen som det går.
              </p>
            </div>

            <div className="service-card">
              <h3>TILLBYGGNADER</h3>
              <p>
                Har ni en byggnad som ni vill bygga om? Vi försöker utnyttja så mycket av den befintliga konstruktionen som det går.
              </p>
            </div>
          </div>
        </section>

        <div className="references-contact">
          <h3>Redo att påbörja ditt byggprojekt?</h3>
          <p>Kontakta oss för en konsultation och låt oss diskutera hur vi kan hjälpa dig med ditt kommande byggprojekt.</p>
          <a href="/contact" className="contact-button">Kontakta oss</a>
        </div>
      </div>
    </div>
  );
};

export default Home; 