import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProposalVoteFactoryModule = buildModule("ProposalVoteFactoryModule", (m) => {
  const ProposalVoteFactory = m.contract("ProposalVoteFactory");

  return { ProposalVoteFactory };
});

export default ProposalVoteFactoryModule;