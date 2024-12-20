"use client";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const weeklyData = [
  { day: "Mon", incoming: 33, answered: 28, experts: 8 },
  { day: "Tue", incoming: 32, answered: 27, experts: 8 },
  { day: "Wed", incoming: 38, answered: 32, experts: 9 },
  { day: "Thu", incoming: 45, answered: 40, experts: 5 },
  { day: "Fri", incoming: 43, answered: 34, experts: 9 },
  { day: "Sat", incoming: 48, answered: 35, experts: 8 },
  { day: "Sun", incoming: 52, answered: 37, experts: 8 },
  { day: "Mon", incoming: 35, answered: 30, experts: 5 },
  { day: "Mon", incoming: 45, answered: 38, experts: 9 },
  { day: "Tue", incoming: 47, answered: 40, experts: 3 },
  { day: "Wed", incoming: 50, answered: 42, experts: 10 },
  { day: "Thu", incoming: 55, answered: 46, experts: 3 },
  { day: "Fri", incoming: 52, answered: 44, experts: 10 },
  { day: "Sat", incoming: 56, answered: 47, experts: 9 },
  { day: "Sun", incoming: 60, answered: 50, experts: 9 },
];

const comparisonData = [
  { period: "This week", consultations: 20, orders: 15 },
  { period: "Last week", consultations: 15, orders: 10 },
];

export default function InsightsSection() {
  return (
    <>
      <h1 className="text-3xl  py-6 px-2">Insights</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Consultations Chart */}
        <div className="col-span-1 lg:col-span-7 bg-white py-6 rounded-3xl border-[0.5px] drop-shadow-sm px-2">
          <div className="flex items-center gap-2 mb-6 px-6">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z"
                fill="#667085"
              />
            </svg>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              CONSULTATIONS
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={weeklyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F1F5F9"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  ticks={[10, 20, 30, 40, 50, 60]}
                  domain={[0, 60]}
                  yAxisId="left"
                  label={{
                    value: "CONSULTATIONS",
                    angle: -90,
                    position: "insideLeft",
                    style: {
                      textAnchor: "middle",
                      fill: "#94A3B8",
                      fontSize: 8,
                      opacity: 0.7,
                    },
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  dx={10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  domain={[0, 20]}
                  tickFormatter={() => "10"}
                  label={{
                    value: "EXPERTS ONLINE",
                    angle: -90,
                    position: "insideRight",
                    style: {
                      textAnchor: "middle",
                      fill: "#94A3B8",
                      fontSize: 8,
                      opacity: 0.7,
                    },
                  }}
                />
                <Bar
                  dataKey="experts"
                  fill="#FEF9C3"
                  yAxisId="right"
                  barSize={20}
                  radius={[4, 4, 0, 0]}
                />
                {/* <Bar 
                dataKey="incoming"
                fill="#94A3B8"
                yAxisId="left"
                barSize={20}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="answered"
                fill="#15B79E" 
                yAxisId="left"
                barSize={20}
                radius={[4, 4, 0, 0]}
              /> */}
                <Line
                  type="monotone"
                  dataKey="incoming"
                  stroke="#94A3B8"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                  yAxisId="left"
                />
                <Line
                  type="monotone"
                  dataKey="answered"
                  stroke="#15B79E"
                  strokeWidth={2}
                  dot={false}
                  yAxisId="left"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6 mt-4 border-t-[1px] mx-6 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#94A3B8]"></div>
              <span className="text-sm text-gray-600">Incoming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#15B79E]"></div>
              <span className="text-sm text-gray-600">Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#FEF9C3] "></div>
              <span className="text-sm text-gray-600">Experts online</span>
            </div>
          </div>
        </div>

        {/* VS Past Period */}
        <div className="col-span-1 lg:col-span-3 bg-white py-8 rounded-3xl border-[0.5px] drop-shadow-sm">
          <div className="flex items-center gap-2 mb-6 px-6">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.875 8.75C9.875 8.84946 9.83549 8.94484 9.76517 9.01517C9.69484 9.08549 9.59946 9.125 9.5 9.125H0.5C0.400544 9.125 0.305161 9.08549 0.234835 9.01517C0.164509 8.94484 0.125 8.84946 0.125 8.75C0.125 8.65054 0.164509 8.55516 0.234835 8.48483C0.305161 8.41451 0.400544 8.375 0.5 8.375H0.875V5.375C0.875 5.27554 0.914509 5.18016 0.984835 5.10983C1.05516 5.03951 1.15054 5 1.25 5H2.375C2.47446 5 2.56984 5.03951 2.64016 5.10983C2.71049 5.18016 2.75 5.27554 2.75 5.375V8.375H3.5V3.125C3.5 3.02554 3.53951 2.93016 3.60984 2.85984C3.68016 2.78951 3.77554 2.75 3.875 2.75H5.375C5.47446 2.75 5.56984 2.78951 5.64017 2.85984C5.71049 2.93016 5.75 3.02554 5.75 3.125V8.375H6.5V0.875C6.5 0.775544 6.53951 0.680161 6.60983 0.609835C6.68016 0.539509 6.77554 0.5 6.875 0.5H8.75C8.84946 0.5 8.94484 0.539509 9.01517 0.609835C9.08549 0.680161 9.125 0.775544 9.125 0.875V8.375H9.5C9.59946 8.375 9.69484 8.41451 9.76517 8.48483C9.83549 8.55516 9.875 8.65054 9.875 8.75Z"
                fill="#667085"
              />
            </svg>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              VS PAST PERIOD
            </p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparisonData}
                margin={{ top: 5, right: 30, left: 0, bottom: 25 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F1F5F9"
                  horizontalPoints={comparisonData.map((_, index) => index)}
                />
                <XAxis
                  dataKey="period"
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                  tick={{ fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Bar
                  dataKey="consultations"
                  fill="#CCFBEF"
                  barSize={30}
                  radius={[5, 5, 0, 0]}
                />
                <Bar
                  dataKey="orders"
                  fill="#115E59"
                  barSize={30}
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6  border-t-[1px] mx-6 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#CCFBEF] "></div>
              <span className="text-sm text-gray-600">Consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 rounded-sm bg-[#115E59] "></div>
              <span className="text-sm text-gray-600">Orders closed</span>
            </div>
          </div>
        </div>

        {/* Forecasts */}
        <div className="col-span-1 lg:col-span-2 bg-[#15B79E] p-6 rounded-3xl text-white">
          <div className="flex items-center gap-2 mb-6">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M8.3125 0.875C6.24119 0.877275 4.25538 1.70111 2.79074 3.16574C1.32611 4.63038 0.502275 6.61619 0.5 8.6875V15.2758C0.500413 15.6003 0.629526 15.9115 0.859022 16.141C1.08852 16.3705 1.39966 16.4996 1.72422 16.5H8.3125C10.3845 16.5 12.3716 15.6769 13.8368 14.2118C15.3019 12.7466 16.125 10.7595 16.125 8.6875C16.125 6.6155 15.3019 4.62836 13.8368 3.16323C12.3716 1.6981 10.3845 0.875 8.3125 0.875Z" />
            </svg>
            <p className="text-sm uppercase tracking-wider">FORECASTS</p>
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-5xl font-normal">+15%</span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-sm opacity-80 mt-2 pt-4 text-white">
                forecasted increase in your sales closed by the end of the
                current month
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-5xl font-normal">+20%</span>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className=" text-white text-sm opacity-80 mt-2 pt-4">
                forecasted increase in consultations by the end of the current
                month
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
