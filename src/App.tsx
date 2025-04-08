import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

function App() {
  const testData = {
    fullName: "Имя пользователя",
    avatarUrl:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/Paulie-Gualtieri.jpg",
  };

  return (
    <>
      <Header />
      <div className="p-3 bg-[#1A1A1A] h-screen">
        <Profile user={testData} />
      </div>
    </>
  );
}

export default App;
