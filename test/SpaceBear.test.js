const Spacebear = artifacts.require('Spacebear')
const truffleAssert = require('truffle-assertions')

contract('Spacebear', (accounts) => {
    it('Should credit an NFT to a specific account', async () => {
        const spacebearInstance = await Spacebear.deployed()
        const spacebearJSON = 'spacebear_1.json'
        const txResult = await spacebearInstance.safeMint(accounts[1], spacebearJSON)

        truffleAssert.eventEmitted(txResult, 'Transfer', {
            from: '0x0000000000000000000000000000000000000000',
            to: accounts[1],
            tokenId: web3.utils.toBN('0'),
        })
        assert.equal(
            await spacebearInstance.ownerOf(0),
            accounts[1],
            'Owner of Token 1 is not correct!'
        )
    })
})
