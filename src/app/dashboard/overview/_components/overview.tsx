import { AreaGraph } from './area-graph';
import { BarGraph } from './bar-graph';
import { PieGraph } from './pie-graph';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import PageContainer from '@/components/layout/page-container';
import { RecentSales } from './recent-sales';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, TrendingUp } from 'lucide-react';

export default function OverViewPage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-4 rounded-xl border p-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">At a glance</h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  <CardTitle className="text-sm font-medium text-slate-500">
                    CONSULTATIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-4xl font-semibold text-slate-900">
                    24
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium text-emerald-500">15%</span>
                    <span className="text-sm text-slate-500">increase</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  <CardTitle className="text-sm font-medium text-slate-500">
                    CONSULTATIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-4xl font-semibold text-slate-900">
                    24
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium text-emerald-500">15%</span>
                    <span className="text-sm text-slate-500">increase</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  <CardTitle className="text-sm font-medium text-slate-500">
                    CONSULTATIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-4xl font-semibold text-slate-900">
                    24
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium text-emerald-500">15%</span>
                    <span className="text-sm text-slate-500">increase</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  <CardTitle className="text-sm font-medium text-slate-500">
                    CONSULTATIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-4xl font-semibold text-slate-900">
                    24
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium text-emerald-500">15%</span>
                    <span className="text-sm text-slate-500">increase</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  <CardTitle className="text-sm font-medium text-slate-500">
                    CONSULTATIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-4xl font-semibold text-slate-900">
                    24
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium text-emerald-500">15%</span>
                    <span className="text-sm text-slate-500">increase</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  <CardTitle className="text-sm font-medium text-slate-500">
                    CONSULTATIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-4xl font-semibold text-slate-900">
                    24
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium text-emerald-500">15%</span>
                    <span className="text-sm text-slate-500">increase</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  <CardTitle className="text-sm font-medium text-slate-500">
                    CONSULTATIONS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-4xl font-semibold text-slate-900">
                    24
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium text-emerald-500">15%</span>
                    <span className="text-sm text-slate-500">increase</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <BarGraph />
              </div>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
              <div className="col-span-4">
                <AreaGraph />
              </div>
              <div className="col-span-4 md:col-span-3">
                <PieGraph />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
