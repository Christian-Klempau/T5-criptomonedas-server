<script lang="ts" setup>

import Web3 from 'web3'
import {ref} from "vue";
import {abi} from '../contracts/checksum_abi'


const web3 = new Web3(window.ethereum)


// ref account
const account = ref('')
const balance = ref('')
const loaded = ref(false)
const contract = ref('')
const members = ref([])
const checksumRequests = ref([])


// connect to metamask
const connectMetamask = async () => {
  try {
    await window.ethereum.request({method: 'eth_requestAccounts'})
    console.log('connected')
  } catch (error) {
    console.log(error)
  }
}

function getProvider() {
  return web3.currentProvider
}

async function getAccount() {
  return await getProvider().request({method: 'eth_requestAccounts'}).then(accounts => {
    return accounts[0]
  })
}

async function getBalance() {
  if (account.value) {
    return await web3.eth.getBalance(account.value).then(bal => {
      return web3.utils.fromWei(bal, 'ether')
    })
  }
}

async function getContract() {

  const checksumAddress = web3.utils.toChecksumAddress('0xDEB7Aa70149a5f8D85Dd0Ac5B2DA20409615Fe7F')
  return new web3.eth.Contract(abi, checksumAddress)
}

async function getMembers() {
  members.value = await contract.value.methods.getMembers().call()
}

async function getChecksumRequests() {
  checksumRequests.value = await contract.value.methods.getPendingChecksumRequests().call()
}

getAccount().then(acc => {
  account.value = acc
  getBalance().then(bal => {
    balance.value = bal
    getContract().then((contr) => {
      loaded.value = true
      contract.value = contr
    })
  })

})


// getContract().then((contr) => {
//   contract.value = contr
// })


</script>

<template>
  <main>
    <div class="m-4 grid justify-items-center">

      <button class="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="connectMetamask">
        Connect to Metamask
      </button>
      <p><span class="font-bold">Account:</span> {{ account }}</p>
      <p><span class="font-bold">Balance:</span> {{ balance }} ETH</p>

      <div v-if="!loaded">
        <p>Loading...</p>
      </div>

      <div v-if="loaded" class="my-4">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getMembers">
          Get Members
        </button>
      </div>

      <div v-if="members.length">
        <p>Members:</p>
        <ul>
          <li v-for="member in members" :key="member">{{ member }}</li>
        </ul>
      </div>

      <div v-if="loaded" class="my-4">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getChecksumRequests">
          Get Checksum requests
        </button>
      </div>
      <div v-if="checksumRequests.length">
        <p>Checksum Requests:</p>
        <ul>
          <li v-for="request in checksumRequests" :key="request">{{ request }}</li>
        </ul>
    </div>


    </div>


  </main>
</template>
