<!doctype html>
<html lang="en">
   <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- CSS -->
      <!-- <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="fontawesome/css/all.min.css"> -->
      <link rel="stylesheet" href="{{url('assets/css/user_common.min.css')}}">
      <!-- CSS -->
      <title>Howling Werewolves</title>
   </head>
   <body>
      <div class="anonymice-main">
         <div class="stake-o-matron-btn text-right">
            <button class="btn-main" id="ConnectMetamask"> Connect </button>
         </div>
         <div class="wrapper">
            <div class="anonymice-div">
               <section class="stake-o-matron text-center">
                  <h1>Howling Werewolves</h1>
                  <p class="theme-description" id="howlingdata">Wolves Tracker: ? (?) | ? Burned | ? Staked | ? Unstaked</p>
                  <h3 class="theme-description" id="saleStatus" style="padding: 15px 0px; font-size: 20px;">Sale Status: Closed<h3>
                  
                  <div class="anonymice-connect-wallet">
                     <div class="connect-wallet-main clearfix">
                        <div class="connect-wallet-box">
                           <p class="theme-description">Your Available <br>Wolves</p>
                           <h3 class="value" id="currentwolves">0.0 Wolves</h3>
                        </div>
                        <div class="connect-wallet-box">
                           <p class="theme-description">Your Staked <br>Wolves</p>
                           <h3 class="value" id="currentstake">0.0 Wolves</h3>
                        </div>
                     </div>
                  </div>
                  <div class="approve-mice approve-msg text-left" id="approvewolve" style="display:none">
                    <div class="approve-mice-box"><p class="theme-description">Approve WOLVES to Start Stacking</p></div>
                    <div class="approve-mice-box text-right"><button class="btn-main" id="isapprove"><i class="fas fa-spinner fa-spin" id="approveloader" style="display:none"></i>Approve</button></div>
                  </div>
                  <div class="approve-mice text-left" id="wolveapprove" style="display:none">
                      <p class="theme-description">You have already approve <i class="far fa-check-circle"></i></p>
                  </div>
                  <div class="stake-anonymice text-left">
                     <div class="page-title">
                        <h2>Stake Howling Werewolves</h2>
                     </div>
                     <div class="stake-anonymice-main clearfix">
                         <div class="stake-pending clearfix">
                            <div class="stake-pending-box">
                               <p class="theme-description">Your LYACON</p>
                               <h3 class="value" id="yourlyacon">0.0</h3>
                            </div>
                            <div class="stake-pending-box">
                               <p class="theme-description">Your Pending LYACON</p>
                               <h3 class="value" id="pendinglyacon">0.0</h3>
                            </div>
                         </div>
                         <div class="stake-pending-btn text-right">
                           <button class="btn-main" data-toggle="modal" data-target="#stake-anonymice" id="stakewolve" ><i class="fas fa-spinner fa-spin" id="loader" style="display:none"></i> Stake</button>
                         </div>
                     </div>
                  </div>
                  <div class="claim-box text-left">
                      <div class="page-title">
                        <h2>Claim</h2>
                     </div>
                     <div class="claim-btn text-center">
                        <button class="btn-main" id="claimall"><i class="fas fa-spinner fa-spin" id="unstakeallloader" style="display:none"></i>Claim LYACON</button>
                    </div>
                  </div>
                  <div class="unstake-area text-left">
                     <div class="page-title">
                        <h2>Unstake</h2>
                     </div>
                     <div class="theme-input clearfix">
                        <input class="theme-input-box" type="text" name="unstake" id="unstake" placeholder="For multiple Unstake enter ids separated by comma. E.G 1,2">
                        <button class="btn-main" id="unstakewolve"> <i class="fas fa-spinner fa-spin" id="unstakeloader" style="display:none"></i>Unstake</button>
                     </div>
                     <div class="your-anonymice">
                        <h2>Unstake all your Howling Werewolves</h2>
                        <button class="btn-main" data-toggle="modal" data-target="#unstakeallemodel"><i class="fas fa-spinner fa-spin" id="unstakeallloader" style="display:none"></i>Unstake All</button>
                        <!-- <button class="btn-main" id="Add">Add</button> -->
                     </div>
                  </div>
                  <div class="unstake-area text-left">
                     <div class="page-title">
                        <h2>Mint</h2>
                     </div>
                     <div class="your-anonymice">
                        <button class="btn-main" id="mint_wolve"><i class="fas fa-spinner fa-spin" id="mintwolveloader" style="display:none"></i>Mint</button>
                     </div>
                     <div class="your-anonymice">
                        <h2><a href="" id="imglink" target="_blank"></a></h2>
                     </div>
                  </div>
               </section>
               <footer class="footer">
                      <div class="page-title">
                        <h3>Contract Detail</h3>
                     </div>
                  <!-- <div class="note">
                     <p class="theme-description">This website is an unofficial website to make interacting with LYACON easier. Use at your own risk. We are not responsible for any losses if there are any incurred.</p>
                  </div> -->
                  <ul>
                     <li>Howling Werewolves Contract: <a href="" id="howling" target="_blank" class="howling"></a></li>
                     <li>LYACON Contract: <a href="" id="lyacon" target="_blank" class="lyacon"></a></li>
                  </ul>
               </footer>
               <div class="made-by text-center">
                   <p class="theme-description">Made with <i class="far fa-heart"></i> Thank you <i class="far fa-smile"></i></p>
                </div>
                <!-- <div id="tokenuri" style="height: 200px; width: 500px;"></div> -->
            </div>
         </div>
      </div>
      <div class="modal fade" id="stake-anonymice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <h5 class="modal-title" id="exampleModalLabel">Stake Howling Werewolves</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="theme-input clearfix">
                <input class="theme-input-box" type="" name="stakedata" id="stakedata" placeholder="For multiple Stake enter ids separated by comma. E.G 1,2">
                <button class="btn-main" id="stake">Stake Now</button>
              </div>
            </div>
            <!-- <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Start unstake  -->
      <div class="modal fade" id="unstakesinglemodel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p class="theme-description">Be careful ! All your Wolves NFT will burn <br>once you unstake Werewolves.</p>
              <div class="footer-btn clearfix">
                <button class="btn-main" id="unstakesingle">Yes</button>
                <button class="btn-main btn-transperant" id="nounstake">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End unstake -->

      <div class="modal fade" id="unstakeallemodel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <p class="theme-description">Be careful ! All your Wolves NFT will burn <br>once you unstake all Werewolves.</p>
              <div class="footer-btn clearfix">
                <button class="btn-main" id="unstakeall">Yes</button>
                <button class="btn-main btn-transperant" id="nounstakeall">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- javascript -->
      <script src="{{url('assets/js/user_common.min.js')}}"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
      <!-- javascript -->
   </body>
</html>
