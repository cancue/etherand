const helpers = require("./helpers.js")
const Etherand = artifacts.require("./Etherand.sol")

contract("Committee", (users) => {
  let subject

  before(async () => {
    subject = await Etherand.new()
  })

  describe("setCommittee", () => {
    const committee = users[0]
    const noCommittee = users[1]
    const targetAddress = users[2]

    describe("when sender is not committee", () => {
      it("reverts", async () => {
        await helpers.assertRevert(
          subject.setCommittee(targetAddress, { from: noCommittee })
        )
      })
    })

    describe("when sender is committee", () => {
      it("should change committee", async () => {
        const { logs } = await subject.setCommittee(targetAddress, {
          from: committee
        })

        assert.equal(logs.length, 1)
        assert.equal(logs[0].event, "SetCommittee")
        assert.equal(logs[0].args.committee, targetAddress)
        const newCommittee = await subject.committee()
        assert.equal(newCommittee, targetAddress)
      })
    })
  })
})
