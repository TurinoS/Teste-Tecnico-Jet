import Table from "./components/Table";
import TableHead from "./components/TableHead";
import { TableRow } from "./components/TableRow";

export default function Home() {
  return (
    <main>
      <Table>
        <TableHead />
        <TableRow.Root>
          <TableRow.Cell className="py-1">
            <TableRow.Image />
            <TableRow.Name />
          </TableRow.Cell>
          <TableRow.Cell>
            <TableRow.Date />
          </TableRow.Cell>
          <TableRow.Cell>
            <TableRow.Status />
          </TableRow.Cell>
          <TableRow.Cell>
            <TableRow.Rating />
          </TableRow.Cell>
          <TableRow.Cell>
            <TableRow.Action />
          </TableRow.Cell>
        </TableRow.Root>
        <TableRow.Root>
          <TableRow.Cell className="py-1">
            <TableRow.Image />
            <TableRow.Name />
          </TableRow.Cell>
          <TableRow.Cell>
            <TableRow.Date />
          </TableRow.Cell>
          <TableRow.Cell>
            <TableRow.Status />
          </TableRow.Cell>
          <TableRow.Cell>
            <TableRow.Rating />
          </TableRow.Cell>
          <TableRow.Cell>
            <TableRow.Action />
          </TableRow.Cell>
        </TableRow.Root>
      </Table>
    </main>
  );
}
