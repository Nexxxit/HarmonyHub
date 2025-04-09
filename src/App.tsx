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
      <div className="p-3 bg-[#F5F5F5] h-screen">
        <Header />
        <Profile user={testData} />
      </div>
    </>
  );
}

export default App;
