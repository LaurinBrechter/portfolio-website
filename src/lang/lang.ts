
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
          }
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
                  title: 'Data Visualization',
                  description: 'Create compelling visual representations of your data for easy understanding.'
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
              content: 'As a seasoned data analyst and scientist, I bring years of experience in transforming complex data into clear, actionable insights. My expertise spans various industries, allowing me to tackle diverse challenges and deliver tailored solutions.'
            },
            caseStudies: {
              title: 'Selected Case Studies',
              omd_appointbot: {
                title: 'OMD Appointbot',
                subtitle: 'A chatbot that helps patients schedule appointments with doctors.',
                description: 'OMD Appointbot is a chatbot that helps patients schedule appointments with doctors. It uses natural language processing to understand patient requests and book appointments accordingly. The chatbot has reduced the time spent on scheduling appointments and has improved the overall patient experience.',
                benefit: 'Reduce time spent with customer service by 80%'
              },
              customer_segmentation: {
                title: 'Customer Segmentation Analysis',
                subtitle: 'Tailoring marketing strategies for different customer groups',
                description: 'Used clustering algorithms to segment customers based on purchasing behavior, enabling targeted marketing campaigns and personalized experiences.',
                benefit: '5 distinct customer segments identified'
              }
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
                  title: 'Datenvisualisierung',
                  description: 'Erstellen überzeugender visueller Darstellungen Ihrer Daten für ein einfaches Verständnis.'
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
              content: 'Als erfahrener Datenanalyst und Wissenschaftler bringe ich jahrelange Erfahrung in der Umwandlung komplexer Daten in klare, handlungsorientierte Erkenntnisse mit. Meine Expertise erstreckt sich über verschiedene Branchen, was es mir ermöglicht, vielfältige Herausforderungen anzugehen und maßgeschneiderte Lösungen zu liefern.'
            },
            caseStudies: {
              title: 'Ausgewählte Fallstudien',
              omd_appointbot: {
                title: 'OMD Appointbot',
                subtitle: 'Ein Chatbot, der Patienten hilft, Termine mit Ärzten zu vereinbaren.',
                description: 'OMD Appointbot ist ein Chatbot, der Patienten hilft, Termine mit Ärzten zu vereinbaren. Er verwendet Natural Language Processing, um Patientenanfragen zu verstehen und entsprechend Termine zu buchen. Der Chatbot hat die Zeit für die Terminvereinbarung reduziert und das gesamte Patientenerlebnis verbessert.',
                benefit: 'Reduzierung der Zeit für den Kundenservice um 80%'
              },
              customer_segmentation: {
                title: 'Kunden-Segmentierungsanalyse',
                subtitle: 'Anpassung von Marketingstrategien für verschiedene Kundengruppen',
                description: 'Verwendete Clustering-Algorithmen, um Kunden basierend auf ihrem Kaufverhalten zu segmentieren, was gezielte Marketingkampagnen und personalisierte Erlebnisse ermöglicht.',
                benefit: '5 verschiedene Kundensegmente identifiziert'
              }
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