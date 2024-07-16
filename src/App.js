import sendButton from "./assets/icons/send-button.svg"

function App() {
  return (
    <body className="text-lg font-semibold">
      <div class="heading" className="h-24 flex justify-between m-2 p-2 border-2 border-purple-700 rounded-lg">
        <div className="w-1/4 border-2 border-black rounded-lg p-2 bg-new text-neutral-50">
          Messege
        </div>
        <div className="w-3/4 border-2 border-black rounded-lg p-2 bg-new text-neutral-50">
          Hasan
        </div>
      </div>

      <div class="main body" className="flex justify-between p-2">

        <div class="left-side" className="w-1/4 border-2 border-black rounded-lg text-wrap">
          <div className="m-2 p-2 h-20 bg-new rounded-lg align-middle text-neutral-50 ">
            Tanvir
          </div>
          <div className="m-2 p-2 h-20  bg-new rounded-lg align-middle text-neutral-50  ">
            Hasan
          </div>
          <div className="m-2 p-2 h-20 bg-new rounded-lg align-middle text-neutral-50  ">
            Serazy
          </div>
          <div className="m-2 p-2 h-20 bg-new rounded-lg align-middle text-neutral-50  ">
            Shihab
          </div>
          <div className="m-2 p-2 h-20 bg-new rounded-lg align-middle text-neutral-50  ">
            Fuchka
          </div>
          <div className="m-2 p-2 h-20 bg-new rounded-lg align-middle text-neutral-50  ">
            Tel
          </div>
          <div className="m-2 p-2 h-20 bg-new rounded-lg align-middle text-neutral-50  ">
            Moon
          </div>
          <div className="m-2 p-2 h-20 bg-new rounded-lg align-middle text-neutral-50  ">
            Sun
          </div>
        </div>

        <div>
          <div class="right-side" className="border-2 border-black rounded-lg p-2 h-20 w-3/4 fixed bottom-0 right-0 bg-new text text-neutral-50 pt-2 my-2 indent-8 text-center text-3xl">
            Go Ahead! 👍🏼
            <div class="Send button" className="">
          <img className="fixed right-2 bottom-5" style={{width: "50px"}} src={sendButton} alt="ERROR"></img>
          </div>

          </div>

          
        </div>
      </div>

    </body>
  );
}

export default App;
