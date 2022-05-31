let WolvesContract = "";
let LycaonContract = "";
let address = "";
let cc_id = "";

jQuery(() => {
  
  $("#ConnectMetamask").on("click", async () => {
    $("#ConnectMetamask").prop("disabled", true);
    $("#ConnectMetamask .fa-spinner").show();
    if (typeof ethereum === "undefined") {
      Toast("MetaMask is not installed!", 3000, 1);
      $("#ConnectMetamask").prop("disabled", false);
      $("#ConnectMetamask .fa-spinner").hide();
      return;
    }
    $.when(address == "" ? await connectMetamask() : "").then(() => {
      if (address == "") {
        $("#ConnectMetamask").prop("disabled", false);
        $("#ConnectMetamask .fa-spinner").hide();
        Toast("Please connect to Metamask.", 3000, 1);
        return;
      }
      if (chainId != cc_id) {
        Toast("You are on different chain id.", 3000, 1);
        $("#ConnectMetamask").prop("disabled", false);
        $("#ConnectMetamask .fa-spinner").hide();
      }
    });
  });

  if (typeof ethereum === "undefined") {
    Toast("MetaMask is not installed!", 3000, 1);
  } else {
    isConnected();
  }
  async function isConnected() {
    web3 = new Web3(ethereum);
    let error, accounts;
    await web3.eth.getAccounts((err, acc) => {
      error = err;
      accounts = acc;
    });
    if (error != null) {
      console.log(error);
    }
    if (accounts.length > 0) {
      return connectMetamask();
    }
    address = "";
  }

  async function connectMetamask() {
    if (typeof ethereum === "undefined") {
      Toast("MetaMask is not installed!", 3000, 0);
    }
    try {
      $('#isapprove').show();
      const accounts = await ethereum.request({method: "eth_requestAccounts",});
      cc_id = await web3.utils.hexToNumber(await ethereum.request({ method: "eth_chainId" }));
      console.log(accounts);
      address = accounts[0];
      if (chainId != cc_id) {
        Toast("You are on different chain id.", 3000, 1);
        $("#ConnectMetamask").prop("disabled", false);
        $("#ConnectMetamask .fa-spinner").hide();
        return;  
      }
        $("#ConnectMetamask").addClass("connected-wallet");
        let str = address.substr(0, 4) + "..." + address.substr(address.length-4, 4) + "<span><i class='far fa-dot-circle'></i> connected</span>";
        $("#ConnectMetamask").html(str);
        $('#ConnectMetamask').prop( "disabled", true );
       
        WolvesContract = new web3.eth.Contract(WolvesABI.abi,wolvesContractAddress);
        LycaonContract = new web3.eth.Contract(LycaonABI.abi,lycaonContractAddress);

        saleSatus();
        wolvesbalance();
        checkWolveApprove();
        stakebalance();
        lyaconbalance();
        getMiceTrackerInfo();
        pendingLyacon();

      
      $.when((web3 = new Web3(ethereum))).then(async () => {
        cc_id = await web3.utils.hexToNumber(await ethereum.request({ method: "eth_chainId" }));
        if (chainId != cc_id) {
          $("#ConnectMetamask").show();
          address = "";
        } else {

        }
        $("#ConnectMetamask").html(str);
      });
    } catch (error) {
      console.log(error);
      Toast(error.message, 3000, 1);
      $("#ConnectMetamask").prop("disabled", false);
      $("#ConnectMetamask .fa-spinner").hide();
    }
  }

    ethereum.on("chainChanged", async (_chainId) => {
    console.log('------------------------------------');
    console.log("change chain call :- "+_chainId);
    console.log('------------------------------------');
    connectMetamask();
});

    ethereum.on("accountsChanged", async (_chainId) => {
        $("#ConnectMetamask").show();
        connectMetamask();
});
});

async function getMiceTrackerInfo(){
  const totalSupply = await WolvesContract.methods.totalSupply().call({ from: address });
  const totalBurned = await WolvesContract.methods.balanceOf('0x000000000000000000000000000000000000dEaD').call({ from: address });
  const totalStaked = await WolvesContract.methods.balanceOf(lycaonContractAddress).call({ from: address });
  const string = `Wolves Tracker: ${totalSupply} (${totalSupply - totalBurned}) | ${totalBurned} Burned | ${totalStaked} Staked | ${totalSupply - totalBurned - totalStaked} Unstaked`
  $('#howlingdata').html(string);
};

let presale, publicSale;

