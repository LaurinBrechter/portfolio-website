
export type LangTranslations = {

    [key: string]: {
  
      home: {
  
        title: string;
  
        subtitle: string;
        about: {
          title: string;
          content: string;
        },
        services: {
          title: string;
          learn_more: string;
          data_analysis: {
            title: string;
            description: string;
          },
          data_visualization: {
            title: string;
            description: string;
          },
          predictive_modeling: {
            title: string;
            description: string;
          },
          chatbots: {
            title: string;
            description: string;
          }
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
            },
            services: {
              title: 'Our Services',
              learn_more: 'Learn More',
              data_analysis: {
                title: 'Data Analysis',
                description: 'Comprehensive analysis of your data to uncover trends and insights.'
              },
              data_visualization: {
                title: 'Data Visualization',
                description: 'Create compelling visual representations of your data for easy understanding.'
              },
              predictive_modeling: {
                title: 'Predictive Modeling',
                description: 'Develop models to forecast trends and make data-driven decisions.'
              },
              chatbots: {
                title: 'Intelligent Chatbots',
                description: 'Develop chatbots that can interact with your customers and provide support.'
              }
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
            },
            services: {
              title: 'Unsere Dienstleistungen',
              learn_more: 'Erfahren Sie mehr',
              data_analysis: {
                title: 'Datenanalyse',
                description: 'Umfassende Analyse Ihrer Daten, um Trends und Erkenntnisse aufzudecken.'
              },
              data_visualization: {
                title: 'Datenvisualisierung',
                description: 'Erstellen überzeugender visueller Darstellungen Ihrer Daten für ein einfaches Verständnis.'
              },
              predictive_modeling: {
                title: 'Vorhersagemodellierung',
                description: 'Entwickeln von Modellen zur Prognose von Trends und zur datengesteuerten Entscheidungsfindung.'
              },
              chatbots: {
                title: 'Intelligente Chatbots',
                description: 'Entwickeln von Chatbots, die mit Ihren Kunden interagieren und Unterstützung bieten.'
              }
            }
        },
        testimonials: {
          title: 'Was unsere Kunden über uns sagen',
      }
    }
};

export default Lang;