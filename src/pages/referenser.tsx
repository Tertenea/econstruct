import React, { useState, useEffect } from 'react';

interface ReferenceProject {
  id: number;
  title: string;
  location: string;
  description: string;
  services: string[];
  images: string[];
  company: 'KODUMAJA' | 'PE' | 'IND';
}

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const referenceProjects: ReferenceProject[] = [
  {
    id: 1,
    title: "Mölnbovägen 23",
    location: "Järna, Sverige",
    description: "Det är trämodulhus i Järna. Trapphusen är utförda av KL trä. Resten av byggnaden är gjord av moduler med regelstomme. Jag gjorde ett flertal olika konstruktions beräkningar för den byggnaden. ",
    services: ["Lastnedräkning", "Hållfasthet och stabilitet beräkningar", "Modul lyft beräkningar", "Beräkning av ljudisolering"],
    images: [
      "/images/Molnbovagen_1.jpg",
      "/images/Molnbovagen_2.jpg",
      "/images/Molnbovagen_3.jpg"
    ],
    company: "KODUMAJA"
  },
  {
    id: 2,
    title: "Bergbakken 8",
    location: "Sande i Vestfold, Norge",
    description: "Det är trämodulhus i Bergbakken. Trapphusen är utförd av betong. Resten av byggnaden är gjort av moduler med regelstomme. Jag gjorde alla möjliga konstruktions beräkningar för den byggnaden.",
    services: ["Lastnedräkning", "Hållfasthet och stabilitet beräkningar", "Modul lyft beräkningar", "Beräkning av ljudisolering"],
    images: [
      "/images/Bergbakken_1.jpg",
      "/images/Bergbakken_2.jpg",
      "/images/Bergbakken_3.jpg"
    ],
    company: "KODUMAJA"
  },
  {
    id: 3,
    title: "Kista Square Garden",
    location: "Stockholm, Sverige",
    description: "Kista Square garden var Stockholms hetaste byggnad år 2021. Här fick jag modellera befintlig stomme och en del tillbyggnaden i Revit. Jag gjorde en hel del beräkningar till exempel: lastnedräkning, avväxlingsbalkar mellan befintlig byggnad och tillbyggnad, förstärkningsberäkningar. Så klart fick jag göra massor av ritningar. Mest spännande var förstärkningsritningar i befintlig stomme.",
    services: ["3D-modellering", "Lastnedräkning", "Hållfasthet och stabilitet", "Förstärkningsarbete", "Tillbyggnadsberäkningar"],
    images: [
      "/images/Kista_Square_garden_befintlig.jpg",
      "/images/Kista_Square_garden_Nybyggnad_1.jpg",
      "/images/Kista_Square_garden_Nybyggnad_2.jpg"
    ],
    company: "PE"
  },
  {
    id: 4,
    title: "Stettin 6",
    location: "Stockholm, Sverige",
    description: "Jag utförde kontroll av träbogars bärighet med 24 meters spännvidd. Jag gjorde beräkningar för fläktaggregat på taket med fokus på hållfasthet, stabilitet och ljudreducering. Jag ritade montagedetaljer och tillverkningsritningar för stålstomme.",
    services: ["Bärighets kontroll", "Beräkning av ljudisolering", "Montagedetaljer", "Tillverkningsritningar"],
    images: [
      "/images/Stettin_1.jpg",
      "/images/Stettin_2.jpg"
    ],
    company: "PE"
  },
  {
    id: 5,
    title: "Hantverkaren 2",
    location: "Stockholm, Sverige",
    description: "Den här byggnad är ett nytt äldreboende. Här fick jag göra lastnedräkning, hållfasthet beräkningar för håldäck, 3D modellering och tillverkningsritningar.",
    services: ["Hållfasthetsberäkningar", "Modellering", "Tillverkningsritningar"],
    images: [
      "/images/Hantverkaren_1.jpg",
      "/images/Hantverkaren_2.jpg"
    ],
    company: "PE"
  },
  {
    id: 6,
    title: "Sälgen 2",
    location: "Stockholm, Sverige",
    description: "Den här är en äldre byggnad i Stockholm. Här gjorde vi ändringar i befintlig stomme. Jag fick göra följande hållfasthetsberäkningar: lastnedräkning, kontroll beräkningar på befintlig stomme , nya stålkonstruktions och hållfasthetsberäkningar. Jag fick pyssla med rivningsritningar, montagedetaljer och tillverkningsritningar.",
    services: ["Lastnedräkning", "Kontroll beräkningar", "Stålkonstruktion", "Riviningsritningar", "Montagedetaljer", "Tillverkningsritningar"],
    images: [
      "/images/Salgen_1.jpg"
    ],
    company: "PE"
  },
  {
    id: 7,
    title: "Flintholmsgatan 3",
    location: "Malmö",
    description: "Det här är ett projekt där jag har gjort allt självgående. Byggnadsnämnden har godkänt mina ritningar och byggarbetet är nästan klart.",
    services: ["Hållfasthetsberäkningar", "Beräkning av byggnadsfysik", "Ritningar"],
    images: [
      "/images/Flintholmsgatan_1.jpg",
      "/images/Flintholmsgatan_2.jpg",
      "/images/Flintholmsgatan_3.jpg"
    ],
    company: "IND"
  },
  {
    id: 8,
    title: "Gussnava 14:154",
    location: "Ystad",
    description: "Det här är ett projekt som jag har gjort allt självgående. Byggherren gav mig alla viktiga mått och underlag så att vi klarade oss utan arkitektritade ritningar. Ägare ville ha större fönster och kunna använda vindsvåningen. Så att det blev en hel del arbete med stålkonstruktioner för att anpassa allt för kundens önskemål.",
    services: ["Hållfasthetsberäkningar", "Montage ritningar", "Tillverkningsritningar"],
    images: [
      "/images/Gussnava_1.jpg",
      "/images/Gussnava_2.jpg"
    ],
    company: "IND"
  },
  {
    id: 9,
    title: "Blåklockan 4",
    location: "S.Sandy",
    description: "Inget projekt är för stor eller för litet. Här har vi en carport, där jag hjälpte min samarbetspartner med konstruktionsritningarna.",
    services: ["Hållfasthetsberäkningar", "Ritningar", "Beräkning av brandisolering"],
    images: [
      "/images/Blaklockan_1.jpg",
      "/images/Blaklockan_2.jpg"
    ],
    company: "IND"
  }
];

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, currentIndex, title, onClose, onNext, onPrev }) => {
  if (images.length === 0) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h3 className="modal-title">{title}</h3>
        <div className="modal-image-container">
          <img src={images[currentIndex]} alt={`${title} - bild ${currentIndex + 1}`} className="modal-image" />
        </div>
        <div className="modal-controls">
          <button 
            className="modal-nav prev" 
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            &#10094;
          </button>
          <span className="modal-counter">{currentIndex + 1} / {images.length}</span>
          <button 
            className="modal-nav next" 
            onClick={onNext}
            disabled={currentIndex === images.length - 1}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

const References: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ReferenceProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const openModal = (project: ReferenceProject, imageIndex = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
    document.body.style.overflow = 'auto';
  };
  
  const nextImage = () => {
    if (currentProject && currentImageIndex < currentProject.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };
  
  const prevImage = () => {
    if (currentProject && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentImageIndex]);

  return (
    <div className="page-container">
      <h1 className="page-title">Referenser</h1>
      <div className="page-content">
        <div className="references-intro">
        </div>
        
        <div className="references-section">
          <h2 className="reference-section-title">URVAL AV REFERENSUPPDRAG FRÅN KODUMAJA</h2>
          <p className="project-description">
            Här ser ni byggprojekt som jag har gjort i Kodumaja. Det är ett Estnisk bolag med 500 anställda. De tillverkar trämodulhus till hela Skandinavien.
          </p>
          <div className="references-grid">
            {referenceProjects
              .filter(project => project.company === 'KODUMAJA')
              .map(project => (
                <div className="reference-card" key={project.id}>
                  <div 
                    className="reference-image"
                    onClick={() => project.images?.length > 0 && openModal(project, 0)}
                  >
                    {project.images && project.images.length > 0 ? (
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="clickable-image" 
                      />
                    ) : (
                      <div className="image-placeholder">
                        <span>Projektbild</span>
                      </div>
                    )}
                  </div>
                  <div className="reference-content">
                    <h3 className="reference-title">{project.title}</h3>
                    <div className="reference-details">
                      <span className="reference-location">{project.location}</span>
                    </div>
                    <p className="reference-description">{project.description}</p>
                    <div className="reference-services">
                      <h4>Tjänster:</h4>
                      <ul>
                        {project.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    {project.images && project.images.length > 1 && (
                      <div className="reference-thumbnails">
                        {project.images.map((img, idx) => (
                          <div 
                            className={`thumbnail ${idx === 0 ? 'active' : ''}`} 
                            key={idx}
                            onClick={() => openModal(project, idx)}
                          >
                            <img src={img} alt={`${project.title} - bild ${idx + 1}`} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="references-section">
          <h2 className="reference-section-title">URVAL AV REFERENSUPPDRAG FRÅN PE TEKNIK OCH ARKITEKTUR</h2>
          <p className="project-description">
            Här ser ni byggprojekt som jag har gjort i PE. I PE jobbar arkitekter, ingenjörer och specialister som tillsammans med deras kunder planerar och formar hållbara miljöer och städer.
          </p>
          <div className="references-grid">
            {referenceProjects
              .filter(project => project.company === 'PE')
              .map(project => (
                <div className="reference-card" key={project.id}>
                  <div 
                    className="reference-image"
                    onClick={() => project.images?.length > 0 && openModal(project, 0)}
                  >
                    {project.images && project.images.length > 0 ? (
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="clickable-image" 
                      />
                    ) : (
                      <div className="image-placeholder">
                        <span>Projektbild</span>
                      </div>
                    )}
                  </div>
                  <div className="reference-content">
                    <h3 className="reference-title">{project.title}</h3>
                    <div className="reference-details">
                      <span className="reference-location">{project.location}</span>
                    </div>
                    <p className="reference-description">{project.description}</p>
                    <div className="reference-services">
                      <h4>Tjänster:</h4>
                      <ul>
                        {project.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    {project.images && project.images.length > 1 && (
                      <div className="reference-thumbnails">
                        {project.images.map((img, idx) => (
                          <div 
                            className={`thumbnail ${idx === 0 ? 'active' : ''}`} 
                            key={idx}
                            onClick={() => openModal(project, idx)}
                          >
                            <img src={img} alt={`${project.title} - bild ${idx + 1}`} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div className="references-section">
          <h2 className="reference-section-title">URVAL AV REFERENSUPPDRAG UTFÖRT SJÄLVGÅENDE I SVERIGE</h2>
          <div className="references-grid">
            {referenceProjects
              .filter(project => project.company === 'IND')
              .map(project => (
                <div className="reference-card" key={project.id}>
                  <div 
                    className="reference-image"
                    onClick={() => project.images?.length > 0 && openModal(project, 0)}
                  >
                    {project.images && project.images.length > 0 ? (
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="clickable-image" 
                      />
                    ) : (
                      <div className="image-placeholder">
                        <span>Projektbild</span>
                      </div>
                    )}
                  </div>
                  <div className="reference-content">
                    <h3 className="reference-title">{project.title}</h3>
                    <div className="reference-details">
                      <span className="reference-location">{project.location}</span>
                    </div>
                    <p className="reference-description">{project.description}</p>
                    <div className="reference-services">
                      <h4>Tjänster:</h4>
                      <ul>
                        {project.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    {project.images && project.images.length > 1 && (
                      <div className="reference-thumbnails">
                        {project.images.map((img, idx) => (
                          <div 
                            className={`thumbnail ${idx === 0 ? 'active' : ''}`} 
                            key={idx}
                            onClick={() => openModal(project, idx)}
                          >
                            <img src={img} alt={`${project.title} - bild ${idx + 1}`} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div className="references-contact">
          <h3>Vill du veta mer om våra projekt?</h3>
          <p>Kontakta oss för mer information eller för att diskutera ditt eget projekt.</p>
          <a href="/kontakt" className="contact-button">Kontakta oss</a>
        </div>
      </div>
      
      {modalOpen && currentProject && (
        <ImageGallery 
          images={currentProject.images} 
          currentIndex={currentImageIndex}
          title={currentProject.title}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default References; 