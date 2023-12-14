export const abi = [
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "checksum",
                "type": "bytes32"
            }
        ],
        "name": "concludeChecksumRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "enum Opp",
                "name": "opp",
                "type": "uint8"
            }
        ],
        "name": "concludeMembershipRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "linkToSource",
                "type": "string"
            },
            {
                "internalType": "bytes32",
                "name": "checksum",
                "type": "bytes32"
            }
        ],
        "name": "requestChecksum",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "enum Opp",
                "name": "opp",
                "type": "uint8"
            }
        ],
        "name": "requestMembership",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "checksum",
                "type": "bytes32"
            },
            {
                "internalType": "enum VoteValue",
                "name": "value",
                "type": "uint8"
            }
        ],
        "name": "voteOnChecksumRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "enum Opp",
                "name": "opp",
                "type": "uint8"
            },
            {
                "internalType": "enum VoteValue",
                "name": "value",
                "type": "uint8"
            }
        ],
        "name": "voteOnMembershipRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "checksums",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "checksum",
                "type": "bytes32"
            }
        ],
        "name": "getChecksumRequest",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "checksum",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "submitter",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "linkToSource",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bool",
                                "name": "finished",
                                "type": "bool"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "voter",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "enum VoteValue",
                                        "name": "value",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "uint16",
                                        "name": "accResult",
                                        "type": "uint16"
                                    }
                                ],
                                "internalType": "struct VoteInstance[]",
                                "name": "votes",
                                "type": "tuple[]"
                            }
                        ],
                        "internalType": "struct Vote",
                        "name": "vote",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint256",
                        "name": "creationDate",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ChecksumRequest",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMembers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPendingChecksumRequests",
        "outputs": [
            {
                "internalType": "bytes32[]",
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "enum Opp",
                "name": "opp",
                "type": "uint8"
            }
        ],
        "name": "getPendingMembershipRequest",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "candidate",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "submitter",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bool",
                                "name": "finished",
                                "type": "bool"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "voter",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "enum VoteValue",
                                        "name": "value",
                                        "type": "uint8"
                                    },
                                    {
                                        "internalType": "uint16",
                                        "name": "accResult",
                                        "type": "uint16"
                                    }
                                ],
                                "internalType": "struct VoteInstance[]",
                                "name": "votes",
                                "type": "tuple[]"
                            }
                        ],
                        "internalType": "struct Vote",
                        "name": "vote",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint256",
                        "name": "creationDate",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct MembershipRequest",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPendingMembershipRequests",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];