import { AreaGraph } from "./area-graph";
import { BarGraph } from "./bar-graph";
import { PieGraph } from "./pie-graph";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import PageContainer from "@/components/layout/page-container";
import { RecentSales } from "./recent-sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, TrendingDown, TrendingUp } from "lucide-react";
import StatsGrid from "@/components/statsgrid";
import InsightsSection from "@/components/insightssection";
import OrdersTable from "@/components/orderstable";

export default function OverViewPage() {
  return (
    <PageContainer scrollable>
      <div className="flex min-h-screen">
        <main className="flex-1 bg-white">
          <div className="space-y-8 mx-8 my-4 py-8 px-6 border rounded-3xl bg-white">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl ">At a glance</h1>
              <select className="px-4 py-2 bg-white rounded-lg text-sm text-gray-600 border border-gray-200">
                <option value="7">7 days</option>
                <option value="14">14 days</option>
                <option value="30">30 days</option>
                <option value="90">90 days</option>
              </select>
            </div>
            <StatsGrid />
            <InsightsSection />
            <OrdersTable />
          </div>
        </main>
      </div>
    </PageContainer>
  );
}
