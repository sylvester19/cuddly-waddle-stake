import Sidebox from './Components/Sidebox'
import Rightbox from './Components/Rightbox'
import './assets/styles.css'
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import 'react-toastify/dist/ReactToastify.css';

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [alchemyProvider({ alchemyId: "49YmnXw90OQ1d2ZRy5hCUcpgi6I6UP6H" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <section class="mainwrapper">
          <div class="container-fluid">
            <div class="row flexcontainer">
              <Sidebox />
              <Rightbox />
            </div>
          </div>

        </section>
      </RainbowKitProvider>
    </WagmiConfig>

  );
}

