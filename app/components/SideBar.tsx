import NewChat from "./NewChat";

function SideBar() {
  return (
    <>
      <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
          <div>
            <div>
              <NewChat />
            </div>

            <div>{/* Model Selection */}</div>

            {/* Map through the ChatRows */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
