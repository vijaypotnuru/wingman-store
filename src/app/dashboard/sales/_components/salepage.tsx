"use client";

import OrdersTable from "@/components/orderstable";

export default function SalesPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col ml-16">
        <div className="flex-1 bg-gray-50 p-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Orders
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Monitor and manage your recent orders
              </p>
            </div>
            <OrdersTable />
          </div>
        </div>
      </div>
    </div>
  );
}
