import { NextResponse } from "next/server";

// This would typically come from a database
const orders = [
  {
    id: 1,
    product: {
      name: "Wireless Headphones",
      image: "https://picsum.photos/200",
    },
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
  },
  {
    id: 2,
    product: {
      name: "Smart Watch Pro",
      image: "https://picsum.photos/200",
    },
    date: "24 Apr '2024",
    time: "11:30 AM",
    timeSpent: "1h 45m",
    orderValue: "$299,99",
    commission: "$75",
  },
  {
    id: 3,
    product: {
      name: "Laptop Stand",
      image: "https://picsum.photos/200",
    },
    date: "23 Apr '2024",
    time: "09:15 AM",
    timeSpent: "45m",
    orderValue: "$49,99",
    commission: "$15",
  },
  {
    id: 4,
    product: {
      name: "Mechanical Keyboard",
      image: "https://picsum.photos/200",
    },
    date: "23 Apr '2024",
    time: "14:20 PM",
    timeSpent: "1h 15m",
    orderValue: "$159,99",
    commission: "$40",
  },
  {
    id: 5,
    product: {
      name: "4K Monitor",
      image: "https://picsum.photos/200",
    },
    date: "22 Apr '2024",
    time: "16:45 PM",
    timeSpent: "3h 20m",
    orderValue: "$499,99",
    commission: "$100",
  },
  {
    id: 6,
    product: {
      name: "Wireless Mouse",
      image: "https://picsum.photos/200",
    },
    date: "22 Apr '2024",
    time: "13:10 PM",
    timeSpent: "55m",
    orderValue: "$79,99",
    commission: "$20",
  },
  {
    id: 7,
    product: {
      name: "USB-C Hub",
      image: "https://picsum.photos/200",
    },
    date: "21 Apr '2024",
    time: "11:05 AM",
    timeSpent: "1h 30m",
    orderValue: "$89,99",
    commission: "$25",
  },
  {
    id: 8,
    product: {
      name: "Webcam HD",
      image: "https://picsum.photos/200",
    },
    date: "21 Apr '2024",
    time: "09:30 AM",
    timeSpent: "2h 10m",
    orderValue: "$129,99",
    commission: "$35",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";

  const filteredOrders = orders.filter((order) =>
    order.product.name.toLowerCase().includes(search.toLowerCase())
  );

  return NextResponse.json(filteredOrders);
}
