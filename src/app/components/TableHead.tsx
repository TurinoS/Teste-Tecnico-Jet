export default function TableHead() {
  return (
    <div className="table-header-group bg-gray-50 font-bold text-xs text-gray-500">
      <div className="table-row">
        <div className="table-cell text-left p-4 w-[25%] border-b-2 border-gray-200">
          CAR
        </div>
        <div className="table-cell text-left p-4 w-[25%] border-b-2 border-gray-200">
          NEXT RESERVATION
        </div>
        <div className="table-cell text-left p-4 w-[25%] border-b-2 border-gray-200">
          STATUS
        </div>
        <div className="table-cell text-left p-4 w-[25%] border-b-2 border-gray-200">
          RATING
        </div>
        <div className="table-cell text-left p-4 border-b-2 border-gray-200">
          ACTIONS
        </div>
      </div>
    </div>
  );
}
