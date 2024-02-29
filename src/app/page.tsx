"use client";

import MobileStatus from "./components/MobileStatus";
import Table from "./components/Table";
import TableHead from "./components/TableHead";
import { TableRow } from "./components/TableRow";
import { BeatLoader } from "react-spinners";
import { data } from "../app/fakeData";

import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      {isMobile === undefined ? (
        <div className="flex flex-col gap-4 items-center justify-center mt-16 text-[#a0f4cf]">
          <p className="text-2xl font-bold">Loading</p>
          <BeatLoader size={15} color={"#a0f4cf"} aria-label="Loading" />
        </div>
      ) : (
        <Table>
          <TableHead />
          {data.map((car) => (
            <TableRow.Root key={car.id}>
              {isMobile && <MobileStatus status={car.status} />}
              <TableRow.Cell>
                <TableRow.Image src={car.img} name={car.name} />
                {!isMobile && <TableRow.Name name={car.name} />}
              </TableRow.Cell>
              {isMobile ? (
                <TableRow.Cell className="flex-col items-start px-4 w-[200px]">
                  <TableRow.Name name={car.name} />
                  <TableRow.Date date={car.date} />
                  <TableRow.Rating rating={car.rating} />
                </TableRow.Cell>
              ) : (
                <TableRow.Cell>
                  <TableRow.Date date={car.date} />
                </TableRow.Cell>
              )}
              {!isMobile && (
                <TableRow.Cell>
                  <TableRow.Status status={car.status} />
                </TableRow.Cell>
              )}
              {!isMobile && (
                <TableRow.Cell>
                  <TableRow.Rating rating={car.rating} />
                </TableRow.Cell>
              )}
              <TableRow.Cell>
                <TableRow.Action />
              </TableRow.Cell>
            </TableRow.Root>
          ))}
        </Table>
      )}
    </main>
  );
}
