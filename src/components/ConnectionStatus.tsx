import { client } from "@sigmacomputing/plugin";

const ConnectionStatus = () => {
  const isConnected = !!client.sigmaEnv;
  return (
    <p>
      {isConnected
        ? "Connected to Sigma 🔌"
        : "Render within Sigma to see your plugin ❌"}
    </p>
  );
};

export default ConnectionStatus;
