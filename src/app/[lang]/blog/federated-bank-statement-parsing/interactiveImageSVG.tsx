"use client";

import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import Image from "next/image";

import { useState } from "react";

export default function HighlightedImageMap() {
  const HoverableArea = ({
    x,
    y,
    width,
    height,
    description,
    title,
  }: {
    x: string;
    y: string;
    width: string;
    height: string;
    description: string;
    title: string;
  }) => {
    return (
      <rect
        className={`bg-opacity-50 hover:fill-purple-500 hover:cursor-pointer fill-slate-200`}
        onClick={() => {
          setCardContent(description);
          setCardTitle(title);
        }}
        width={width}
        height={height}
        x={x}
        y={y}
        fillOpacity={0.3}
      />
    );
  };

  const [cardContent, setCardContent] = useState('Click on one of the components to see a description');
  const [cardTitle, setCardTitle] = useState<undefined | string>(undefined);

  return (
    <main className="w-[80%] relative">
      <svg viewBox="0 0 949 827" width="100%" height="100%">
        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          href="/federatedLearningGraphic.png"
        />
        <HoverableArea
          width="20%"
          height="20%"
          x="10%"
          y="10%"
          description="The customer has some private data that they don't want to send to the server."
          title="Client Data"
        />
        <HoverableArea
          width="20%"
          height="30%"
          x="75%"
          y="40%"
          description="The server stores the model and sends it to the client. The server doesn't see the data. It instead gets the updated models from the clients and aggregates them."
          title="Server"
        />

        {/* <HoverableArea
          width="20%"
          height="20%"
          x="10%"
          y="10%"
          description="This is a hoverable area"
        /> */}
      </svg>
      {/* <Card className="ml-5 absolute top-0 left-[100%] w-[400px]"> */}
      {cardContent && (
        <Card className="mt-5 h-[150px]">
          {/* <CardHeader>{cardTitle}</CardHeader> */}
          <CardContent className="h-full p-5">{cardContent}</CardContent>
        </Card>
      )}
    </main>
  );
}
