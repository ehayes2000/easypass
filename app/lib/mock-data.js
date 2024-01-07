const passwordManagers = [
    {
        id: "410544b2-4001-4271-9855-fec4b6a6442a",
        name: "1Password",
        license: "proprietary",
    }
];
const platforms = [
    {
        id: "410544b2-4001-4271-9855-fec4b6a6442a",
        linux: true,
        macos: true, 
        ios: true,
        andriod: true,
        windows: true
    }
]
const features = [
    {  
        id: "410544b2-4001-4271-9855-fec4b6a6442a",
        browserImport: true, 
        competitorImport: true,
        multiAuth: true,
        exportData: true,
        autoPassCapture: true, 
        autoPassReplay: true,
        forms: true,
        multiFormIdentities: true,
        actionableSecurityReport: true,
        secureSharing: true,
        digitalLegacy: true,
        portableEdition: true,
        applicationPasswords: true,
        browserMenuLogins: true,
        appEncryption: true,
        securePassSharing: true
    }
];

const breaches = [];

module.exports = {
    passwordManagers,
    features
};
  