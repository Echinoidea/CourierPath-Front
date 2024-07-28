import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderDurationTableItem } from "@/types/order-duration-table-item";


export default function OrderDurationTable({
  caption,
  orders,
}: {
  caption: string;
  orders: OrderDurationTableItem[]
}) {

  const sorted = orders.sort((prev, curr) => curr.earnings - prev.earnings);

  return (
    <Table>
      <TableCaption>Short trips</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Restaurant</TableHead>
          <TableHead className="w-1/4">Duration</TableHead>
          <TableHead className="text-right">Avg. Earnings</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="h-full w-full">
        {sorted.map((order: OrderDurationTableItem) => (
          <TableRow>
            <TableCell className="w-1/3 font-medium">{order.restaurantName}</TableCell>
            <TableCell>{order.duration}</TableCell>
            <TableCell className="text-right">{order.earnings}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}