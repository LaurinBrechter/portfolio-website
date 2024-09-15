
export type LangTranslations = {

    [key: string]: {
  
      home: {
  
        title: string;
  
        subtitle: string;
  
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
        },
        testimonials: {
            title: 'What Clienets Say About Us',
        }
    },
    de: {
        home: {
            title: 'Entfesseln Sie die Kraft Ihrer Daten',
            subtitle: 'Experten für Datenanalyse und wissenschaftliche Erkenntnisse, um Ihr Unternehmen voranzubringen. Verwandeln Sie Rohdaten in handlungsorientierte Strategien.',
        },
        testimonials: {
          title: 'Was unsere Kunden über uns sagen',
      }
    }
};

export default Lang;