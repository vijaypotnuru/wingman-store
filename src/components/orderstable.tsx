'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import ChatModal from './chatmodal';

interface Order {
  id: number;
  product: {
    name: string;
    image: string;
  };
  date: string;
  time: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
}

type SortField = 'product' | 'date' | 'timeSpent' | 'orderValue' | 'commission';
type SortOrder = 'asc' | 'desc';

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  
  const ordersPerPage = 5;

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Sorting function
  const sortOrders = (ordersToSort: Order[]) => {
    return [...ordersToSort].sort((a, b) => {
      const aValue = sortField === 'product' ? a.product.name : String(a[sortField as keyof Order]);
      const bValue = sortField === 'product' ? b.product.name : String(b[sortField as keyof Order]);

      if (sortField === 'orderValue' || sortField === 'commission') {
        return parseFloat(aValue.replace('$', '').replace(',', '')) - parseFloat(bValue.replace('$', '').replace(',', ''));
      }

      return aValue.localeCompare(bValue) * (sortOrder === 'asc' ? 1 : -1);
    });
  };

  // Handle sort
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const sortedOrders = sortOrders(orders);
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl py-6 px-2">Orders</h1>
      <div className="bg-white rounded-2xl border-[0.5px] drop-shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th 
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('product')}
              >
                Product
                {sortField === 'product' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('date')}
              >
                Date
                {sortField === 'date' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('timeSpent')}
              >
                Time spent
                {sortField === 'timeSpent' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('orderValue')}
              >
                Order Value
                {sortField === 'orderValue' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('commission')}
              >
                Commission
                {sortField === 'commission' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th className="py-4 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr 
                key={order.id} 
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden relative">
                      <Image 
                        src={order.product.image}
                        alt={order.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-900">{order.product.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-900">{order.date}</span>
                    <span className="text-sm text-gray-500">{order.time}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-900">{order.timeSpent}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-900">{order.orderValue}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm font-medium text-gray-900">{order.commission}</span>
                </td>
                <td className="py-4 px-6">
                  <button 
                    onClick={() => {
                      setSelectedOrder(order);
                      setChatOpen(true);
                    }}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
                  >
                    View Chat
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0626 4.5V11.8125C14.0626 11.9617 14.0033 12.1048 13.8978 12.2102C13.7923 12.3157 13.6493 12.375 13.5001 12.375C13.3509 12.375 13.2078 12.3157 13.1023 12.2102C12.9968 12.1048 12.9376 11.9617 12.9376 11.8125V5.85773L4.89804 13.898C4.79249 14.0035 4.64934 14.0628 4.50007 14.0628C4.3508 14.0628 4.20765 14.0035 4.1021 13.898C3.99655 13.7924 3.93726 13.6493 3.93726 13.5C3.93726 13.3507 3.99655 13.2076 4.1021 13.102L12.1423 5.0625H6.18757C6.03838 5.0625 5.89531 5.00324 5.78982 4.89775C5.68433 4.79226 5.62507 4.64918 5.62507 4.5C5.62507 4.35082 5.68433 4.20774 5.78982 4.10225C5.89531 3.99676 6.03838 3.9375 6.18757 3.9375H13.5001C13.6493 3.9375 13.7923 3.99676 13.8978 4.10225C14.0033 4.20774 14.0626 4.35082 14.0626 4.5Z" fill="#8A94A6"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstOrder + 1} to {Math.min(indexOfLastOrder, orders.length)} of {orders.length} entries
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={`page-${page}`}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded-lg ${
                  currentPage === page 
                    ? 'bg-[#15B79E] text-white' 
                    : 'hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {selectedOrder && (
        <ChatModal
          isOpen={chatOpen}
          onClose={() => {
            setChatOpen(false);
            setSelectedOrder(null);
          }}
          orderId={selectedOrder.id}
          productName={selectedOrder.product.name}
        />
      )}
    </>
  );
} 