const Wolves = artifacts.require("Wolves.sol");
const Lyacon = artifacts.require("Lyacon.sol");



contract('lyacon',(accounts)=>{
	let wolve;
	let lyacon;
	before(async()=>{
		wolve = await(Wolves.new());
		lyacon = await(Lyacon.new());  
        console.log("Wolve address",wolve.address);
        await lyacon.setWerewolvesAddress(wolve.address);
        console.log("lyacon address",lyacon.address);
        
		

     });


//unstack without stack : token is not still stacked
//unstack not done
        it("Unstack all",async() => {
            try{
            await lyacon.unstakeAll();
            }catch(err){
                Mess_1 = "Must have at least one token staked!";
                if(Mess_1 !== err.reason) return false;
            }
            return true;
        });

//unstack by id
//unstack not done
        it("Unstack By IDs",async() => {
            try{
            await lyacon.unstakeByIds([1]);
            }catch(err){
                Mess_2 = "Message Sender was not original staker!";
                if(Mess_2 !== err.reason) return false;
            }
            return true;
        });

// //get stacker address
//         it("Stacker address",async() => {
//             let val= await lyacon.getStaker([1]);
//             console.log(String(val));
//         });

// //claim all before stack ids :REMAIN
//         it("Claim all before stack ID",async() => {
//             await lyacon.claimAll();
//             //console.log(String(val));
//         });


//claim by ids before stack ids
//claim not done

        it("Claim by id before stack",async() => {
            try{
            let val= await lyacon.claimByTokenId([1]);
            console.log(String(val));
            }catch(err){
                Mess_3 = "Token is not claimable by you!";
                if(Mess_3 !== err.reason) return false;
            }
            return true;
        });

//Getrewards before stacking
        it("Get rewards before stack",async() => {
            let rewards = await lyacon.getAllRewards('0x0000000000000000000000000000000000000000');
            if(rewards !== 0) return false;
        });

//getrewarsby token id
        it("Get rewards before stack using token id",async() => {
            try{
            let rewards = await lyacon.getRewardsByTokenId(1);
            }catch(err){
                Mess_4 = "Token is not staked";
                if(Mess_4 !== err.reason) return false;
            }
            return true;
        });

//Stack by id
        it("Stack by ids",async() => {
            await wolve.setTokenPrice(100000000000000);

            let token_id = await wolve.mint({from:accounts[1],value:100000000000000});
            let owner_address = await wolve.owner();
            console.log("Owner address:",String(owner_address));

            let bal1= await wolve.balanceOf(accounts[1]);
            console.log("Token ",String(bal1));

            let add = await wolve.ownerOf(1);
            console.log("Owner of token 1: ",String(add));

            

            await wolve.setApprovalForAll(lyacon.address,true,{from:accounts[1]});
            

            let status = await wolve.isApprovedForAll(owner_address, lyacon.address);
            console.log("approved status:", Boolean(status));

            // let transfer = await wolve.transferFrom(accounts[1],lyacon.address,[1]);
            // console.log(String(transfer));

            let app = await wolve.getApproved(1);
            console.log("approved token by",String(app));

            // token_id = token_id+'';
            // console.log(util.inspect(token_id, { maxArrayLength: Infinity }));
            let val = await lyacon.stakeByIds([1],{from:accounts[1]});
            console.log(val);

            let staker = await lyacon.getStaker(1);
            console.log(String(staker));

        });

});