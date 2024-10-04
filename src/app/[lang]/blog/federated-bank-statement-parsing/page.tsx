import { Metadata } from "next";
import Image from "next/image";
import HighlightedImageMap from "./interactiveImageSVG";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (params.lang === "en") {
    return {
      title: "Federated Bank Statement Parsing",
      description:
        "With the help of federated learning, we were able to extract transactions from German bank statements without compromising user privacy.",
    };
  } else {
    return {
      title: "Analyse von Bankauszügen mithilfe von Federated Learning",
      description:
        "Mit Hilfe von Federated Learning konnten wir Transaktionen aus deutschen Bankauszügen extrahieren, ohne die Privatsphäre der Benutzer zu gefährden.",
    };
  }
}

export default function Page() {
  return (
    <article className="blog-container">
      <div className="blog">
        <h1 className="text-left w-full">
          Federated Learning for Bank Statement Parsing
        </h1>
        <p>
          As the prevalence of Machine Learning (ML) systems in our day-to-day
          products rises, so does the need for ensuring data privacy. There is
          some data that we may not feel comfortable sending to an external
          server. Another problem is that the service provider itself may not
          want to bear the responsibility that comes with keeping this data. At
          the same time, we still want to be able to use this data to train ML
          models.
        </p>
        <HighlightedImageMap />
        <p>
          To solve the problem of ensuring privacy, we can use a technique
          called federated learning. The idea is simple: The client doesn't send
          the data to the server, instead the model comes to the client!
        </p>
        <p>
          We used this method to solve the task of extracting transactions from
          German bank statements. Users pass in their scanned bank statements
          and get out the transactions e.g. as a CSV file. This is clearly
          highly sensitive data that should not be given away easily.
        </p>
        <p>
          Since this is part of a desktop application, another reason for using
          this technique is that the functionality is also available offline.
        </p>
        <p>
          <b>The Role of Federated Learning in Bank Statement Parsing</b>
          <br />
          In this case study, federated learning enabled us to offer a secure
          and efficient solution without compromising on usability or privacy.
          Traditional approaches to bank statement parsing would typically
          involve uploading the scanned document to a centralized server where
          the machine learning model processes it. However, with federated
          learning, the model itself is sent to the user's device where it is
          trained locally. This ensures that no sensitive financial data ever
          leaves the user's device.
        </p>
        <Image
          src={"/exampleParsing.png"}
          alt="Example Parsing"
          layout="responsive"
          width={400}
          height={400}
        />
      </div>
    </article>
  );
}
