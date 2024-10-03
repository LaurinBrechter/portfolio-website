import { Metadata } from "next";
import Image from "next/image";
import HighlightedImageMap from "./interactiveImageSVG";

export default function Page() {
  return (
    <article className="flex items-center justify-center overflow-y-auto py-20">
      <div className="flex flex-col w-[800px] max-w-[85%] gap-4 h-full p-3 items-center">
        <h1 className="text-left w-full">
          Federated Learning for Bank Statement Parsing
        </h1>
        <p className="text-justify">
          As the prevalence of Machine Learning (ML) systems in our day-to-day
          products rises, so does the need for ensuring data privacy. There 
          is some data that we may not feel comfortable sending to an external server. 
          Another problem is that the
          service provider itself may not want to bear the responsibility that
          comes with keeping this data. At the same time, we still want to be able to
          use this data to train ML models.
        </p>
        <HighlightedImageMap />
        <p>
          To solve the problem of ensuring privacy, we can use a technique
          called federated learning. The idea is simple: The client doesn't send
          the data to the server, instead the model comes to the client!
        </p>
        <p>
          Together with [responss] we used this method to solve the task of
          extracting transactions from German bank statements. Users pass in
          their scanned bank statements and get out the transactions e.g. as a
          CSV file. This is clearly highly sensitive data that should not be
          given away easily.
        </p>
        <p>
          Since this is part of a desktop application, another reason for using
          this technique is that the functionality is also available offline.
        </p>
        <Image src={'/exampleParsing.png'} alt="Example Parsing" layout="responsive" width={400} height={400}/>
      </div>
    </article>
  );
}
