import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Kontakta oss</h1>
      <div className="page-content">
        <div className="contact-intro">
          <p>
            Har ni någon byggprojekt där vi kan stödja ert verksamhet? Inget projekt är för litet eller för stort. Tveka inte och ta kontakt med oss, då kan vi skicka er en offert.
          </p>
        </div>
        <div className="contacts-grid">
          <div className="contact-card">
            <div className="contact-content">
              <div className="contact-image">
                <img src="/images/kristjanh.jpg" alt="Kristjan" />
              </div>
              <div className="contact-info">
                <h3>Kristjan Heinleht</h3>
                <p>Byggnadskonstruktör</p>
                <p>Epost adress: kristjan@econstruct.se</p>
                <p>Telefonnummer: 073 098 60 77</p>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-content">
              <div className="contact-image">
                <img src="/images/prints.jpg" alt="Prints" />
              </div>
              <div className="contact-info">
                <h3>Prints</h3>
                <p>VD</p>
                <p>&#8206; </p>
                <p>&#8206; </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 