async function saleSatus() {

  await WolvesContract.methods
    .presaleStarted()
    .call({ from: address }, function (error, res) {
      presale = false;
      if(res == true) {
        $("#saleStatus").html("Sale Status: Whitelist Only");
        presale = true;
      }
      return;
    });

  await WolvesContract.methods
    .publicSaleStarted()
    .call({ from: address }, function (error, res) {
      if(res == true) {
        $("#saleStatus").html("Sale Status: Open");
        publicSale = true;
      }
      else {
        $("#saleStatus").html("Sale Status: Closed");
        publicSale = false;
      }
      return;
    });
}

//Wolves Balance Call Start
async function wolvesbalance() {
    await WolvesContract.methods
      .balanceOf(address)
      .call({ from: address }, function (error, res) {
        console.log('===============');
        console.log(res);
        $("#currentwolves").html(res + " Wolves");
        return;
      });
  }
//Wolves Balance Call End

//Lyacon Balance Call Start
async function lyaconbalance() {
  await LycaonContract.methods
    .balanceOf(address)
    .call({ from: address }, function (error, res) {
      amount = res * Math.pow(10,-18);
      $("#yourlyacon").html(amount);
      return;
    });
}
//Lyacon Balance Call End

//Lyacon Balance Call Start
async function pendingLyacon() {
  await LycaonContract.methods
    .getAllRewards(address)
    .call({ from: address }, function (error, res) {
      amount = (res * Math.pow(10,-18));
      $("#pendinglyacon").html(amount);
      return;
    });
}
//Lyacon Balance Call End

//Stake Balance Call Start
async function stakebalance() {
    await LycaonContract.methods
      .getTokensStaked(address)
      .call({ from: address }, function (error, res) {
        $("#currentstake").text(res.length + " Wolves");
        return;
      });
  }
//Stake Balance Call End

async function checkWolveApprove(){
    await WolvesContract.methods
        .isApprovedForAll(address, lycaonContractAddress)
        .call({ from: address }, function (error, res) {
            if (res) {
                $('#wolveapprove').show();
                $('#approvewolve').hide();
                return;
            }else{
                $('#approvewolve').show();
                $('#wolveapprove').hide();
                return;
            }
    });
}


//Mint Wolve
$("#mint_wolve").on("click", async () => {

    $('#mintwolveloader').show();
    $('#mint_wolve').prop( "disabled", true );
    const data = await fetch('./js/whitelist.json');
    const response = await data.json();
    const leafNodes = response.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    const proof = merkleTree.getHexProof(keccak256(address));
    
    const tokenPrice = await WolvesContract.methods.getTokenPrice().call({ from: address });
    console.log(tokenPrice);

    if(presale == true) {
      try {
        await  WolvesContract.methods
          .mintPresale(1, proof)
          .send({ from: address,value:tokenPrice }, function (error, res) {}).on("receipt", function(receipt){
                  if(receipt.status == true)
                  {
                      Toast("WOLVE minted successfully", 3000, 2);
                      $('#mintwolveloader').hide();
                      $('#mint_wolve').prop( "disabled", false);
                      return;
                  }
          });
      } catch (error) {
        console.log(error);
        Toast("Transaction has been cancel", 3000, 1);
        $('#mintwolveloader').hide();
        $('#mint_wolve').prop( "disabled", false);
      }
    }
    else if(publicSale == true) {
      try {
        await  WolvesContract.methods
          .mint(1)
          .send({ from: address,value:tokenPrice }, function (error, res) {}).on("receipt", function(receipt){
                  if(receipt.status == true)
                  {
                      Toast("WOLVE minted successfully", 3000, 2);
                      $('#mintwolveloader').hide();
                      $('#mint_wolve').prop( "disabled", false);
                      return;
                  }
          });
      } catch (error) {
        console.log(error);
        Toast("Transaction has been cancel", 3000, 1);
        $('#mintwolveloader').hide();
        $('#mint_wolve').prop( "disabled", false);
      }
    }
    else {
      Toast("Mint is not available now", 3000, 1);
    }
});



//Approve Start
$("#isapprove").on("click", async () => {

    $('#approveloader').show();
    $('#isapprove').prop( "disabled", true );
    try {
        await  WolvesContract.methods
              .setApprovalForAll(lycaonContractAddress, true)
              .send({ from: address }, function (error, res) {}).on("receipt", function(receipt){
                      if(receipt.status == true)
                      {
                          Toast("You have approve WOLVES", 3000, 2);
                          $('#approvewolve').hide();
                          $('#wolveapprove').show();
                          $('#approveloader').hide();
                          $('#isapprove').prop( "disabled", false);
                          return;
                      }
             });
    } catch (error) {
      console.log(error);
      Toast("Transaction has been cancel", 3000, 1);
      $('#approveloader').hide();
      $('#isapprove').prop( "disabled", false);
  }
});
//Approve End

