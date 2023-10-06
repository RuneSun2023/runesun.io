// Importer web3 biblioteket
const Web3 = require('web3');

// Opret en ny web3 instans
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"));

// Definer adressen til din smart kontrakt
const contractAddress = "0xYourContractAddressHere";

// Definer ABI (Application Binary Interface) for din smart kontrakt
const contractABI = [...]  // Hentes fra din smart kontrakt's kompileringsoutput

// Opret en ny kontraktinstans
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Funktion til at hente NFT-metadata
async function getNFTMetadata(tokenId) {
    try {
        // Antager, at din smart kontrakt har en funktion kaldet 'getMetadata'
        const metadata = await contract.methods.getMetadata(tokenId).call();
        console.log(metadata);
    } catch (error) {
        console.error(`Failed to fetch metadata for token ID ${tokenId}:`, error);
    }
}

// Funktion til at overføre en NFT
async function transferNFT(fromAddress, toAddress, tokenId) {
    try {
        // Antager, at du har en private nøgle for at signere transaktionen
        const privateKey = "0xYourPrivateKeyHere";
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        web3.eth.accounts.wallet.add(account);

        // Opsæt transaktionsdata
        const txData = {
            from: fromAddress,
            to: contractAddress,
            gas: 2000000,  // Gas limit, juster efter behov
            data: contract.methods.transferFrom(fromAddress, toAddress, tokenId).encodeABI()
        };

        // Send transaktionen
        const receipt = await web3.eth.sendTransaction(txData);
        console.log(`Transaction successful with hash: ${receipt.transactionHash}`);
    } catch (error) {
        console.error(`Failed to transfer token ID ${tokenId} from ${fromAddress} to ${toAddress}:`, error);
    }
}

// Eksempel på, hvordan man bruger funktionerne
getNFTMetadata(1);  // Henter metadata for NFT med token ID 1
transferNFT('0xYourAddressHere', '0xRecipientAddressHere', 1);  // Overfører NFT med token ID 1
