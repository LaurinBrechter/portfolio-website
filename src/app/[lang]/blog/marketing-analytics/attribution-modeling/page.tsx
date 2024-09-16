import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AttributionChart } from "./AttributionChart";



// export const description = "A bar chart";

const channels = ["LinkedId", "Google", "Mail", "Ads"];



export default function Page() {

  return (
    <div className="flex items-center justify-center overflow-y-auto h-[93vh]" >
      <div className="flex flex-col w-[600px] gap-4 h-full">
        <h1 className="text-3xl">Attribution Modeling</h1>
        <AttributionChart />
        <p>
        Attribution modeling is a method used in marketing analytics to determine the contribution of various marketing channels and touchpoints to the final conversion or desired outcome. The goal of attribution modeling is to allocate credit or value to each touchpoint along the customer journey, helping businesses understand which channels and interactions are most influential in driving conversions.
        </p>
        <p>
        This can in turn help us understand, which touch points drove the conversion and maybe even tell us, how we should allocate our marketing budget. There are several rule-based attribution techniques but here, we will solely consider multi-touch, data-driven attribution modeling. This means that a) credit can be given to multiple touch points along the journey and b) we want the data to tell us what touch points are important.
        </p>
      </div>
    </div>
  );
}
