
export type LangTranslations = {

    [key: string]: {
  
      home: {
  
        title: string;
  
        subtitle: string;
        about: {
          title: string;
          content: string;
        }
  
      };
      testimonials : {
        title: string;
      }
  
    };
  
  };
  

const Lang: LangTranslations = {
    en: {
        home: {
            title: 'Unlock the Power of Your Data',
            subtitle: 'Expert data analysis and scientific insights to drive your business forward. Transform raw data into actionable strategies.',
            about: {
              title: 'About Me',
              content: 'As a seasoned data analyst and scientist, I bring years of experience in transforming complex data into clear, actionable insights. My expertise spans various industries, allowing me to tackle diverse challenges and deliver tailored solutions.'
            }
        },
        testimonials: {
            title: 'What Clienets Say About Us',
        }
    },
    de: {
        home: {
            title: 'Entfesseln Sie die Kraft Ihrer Daten',
            subtitle: 'Experten für Datenanalyse und wissenschaftliche Erkenntnisse, um Ihr Unternehmen voranzubringen. Verwandeln Sie Rohdaten in handlungsorientierte Strategien.',
            about: {
              title: 'Über mich',
              content: 'Als erfahrener Datenanalyst und Wissenschaftler bringe ich jahrelange Erfahrung in der Umwandlung komplexer Daten in klare, handlungsorientierte Erkenntnisse mit. Meine Expertise erstreckt sich über verschiedene Branchen, was es mir ermöglicht, vielfältige Herausforderungen anzugehen und maßgeschneiderte Lösungen zu liefern.'
            }
        },
        testimonials: {
          title: 'Was unsere Kunden über uns sagen',
      }
    }
};

export default Lang;