//Stake Start
$("#stake").on("click", async () => {
    let stakedata = $("#stakedata").val();
    console.log('stake');
    console.log(stakedata);
    if(stakedata == ''){
      Toast("Please Enter token ID for stake", 3000, 1);
      return;
    }
    let stakedataArray = stakedata.split(",");
    await WolvesContract.methods
        .isApprovedForAll(address, lycaonContractAddress)
        .call({ from: address }, function (error, res) {
        if (!res) {
            $("#stakedata").val('');
            $("#stake-anonymice").modal("hide");
            Toast("You need to approve your WOLVES first!", 3000, 1);
            return;
        }else{
          try {
            $('#loader').show();
            $('#stakewolve').prop( "disabled", true );
            LycaonContract.methods
            .stakeByIds(stakedataArray)
            .send({ from: address }, function (error, res) {$("#stake-anonymice").modal("hide");})
            .on("receipt", function(receipt) {
                if(receipt.status == true)
                {
                  Toast("Token Stake Successfully.", 3000, 2);
                  $('#loader').hide();
                  $("#stake-anonymice").modal("hide");
                  $('#stakewolve').prop( "disabled", false);
                  return;
                }
              })
            .on("error",function(error,receipt){
                  $('#loader').hide();
                  $("#stake-anonymice").modal("hide");
                  $('#stakewolve').prop( "disabled", false);
            });
          } catch (error) {
              $("#stake-anonymice").modal("hide");
              $('#loader').hide();
              $('#stakewolve').prop( "disabled", false);
              Toast("Transaction has been cancel", 3000, 1);
              return;
          }
        }
    });
      
    
    
});

//Stake End

// Claim All Start
$('#claimall').on("click", async () => {
    try {
      $('#unstakeallloader').show();
      $('#claimall').prop( "disabled", true );
        await LycaonContract.methods
        .claimAll()
        .send({ from: address }, function (error, res) {}).on("receipt", function(receipt) {
            if(receipt.status == true)
            {
              Toast("Claim Successfully", 3000, 2);
              $('#unstakeallloader').hide();
              $('#claimall').prop( "disabled", false );
              $("#claimwolve").modal("hide");
              return;
            }
        });
    } catch (error) {
        console.log(error);
        $('#claimwolve').modal('hide');
        Toast("Transaction has been cancel", 3000, 1);
        $('#unstakeallloader').hide();
        $('#claimall').prop( "disabled", false );
    }
});
// Claim All End

$('#unstakewolve').on("click",function(){
    let unstake = $("#unstake").val();
    if(!unstake)
    {
        Toast("Please Enter token ID to unstake token.", 3000, 1);
        return false;
    }
    $('#unstakesinglemodel').modal('show');

})

// Start UnStake Single
$('#unstakesingle').on("click", async () => {
    try {
        $('#unstakeloader').show();
        $('#unstakewolve').prop( "disabled", true );
        let unstake = $("#unstake").val();
        let unstakeArray = unstake.split(",");
        await LycaonContract.methods
        .unstakeByIds(unstakeArray)
        .send({ from: address }, function (error, res) {$("#unstakesinglemodel").modal("hide");}).on("receipt", function(receipt) {
            if(receipt.status == true)
            {
              Toast("unstake werewolves successfully", 3000, 2);
              $("#unstakesinglemodel").modal("hide");
              $('#unstakeloader').hide();
              $('#unstakewolve').prop( "disabled", false);
              return;
            }
        });
    } catch (error) {
        console.log(error);
        $('#unstakesinglemodel').modal('hide');
        $('#unstakeloader').hide();
        $('#unstakewolve').prop( "disabled", false);
        Toast("Transaction has been cancel", 3000, 1);
    }
});
$('#nounstake').on('click',function(){
    $("#unstake").val('');
    $('#unstakesinglemodel').modal('hide');
})
// End UnStake Single


// Start UnStakeAll Single
$('#unstakeall').on("click", async () => {
    try {
      
      $('#unstakeallloader').show();
      $('#unstakeallloader').prop( "disabled", true );
        await LycaonContract.methods
        .unstakeAll()
        .send({ from: address }, function (error, res) {$("#unstakeallemodel").modal("hide");}).on("receipt", function(receipt) {
            if(receipt.status == true)
            {
              Toast("unstake all werewolves successfully", 3000, 2);
              $("#unstakeallemodel").modal("hide");
              $('#unstakeallloader').hide();
              $('#unstakeallloader').prop( "disabled", false);
              return;
            }
        });
    } catch (error) {
        $('#unstakeallemodel').modal('hide');
        Toast("Transaction has been cancel", 3000, 1);
        $('#unstakeallloader').hide();
        $('#unstakeallloader').prop( "disabled", false);
    }
});
$('#nounstakeall').on('click',function(){
    $('#unstakeallemodel').modal('hide');
})
// End UnStakeAll Single
