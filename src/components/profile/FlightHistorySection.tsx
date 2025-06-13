
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

interface FlightHistorySectionProps {
  flightHistory: any;
  flightLoading: boolean;
}

const FlightHistorySection = ({ flightHistory, flightLoading }: FlightHistorySectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-black">Flight Search History</h3>
      {flightLoading ? (
        <div className="bg-white border-4 border-black p-6 text-center">
          <p className="text-black font-bold">Loading flight history...</p>
        </div>
      ) : flightHistory?.data?.length > 0 ? (
        <div className="bg-white border-4 border-black">
          <Table>
            <TableHeader>
              <TableRow className="border-b-4 border-black">
                <TableHead className="font-bold text-black border-r-2 border-black">Route</TableHead>
                <TableHead className="font-bold text-black border-r-2 border-black">Dates</TableHead>
                <TableHead className="font-bold text-black border-r-2 border-black">Searched</TableHead>
                <TableHead className="font-bold text-black">Results</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flightHistory.data.map((search: any, index: number) => (
                <TableRow key={index} className="border-b-2 border-black">
                  <TableCell className="font-bold border-r-2 border-black">
                    {search.source} → {search.destination}
                  </TableCell>
                  <TableCell className="border-r-2 border-black">
                    {search.departure_date} - {search.return_date}
                  </TableCell>
                  <TableCell className="border-r-2 border-black">
                    {search.created_at ? format(new Date(search.created_at), 'dd/MM/yy HH:mm') : 'N/A'}
                  </TableCell>
                  <TableCell>
                    {search.results_count || 0} flights found
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="bg-white border-4 border-black p-6 text-center">
          <p className="text-black font-bold">No flight searches yet. Start planning your first trip!</p>
        </div>
      )}
    </div>
  );
};

export default FlightHistorySection;
