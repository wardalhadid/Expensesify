import Nav from "../components/Nav";
import ReceiptsForm from "../components/ReceiptsForm";
import ReceiptsTable from "../components/ReceiptsTable";

export default function ReceiptHub () {
    return (
      <div>
        <Nav />
        <ReceiptsForm />
        <ReceiptsTable />
      </div>
    );
}