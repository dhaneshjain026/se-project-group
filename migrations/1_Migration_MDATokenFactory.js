const MDATokenFactory = artifacts.require('MDATokenFactory')

module.exports = (deployer) => {
    deployer.deploy(MDATokenFactory, '0x3757e577697D9b79b6f6c7F0068D7E5746319A92')
}