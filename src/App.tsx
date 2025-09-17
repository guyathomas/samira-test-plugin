import { client, SigmaClientProvider, useConfig } from "@sigmacomputing/plugin";
import SigmaLogo from "./assets/sigma-black.svg";
import "./App.css";
import ConnectionStatus from "./components/ConnectionStatus";
import DataTable from "./components/DataTable/DataTable";

const TABLE_SOURCE_ID = "source";

client.config.configureEditorPanel([
  { name: TABLE_SOURCE_ID, type: "element" },
  {
    type: "column",
    name: "Column Names",
    allowMultiple: true,
    source: TABLE_SOURCE_ID,
  },
]);

function App() {
  const config = useConfig();
  return (
    <SigmaClientProvider client={client}>
      <div>
        <a href="https://sigmacomputing.com" target="_blank">
          <img src={SigmaLogo} className="logo" alt="Sigma logo" />
        </a>
      </div>
      <h1>Plugin Starter</h1>
      <ConnectionStatus />
      {config.source && <DataTable configId={config.source} />}
    </SigmaClientProvider>
  );
}

export default App;
