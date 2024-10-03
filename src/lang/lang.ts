
export type LangTranslations = {

    [key: string]: {
  
      home: {
  
        title: string;
  
        subtitle: string;
        learn_more: string;
        
        services: {
          title: string;
          learn_more: string;
          
          service_list: {
            title:string;
            description:string;
          }[]
        },
        about: {
          title: string;
          content: string;
        },
        caseStudies: {
          title: string;
          omd_appointbot: {
            title: string;
            subtitle: string;
            description: string;
            benefit: string;
          }
          customer_segmentation: {
            title: string;
            subtitle: string;
            description: string;
            benefit: string;
          },
          federated_bank_parsing: {
            title: string,
            subtitle: string,
            description: string,
            benefit: string;
          },
          link: string;
        }
        contact: {
          title: string;
          subtitle: string;
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
            learn_more: 'Learn More',
            
           
            
            services: {
              title: 'Our Services',
              learn_more: 'Learn More',
              service_list: [
                {
                  title: 'Data Analysis',
                  description: 'Comprehensive analysis of your data to uncover trends and insights.'
                },
                {
                  title: 'Predictive Modeling',
                  description: 'Develop models to forecast trends and make data-driven decisions.'
                },
                {
                  title: 'Intelligent Chatbots',
                  description: 'Develop chatbots that can interact with your customers and provide support.'
                }
              ]
            },
            about: {
              title: 'About Me',
              content: 'I started my career as a data analyst and scientist about 4 years ago, and have since worked with a variety of clients across different industries. I have a passion for transforming complex data into clear, actionable insights that drive business growth.'
            },
            caseStudies: {
              title: 'Selected Case Studies',
              omd_appointbot: {
                title: 'OMD Appointbot',
                subtitle: 'A chatbot that helps customers reschedule repair appointments.',
                description: 'The OMD appointbot is a chatbot based on Large Lanuguage Models (LLMs) that helps customers reschedule their appointment for maintenance and repair work thereby reducing the time spent on customer service and improving the overall customer experience.',
                benefit: 'Reduce time spent with customer service by 80%'
              },
              customer_segmentation: {
                title: 'Customer Segmentation Analysis',
                subtitle: 'Tailoring marketing strategies for different customer groups',
                description: 'Used clustering algorithms to segment customers based on purchasing behavior, enabling targeted marketing campaigns and personalized experiences.',
                benefit: '5 distinct customer segments identified'
              },
              federated_bank_parsing: {
                title: 'Föderiertes Lernen für Banken',
                subtitle: 'Datenschutzfreundliche KI für sichere Kontoauszugsanalyse',
                description: 'Entwickelte ein föderiertes Lernmodell, um Banken zu ermöglichen, Daten sicher zu analysieren, ohne sensible Kundeninformationen offenzulegen.',
                benefit: 'precsise parsing of bank statements'
              },
              link: 'Learn More'
            },
            contact: {
              title: 'Get in Touch',
              subtitle: "Ready to leverage your data? Let's discuss how I can help you achieve your goals."
            }
        },
        testimonials: {
            title: 'What Clients Say About Us',
        }
    },
    de: {
        home: {
            title: 'Entfesseln Sie die Kraft Ihrer Daten',
            subtitle: 'Experten für Datenanalyse und wissenschaftliche Erkenntnisse, um Ihr Unternehmen voranzubringen. Verwandeln Sie Rohdaten in handlungsorientierte Strategien.',
            learn_more: 'Erfahren Sie mehr',
            
            services: {
              title: 'Unsere Dienstleistungen',
              learn_more: 'Erfahren Sie mehr',
              service_list: [
                {
                  title: 'Datenanalyse',
                  description: 'Umfassende Analyse Ihrer Daten, um Trends und Erkenntnisse aufzudecken.'
                },
                {
                  title: 'Vorhersagemodellierung',
                  description: 'Entwicklung von Modellen zur Vorhersage von Trends und zur datengesteuerten Entscheidungsfindung.'
                },
                {
                  title: 'Intelligente Chatbots',
                  description: 'Entwicklung von Chatbots, die mit Ihren Kunden interagieren und Unterstützung bieten.'
                }
              ]
            },
            about: {
              title: 'Über mich',
              content: 'Ich habe meine Karriere vor etwa 4 Jahren als Datenanalyst und Wissenschaftler begonnen und seitdem mit einer Vielzahl von Kunden aus verschiedenen Branchen zusammengearbeitet. Ich habe eine Leidenschaft dafür, komplexe Daten in klare, handlungsorientierte Erkenntnisse umzuwandeln, die das Unternehmenswachstum vorantreiben.'
            },
            caseStudies: {
              title: 'Ausgewählte Fallstudien',
              omd_appointbot: {
                title: 'OMD Appointbot',
                subtitle: 'Ein Chatbot, der Kunden hilft, Reparaturtermine neu festzulegen.',
                description: 'Der OMD Appointbot ist ein Chatbot, der auf Large Language Models (LLMs) basiert und Kunden dabei hilft, ihren Termin für Wartungs- und Reparaturarbeiten neu zu planen. Dadurch wird die Zeit die für den Kundenservice benötigt wird, reduziert und die allgemeine Kundenerfahrung verbessert.',
                benefit: 'Reduzierung der Zeit für den Kundenservice um 80%'
              },
              customer_segmentation: {
                title: 'Kunden-Segmentierungsanalyse',
                subtitle: 'Anpassung von Marketingstrategien für verschiedene Kundengruppen',
                description: 'Verwendete Clustering-Algorithmen, um Kunden basierend auf ihrem Kaufverhalten zu segmentieren, was gezielte Marketingkampagnen und personalisierte Erlebnisse ermöglicht.',
                benefit: '5 verschiedene Kundensegmente identifiziert'
              },
              federated_bank_parsing: {
                title: 'Föderales Lernen für Banken',
                subtitle: 'Sichere Analyse von Bankdaten ohne Offenlegung von Kundendaten',
                description: 'Entwickelte ein Modell für das föderierte Lernen, um Banken zu ermöglichen, Daten sicher zu analysieren, ohne sensible Kundendaten offenzulegen.',
                benefit: 'Präzise Analyse von Bankauszügen'
              },
              link: 'Erfahren Sie mehr'
            },
            contact: {
              title: 'Kontaktieren Sie uns',
              subtitle: 'Bereit, Ihre Daten zu nutzen? Lassen Sie uns besprechen, wie ich Ihnen helfen kann, Ihre Ziele zu erreichen.'
            }
        },
        testimonials: {
          title: 'Was unsere Kunden über uns sagen',
      }
    }
};

export default Lang;