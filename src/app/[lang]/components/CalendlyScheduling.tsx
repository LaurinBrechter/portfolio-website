'use client'

import { PopupWidget } from "react-calendly"
import { useEffect, useState } from "react"

export default function CalendlyScheduling() {
    
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRootElement(document.getElementById("root"));
    }, []);
    
    return (
        rootElement &&
        <PopupWidget
        url="https://calendly.com/brechterlaurin/consultation-call"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={rootElement}
        text="30min. free Consultion Call"
        textColor="#ffffff"
        color="#124d28"
      />
    )
}