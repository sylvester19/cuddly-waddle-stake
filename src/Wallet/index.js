import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";


export const MetamaskConnect = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "Metamask successfuly connected.",
                address: addressArray[0],
            };
            alert("Wallet Connected Check Console")
            console.log("Wallet Address=>", obj.address)
        } catch (err) {
            console.log(err)
        }
    } else {
        alert("Please Download Metemask Extension for Chrome")
    }
}

export const WalletConnectFunction = async () => {
    const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org",
        qrcodeModal: QRCodeModal,
    });
    if (!connector.connected) {
        // create new session
        connector.createSession();
        connector.on("connect", (error, payload) => {
            if (error) {
                throw error;
            }
            // Get provided accounts and chainId
            const { accounts, chainId } = payload.params[0];
            console.log("Accounts:", accounts);
            console.log("Chain Id:", chainId);

        });
    } else {

        connector.on("connect", (error, payload) => {
            if (error) {
                throw error;
            }
            // Get provided accounts and chainId
            const { accounts, chainId } = payload.params[0];
            console.log("Accounts:", accounts);
            console.log("Chain Id:", chainId);

        });

    }

}